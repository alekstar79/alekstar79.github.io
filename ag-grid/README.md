# AG Grid + Vue 3

Я сознательно не даю "теорию ради теории", а то, что реально спрашивают и что нужно быстро писать
руками на live-coding. Акцент сделан на AG Grid как самостоятельный движок таблицы,
а Vue здесь - обвязка, реактивность и внедрение кастомных компонентов.

Что ожидается от Vue.js Developer не заучивания всех опций AG Grid, а понимания:
- как устроены `rowData`, `columnDefs`, `GridApi`;
- чем отличаются row models;
- как сортировка/фильтрация работают на клиенте и на сервере;
- как правильно обновлять данные без пересоздания таблицы;
- как делать кастомные cell renderer / cell editor / filter;
- где начинаются проблемы с производительностью;
- как интегрировать AG Grid в Vue без типичных ошибок.

---

# 1. План подготовки

## Часть 1 - уверенная база AG Grid + Vue

Цель: свободно делать основные таблицы, фильтрацию, сортировку, редактирование, выбор строк, экспорт.

| № | Тема                                                                                        |
|---|---------------------------------------------------------------------------------------------|
| 1 | Поднять проект Vite + Vue 3 + TypeScript + AG Grid                                          |
| 2 | Колонки: field, width, valueGetter, valueFormatter, cellClass                               |
| 3 | Сортировка: стандартная, кастомные comparator, программная сортировка                       |
| 4 | Фильтрация: text/number/date, floating filter, quick filter, external filter, custom filter |
| 5 | Cell renderer, cell editor, редактирование, события                                         |
| 6 | Selection, pagination, export CSV, сохранение состояния                                     |

## Часть 2 - продвинутый AG Grid и собеседование

Цель: понимать большие данные, row models, группировку, tree, master/detail, производительность.

| № | Тема                                                               |
|---|--------------------------------------------------------------------|
| 1 | Row models: client-side, infinite, server-side                     |
| 2 | Grouping, aggregation, pivot, tree data, master/detail             |
| 3 | Performance: getRowId, applyTransaction, shallowRef, виртуализация |
| 4 | Column state, filter state, локализация, темы                      |
| 5 | Live-coding задачи                                                 |
| 6 | Вопросы собеседования и пробные ответы                             |

---

# 2. Версии и базовый шаблон проекта

Дальше я использую стабильную связку:

- `Vue 3`
- `TypeScript`
- `Vite`
- `ag-grid-community`
- `ag-grid-vue3`

Почему так: на собеседованиях часто встречаются проекты на AG Grid 31–32,
а API в этих версиях уже не разделён на `api` и `columnApi`. `ColumnApi` **устарел**,
и все операции с колонками выполняются через `GridApi` .

Установка:

```bash
npm install vue@3 vite@5 typescript ag-grid-community@31 ag-grid-vue3@31
```

Если понадобится Enterprise:

```bash
npm install ag-grid-enterprise@31
```

**Важно**: версии `ag-grid-community` и `ag-grid-vue3` должны **совпадать по major-версии**.

---

## 2.1. `main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'

// Обязательные стили AG Grid
import 'ag-grid-community/styles/ag-grid.css'

// Тема. Может быть alpine, balham, material и т.д.
import 'ag-grid-community/styles/ag-theme-alpine.css'

createApp(App).mount('#app')
```

Без CSS AG Grid часто выглядит "сломанным". Самая частая ошибка на live-coding: таблица есть, но у контейнера нет высоты или не подключены стили.

---

## 2.2. Минимальный `App.vue`

```vue
<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type {
  ColDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community'

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  salary: number;
  status: 'active' | 'fired';
  hired: string;
}

const rowData = ref<Employee[]>([
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Петров',
    age: 32,
    salary: 220000,
    status: 'active',
    hired: '2021-03-01'
  },
  {
    id: 2,
    firstName: 'Мария',
    lastName: 'Сидорова',
    age: 27,
    salary: 180000,
    status: 'fired',
    hired: '2022-07-15'
  },
  {
    id: 3,
    firstName: 'Алексей',
    lastName: 'Козлов',
    age: 41,
    salary: 250000,
    status: 'active',
    hired: '2019-11-20'
  }
])

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя' },
  { field: 'lastName', headerName: 'Фамилия' },
  { field: 'age', headerName: 'Возраст' },
  { field: 'salary', headerName: 'Зарплата' },
  { field: 'status', headerName: 'Статус' },
  { field: 'hired', headerName: 'Дата приема' }
])

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api

  // Часто удобно на старте подогнать колонки под ширину грида
  params.api.sizeColumnsToFit()
}
</script>

<template>
  <div class="page">
    <h1>Сотрудники</h1>

    <!-- AG Grid требует контейнер с высотой и темой -->
    <div class="ag-theme-alpine" style="height: 520px">
      <AgGridVue
        style="width: 100%; height: 100%"
        :rowData="rowData"
        :columnDefs="columnDefs"
        :animateRows="true"
        @grid-ready="onGridReady"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 16px;
}
</style>
```

Это самый важный стартовый шаблон. На собеседовании ожидается, что кандидат быстро соберет именно такой скелет.

---

# 3. Ментальная модель AG Grid

AG Grid — это не просто Vue-компонент, который рендерит `v-for` по строкам. Это отдельный движок таблицы.

Основные сущности:

| Сущность       | Назначение                                             |
|----------------|--------------------------------------------------------|
| `rowData`      | данные строк                                           |
| `columnDefs`   | описание колонок                                       |
| `GridApi`      | API таблицы: фильтры, выбор строк, экспорт, транзакции |
| `ColDef`       | конфигурация одной колонки                             |
| `GridOptions`  | общий объект настроек                                  |
| `RowNode`      | внутреннее представление строки                        |
| `CellRenderer` | кастомный рендер ячейки                                |
| `CellEditor`   | кастомный редактор ячейки                              |
| `Filter`       | кастомный или встроенный фильтр                        |

Очень важно понимать разницу:

```ts
rowData = [...] // данные
columnDefs = [...] // структура колонок
gridApi // управление состоянием грида
```

---

# 4. Community и Enterprise

Это часто спрашивают.

## Обычно Community

- сортировка;
- базовые фильтры: text, number, date;
- custom filters;
- quick filter;
- external filter;
- cell rendering;
- cell editing;
- selection;
- pagination;
- CSV export;
- infinite row model;
- pinned columns;
- pinned rows;
- themes;
- column state.

## Обычно Enterprise

- set filter;
- row grouping;
- aggregation;
- pivot;
- tree data;
- master/detail;
- server-side row model;
- Excel export;
- clipboard;
- range selection;
- context menu;
- tool panels;
- side bar;
- status bar;
- row dragging.

На собеседовании хороший тон — сказать:

> «Перед использованием grouping, tree data, set filter, server-side row model и Excel export нужно проверить, подключена ли AG Grid Enterprise license».

---

# 5. Колонки: максимальный набор полезных настроек

Ниже пример почти всех часто используемых настроек колонок.

```ts
import type { ColDef } from 'ag-grid-community'

const columnDefs: ColDef[] = [
  {
    headerName: 'ID',
    field: 'id',
    width: 80,
    pinned: 'left',
    suppressMovable: true,
    suppressSizeToFit: true
  },
  {
    headerName: 'ФИО',
    children: [
      {
        headerName: 'Имя',
        field: 'firstName',
        minWidth: 120,
        sortable: true,
        filter: true,
        resizable: true
      },
      {
        headerName: 'Фамилия',
        field: 'lastName',
        minWidth: 120
      }
    ]
  },
  {
    headerName: 'Возраст',
    field: 'age',
    width: 110,
    filter: 'agNumberColumnFilter',
    cellClassRules: {
      'cell-warning': params => Number(params.value) < 18
    }
  },
  {
    headerName: 'Зарплата',
    field: 'salary',
    width: 160,
    valueFormatter: params => {
      if (params.value == null) return '';
      return `${Number(params.value).toLocaleString('ru-RU')} ₽`;
    },
    cellStyle: { fontWeight: 600 }
  },
  {
    headerName: 'Полное имя',
    valueGetter: params => {
      const first = params.data?.firstName ?? ''
      const last = params.data?.lastName ?? ''
      return `${first} ${last}`.trim()
    },
    sortable: false,
    filter: false
  },
  {
    headerName: 'Дата приема',
    field: 'hired',
    filter: 'agDateColumnFilter',
    valueFormatter: params => {
      if (!params.value) return ''
      return new Date(params.value).toLocaleDateString('ru-RU')
    }
  },
  {
    headerName: 'Статус',
    field: 'status',
    pinned: 'right',
    lockPinned: true
  }
]
```

Разбор важных параметров:

| Параметр                             | Что делает                                             |
|--------------------------------------|--------------------------------------------------------|
| `field`                              | ключ в объекте строки                                  |
| `headerName`                         | заголовок колонки                                      |
| `colId`                              | уникальный id колонки, если нужен отдельный от `field` |
| `width`, `minWidth`, `maxWidth`      | размеры                                                |
| `flex`                               | растягивание колонки                                   |
| `pinned`                             | закрепление слева/справа                               |
| `sortable`                           | сортировка                                             |
| `filter`                             | фильтр                                                 |
| `resizable`                          | изменение ширины                                       |
| `movable`                            | перетаскивание колонок                                 |
| `suppressMovable`                    | запрет перетаскивания                                  |
| `hide`                               | скрытая колонка                                        |
| `valueGetter`                        | вычисляет значение для ячейки                          |
| `valueFormatter`                     | форматирует значение для отображения                   |
| `cellRenderer`                       | кастомный Vue-компонент ячейки                         |
| `cellEditor`                         | редактор ячейки                                        |
| `editable`                           | можно ли редактировать                                 |
| `cellClass`                          | CSS-класс ячейки                                       |
| `cellClassRules`                     | условные CSS-классы                                    |
| `cellStyle`                          | inline-стили ячейки                                    |
| `comparator`                         | кастомная сортировка                                   |
| `keyCreator`                         | важно для set filter/grouping                          |
| `tooltipField`, `tooltipValueGetter` | тултипы                                                |

---

# 6. `defaultColDef`: настройки по умолчанию

Чтобы не повторять одно и то же для каждой колонки, используют `defaultColDef`.

```vue
<template>
  <div class="ag-theme-alpine" style="height: 520px">
    <AgGridVue
      style="width: 100%; height: 100%"
      :rowData="rowData"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      @grid-ready="onGridReady"
    />
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import type { ColDef } from 'ag-grid-community'

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
  minWidth: 100,
  floatingFilter: true
})
</script>
```

Что здесь важно:

- `sortable: true` — сортировка по умолчанию;
- `resizable: true` — можно менять ширину;
- `filter: true` — включает стандартный фильтр;
- `floatingFilter: true` — показывает строку быстрых фильтров под заголовками;
- `minWidth` — минимальная ширина.

На live-coding часто спрашивают:

> «Сделайте так, чтобы все колонки были сортируемыми, ресайзибельными и имели floating filter».

Правильный ответ — через `defaultColDef`.

---

# 7. Сортировка в AG Grid

## 7.1. Стандартная сортировка

```ts
const columnDefs: ColDef[] = [
  { field: 'firstName', sortable: true },
  { field: 'age', sortable: true }
]
```

Если `sortable: true`, пользователь может кликать по заголовку и переключать:

1. ascending;
2. descending;
3. no sort.

---

## 7.2. Кастомный comparator для строк с русской локалью

```ts
const ruStringComparator = (a: string, b: string) => {
  const left = a ?? ''
  const right = b ?? ''

  return String(left).localeCompare(String(right), 'ru', {
    sensitivity: 'base',
  })
}

const columnDefs: ColDef[] = [
  {
    field: 'firstName',
    comparator: ruStringComparator
  }
]
```

Это важно, если нужно корректно сортировать русские строки, регистрозависимость или специальные значения.

---

## 7.3. Comparator для чисел с null/undefined

```ts
const numberComparator = (a?: number, b?: number) => {
  const left = a == null ? Number.NEGATIVE_INFINITY : a
  const right = b == null ? Number.NEGATIVE_INFINITY : b

  return left - right
}

const columnDefs: ColDef[] = [
  {
    field: 'salary',
    comparator: numberComparator
  }
]
```

Так null-значения всегда будут внизу при ascending.

---

## 7.4. Comparator для дат

```ts
const dateComparator = (a?: string, b?: string) => {
  const left = a ? new Date(a).getTime() : 0
  const right = b ? new Date(b).getTime() : 0

  return left - right
}

const columnDefs: ColDef[] = [
  {
    field: 'hired',
    comparator: dateComparator
  }
]
```

---

## 7.5. Программная сортировка через `GridApi`

```ts
function sortBySalaryDesc() {
  gridApi?.applyColumnState({
    state: [
      {
        colId: 'salary',
        sort: 'desc',
      }
    ],
    defaultState: { sort: null }
  })
}
```

Если нужно сбросить сортировку:

```ts
function resetSorting() {
  gridApi?.applyColumnState({
    defaultState: { sort: null }
  })
}
```

---

## 7.6. Получить текущую сортировку

```ts
function getSortingState() {
  const state = gridApi?.getColumnState() ?? []

  const sorting = state.filter(column => column.sort)

  console.log(sorting)
}
```

Пример результата:

```ts
[
  {
    colId: 'salary',
    sort: 'desc',
    sortIndex: 0
  }
]
```

---

## 7.7. Событие изменения сортировки

```vue
<AgGridVue
  @sort-changed="onSortChanged"
/>
```

```ts
import type { SortChangedEvent } from 'ag-grid-community'

function onSortChanged(event: SortChangedEvent) {
  const sortState = event.api
    .getColumnState()
    .filter(col => col.sort)

  console.log('Текущая сортировка:', sortState)
}
```

---

# 8. Фильтрация в AG Grid

Фильтрация — одна из самых важных тем.

---

## 8.1. Встроенные фильтры

### Текстовый фильтр

```ts
const columnDefs: ColDef[] = [
  {
    field: 'firstName',
    filter: 'agTextColumnFilter',
    filterParams: {
      debounceMs: 300,
      defaultOption: 'contains',
      filterOptions: ['contains', 'startsWith', 'endsWith']
    }
  }
]
```

### Числовой фильтр

```ts
const columnDefs: ColDef[] = [
  {
    field: 'age',
    filter: 'agNumberColumnFilter',
    filterParams: {
      debounceMs: 300,
      buttons: ['clear', 'apply']
    }
  }
]
```

### Фильтр по дате

```ts
const columnDefs: ColDef[] = [
  {
    field: 'hired',
    filter: 'agDateColumnFilter',
    filterParams: {
      comparator: (filterDate: Date, cellValue: string) => {
        if (!cellValue) return 0

        const cellDate = new Date(cellValue)

        if (cellDate < filterDate) return -1
        if (cellDate > filterDate) return 1

        return 0
      }
    }
  }
]
```

---

## 8.2. Floating filter

Floating filter — это маленькие поля фильтров прямо под заголовками.

```ts
const defaultColDef: ColDef = {
  filter: true,
  floatingFilter: true
}
```

Или для конкретной колонки:

```ts
const columnDefs: ColDef[] = [
  {
    field: 'firstName',
    filter: 'agTextColumnFilter',
    floatingFilter: true
  }
]
```

Очень частая задача:

> «Нужен быстрый поиск по каждой колонке прямо в шапке».

Ответ: `floatingFilter`.

---

## 8.3. Quick filter

Quick filter — глобальный поиск по всем данным.

```vue
<template>
  <div>
    <input
      type="text"
      placeholder="Быстрый поиск"
      @input="onQuickFilterInput"
    />

    <div class="ag-theme-alpine" style="height: 520px">
      <AgGridVue
        style="width: 100%; height: 100%"
        :rowData="rowData"
        :columnDefs="columnDefs"
        @grid-ready="onGridReady"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GridApi, GridReadyEvent } from 'ag-grid-community'

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
}

function debounce<T extends (...args: any[]) => void>(fn: T, ms = 250) {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms)
  }
}

const applyQuickFilter = debounce((text: string) => {
  gridApi?.setGridOption('quickFilterText', text)
}, 300)

function onQuickFilterInput(e: Event) {
  const value = (e.target as HTMLInputElement).value
  applyQuickFilter(value)
}
</script>
```

Важный нюанс: quick filter обычно работает по строковому представлению данных. Для сложных объектов может понадобиться `getQuickFilterText` или нормализация данных.

---

## 8.4. External filter

External filter нужен, когда фильтрация управляется извне: кнопки, select, state management, URL.

Пример: фильтр по статусу.

```vue
<template>
  <div>
    <select v-model="statusFilter" @change="applyExternalFilter">
      <option value="all">Все</option>
      <option value="active">Активные</option>
      <option value="fired">Уволенные</option>
    </select>

    <div class="ag-theme-alpine" style="height: 520px">
      <AgGridVue
        style="width: 100%; height: 100%"
        :rowData="rowData"
        :columnDefs="columnDefs"
        :isExternalFilterPresent="isExternalFilterPresent"
        :doesExternalFilterPass="doesExternalFilterPass"
        @grid-ready="onGridReady"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { GridApi, GridReadyEvent } from 'ag-grid-community'

interface Employee {
  id: number;
  status: 'active' | 'fired';
}

const statusFilter = ref<'all' | 'active' | 'fired'>('all')

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
}

function isExternalFilterPresent() {
  return statusFilter.value !== 'all'
}

function doesExternalFilterPass(node: any) {
  if (statusFilter.value === 'all') return true

  return node.data?.status === statusFilter.value
}

function applyExternalFilter() {
  gridApi?.onFilterChanged()
}
</script>
```

Как это работает:

1. `isExternalFilterPresent` говорит AG Grid, активен ли внешний фильтр.
2. `doesExternalFilterPass` для каждой строки решает, проходит ли она фильтр.
3. `gridApi.onFilterChanged()` запускает пересчет фильтрации.

Это очень частый кейс:

> «Есть select снаружи таблицы. Нужно фильтровать строки по статусу».

---

## 8.5. Программная установка filter model

```ts
function filterActiveOnly() {
  gridApi?.setFilterModel({
    status: {
      type: 'equals',
      filter: 'active'
    }
  })
}

function filterAgeGreaterThan30() {
  gridApi?.setFilterModel({
    age: {
      type: 'greaterThan',
      filter: 30
    }
  })
}

function resetFilters() {
  gridApi?.setFilterModel(null)
}
```

Получить текущие фильтры:

```ts
const filterModel = gridApi?.getFilterModel()
console.log(filterModel)
```

---

## 8.6. Кастомный фильтр на Vue

Допустим, нужен фильтр "возраст от".

Файл `AgeFromFilter.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ params: any }>()

const ageFrom = ref<number | null>(null)

function onInput(e: Event) {
  const target = e.target as HTMLInputElement

  ageFrom.value = target.value === '' ? null : Number(target.value)

  // Сообщаем AG Grid, что модель фильтра изменилась
  props.params.filterChangedCallback()
}

function isFilterActive() {
  return ageFrom.value != null
}

function doesFilterPass(params: any) {
  const fieldValue = params.data?.[props.params.colDef.field]

  if (typeof fieldValue !== 'number') return false

  return fieldValue >= (ageFrom.value ?? Number.NEGATIVE_INFINITY)
}

function getModel() {
  if (!isFilterActive()) return undefined

  return {
    ageFrom: ageFrom.value
  }
}

function setModel(model: any) {
  ageFrom.value = model?.ageFrom ?? null
}

function afterGuiAttached() {
  // Здесь можно поставить фокус в input
}

defineExpose({
  isFilterActive,
  doesFilterPass,
  getModel,
  setModel,
  afterGuiAttached
})
</script>

<template>
  <div style="padding: 8px">
    <label style="display: block; margin-bottom: 4px">
      Возраст от
    </label>

    <input
      type="number"
      :value="ageFrom ?? undefined"
      @input="onInput"
    />
  </div>
</template>
```

Использование:

```ts
import { markRaw } from 'vue'
import AgeFromFilter from './filters/AgeFromFilter.vue'
import type { ColDef } from 'ag-grid-community'

const columnDefs: ColDef[] = [
  {
    field: 'age',
    filter: markRaw(AgeFromFilter)
  }
]
```

Обязательно используй `markRaw`, если передаешь Vue-компонент в AG Grid. Иначе Vue может сделать компонент реактивным proxy, а AG Grid ожидает обычный объект-компонент.

Что спрашивают про кастомный фильтр:

- `isFilterActive` — активен ли фильтр;
- `doesFilterPass` — проходит ли конкретная строка;
- `getModel` — сериализуемая модель фильтра;
- `setModel` — восстановление модели фильтра;
- `filterChangedCallback` — уведомить грид об изменении фильтра.

---

# 9. Cell Renderer: кастомные ячейки

Cell renderer нужен, когда в ячейке надо показать не просто текст, а Vue-компонент: бейдж, кнопку, иконку, dropdown, link.

---

## 9.1. Простой badge-рендерер

Файл `StatusBadge.vue`:

```vue
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ params: any }>()

const status = computed(() => props.params.value)
const isActive = computed(() => status.value === 'active')

const color = computed(() => isActive.value ? '#16a34a' : '#dc2626')
const label = computed(() => isActive.value ? 'Активен' : 'Уволен')
</script>

<template>
  <span
    :style="{
      color,
      border: `1px solid ${color}`,
      borderRadius: '999px',
      padding: '2px 8px',
      fontSize: '12px',
    }"
  >
    {{ label }}
  </span>
</template>
```

Использование:

```ts
import { markRaw } from 'vue'
import StatusBadge from './cells/StatusBadge.vue'
import type { ColDef } from 'ag-grid-community'

const columnDefs: ColDef[] = [
  {
    field: 'status',
    headerName: 'Статус',
    cellRenderer: markRaw(StatusBadge)
  }
]
```

---

## 9.2. Рендерер с кнопкой и вызовом метода родителя

Это очень частый кейс: кнопка "Открыть", "Удалить", "Редактировать" внутри ячейки.

Файл `ActionCell.vue`:

```vue
<script setup lang="ts">
const props = defineProps<{ params: any }>()

function onClick() {
  const parent = props.params.context?.parent

  parent?.onRowAction?.(props.params.data)
}
</script>

<template>
  <button type="button" @click="onClick">
    Открыть
  </button>
</template>
```

Использование:

```vue
<script setup lang="ts">
import { markRaw, shallowRef } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'
import ActionCell from './cells/ActionCell.vue'

interface Employee {
  id: number;
  firstName: string;
}

const rowData = shallowRef<Employee[]>([
  { id: 1, firstName: 'Иван' },
  { id: 2, firstName: 'Мария' }
])

const context = {
  parent: {
    onRowAction: (row: Employee) => {
      alert(`Открыли сотрудника с id=${row.id}`)
    }
  }
}

const columnDefs: ColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'firstName', headerName: 'Имя' },
  {
    headerName: 'Действия',
    cellRenderer: markRaw(ActionCell),
    pinned: 'right',
    suppressSizeToFit: true
  }
]

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
}
</script>

<template>
  <div class="ag-theme-alpine" style="height: 520px">
    <AgGridVue
      style="width: 100%; height: 100%"
      :rowData="rowData"
      :columnDefs="columnDefs"
      :context="context"
      @grid-ready="onGridReady"
    />
  </div>
</template>
```

Здесь важный паттерн: через `context` мы передаем в ячейки методы родительского компонента.

---

## 9.3. Разница между `valueFormatter` и `cellRenderer`

Это спрашивают почти всегда.

### `valueFormatter`

Используется, если нужно просто форматировать значение.

```ts
{
  field: 'salary',
  valueFormatter: params => `${params.value} ₽`
}
```

Плюсы:
- дешево;
- быстро;
- работает с экспортом;
- не создает Vue-компоненты.

### `cellRenderer`

Используется, если нужен полноценный UI.

```ts
{
  field: 'status',
  cellRenderer: StatusBadge
}
```

Плюсы:
- можно рендерить кнопки, иконки, бейджи;
- можно использовать Vue reactivity внутри ячейки.

Минусы:
- дороже по производительности;
- нужно аккуратнее работать с обновлением.

Правильный ответ:

> «Если можно решить задачу через `valueFormatter`, лучше использовать его. `cellRenderer` нужен только для сложного UI».

---

# 10. Условная стилизация ячеек и строк

## 10.1. `cellClassRules`

```ts
const columnDefs: ColDef[] = [
  {
    field: 'salary',
    cellClassRules: {
      'cell-low-salary': params => Number(params.value) < 100000,
      'cell-high-salary': params => Number(params.value) >= 200000
    }
  }
]
```

CSS:

```css
.cell-low-salary {
  background-color: #fee2e2;
}

.cell-high-salary {
  background-color: #dcfce7;
}
```

---

## 10.2. `cellStyle`

```ts
const columnDefs: ColDef[] = [
  {
    field: 'salary',
    cellStyle: params => {
      if (Number(params.value) < 100000) {
        return { backgroundColor: '#fee2e2' }
      }

      return {}
    }
  }
]
```

---

## 10.3. `getRowStyle`

```vue
<AgGridVue :getRowStyle="getRowStyle" />
```

```ts
function getRowStyle(params: any) {
  if (params.data?.status === 'fired') {
    return { opacity: 0.6 }
  }

  return undefined
}
```

---

## 10.4. `rowClassRules`

```vue
<AgGridVue :rowClassRules="rowClassRules" />
```

```ts
const rowClassRules = {
  'row-fired': (params: any) => params.data?.status === 'fired',
  'row-active': (params: any) => params.data?.status === 'active'
}
```

CSS:

```css
.row-fired {
  background-color: #fef2f2;
}
```

---

# 11. Редактирование ячеек

## 11.1. Простое редактирование

```ts
const columnDefs: ColDef[] = [
  {
    field: 'firstName',
    editable: true,
    cellEditor: 'agTextCellEditor'
  },
  {
    field: 'age',
    editable: true,
    cellEditor: 'agNumberCellEditor',
    cellEditorParams: {
      min: 18,
      max: 70
    }
  },
  {
    field: 'status',
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: ['active', 'fired']
    }
  },
  {
    field: 'hired',
    editable: true,
    cellEditor: 'agDateCellEditor'
  }
]
```

---

## 11.2. Событие изменения значения

```vue
<AgGridVue @cell-value-changed="onCellValueChanged" />
```

```ts
import type { CellValueChangedEvent } from 'ag-grid-community'

function onCellValueChanged(event: CellValueChangedEvent) {
  console.log('Колонка:', event.colId)
  console.log('Старое значение:', event.oldValue)
  console.log('Новое значение:', event.newValue)
  console.log('Строка:', event.data)
}
```

Это место, где обычно делают:
- валидацию;
- сохранение в API;
- откат при ошибке;
- пересчет итогов.

---

## 11.3. Откат невалидного значения

```ts
function onCellValueChanged(event: CellValueChangedEvent) {
  if (event.colId === 'age') {
    const age = Number(event.newValue)

    if (Number.isNaN(age) || age < 18 || age > 70) {
      event.node.setDataValue('age', event.oldValue)
      return
    }
  }

  console.log('Сохраняем изменение', event.data)
}
```

---

## 11.4. Кастомный cell editor на Vue

Файл `DepartmentEditor.vue`:

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{ params: any }>()

const value = ref(props.params.value ?? '')
const selectRef = ref<HTMLSelectElement | null>(null)

onMounted(() => {
  selectRef.value?.focus()
})

function getValue() {
  return value.value
}

function isPopup() {
  return false
}

function isCancelBeforeStart() {
  return false
}

function isCancelAfterEnd() {
  return value.value === ''
}

function onKeyDownEnter() {
  props.params.api.stopEditing()
}

defineExpose({
  getValue,
  isPopup,
  isCancelBeforeStart,
  isCancelAfterEnd
})
</script>

<template>
  <select
    ref="selectRef"
    v-model="value"
    style="width: 100%; height: 100%"
    @keydown.enter="onKeyDownEnter"
  >
    <option
      v-for="item in props.params.values ?? []"
      :key="item"
      :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>
```

Использование:

```ts
import { markRaw } from 'vue'
import DepartmentEditor from './editors/DepartmentEditor.vue'
import type { ColDef } from 'ag-grid-community'

const columnDefs: ColDef[] = [
  {
    field: 'department',
    editable: true,
    cellEditor: markRaw(DepartmentEditor),
    cellEditorParams: {
      values: ['HR', 'IT', 'Sales', 'Marketing']
    }
  }
]
```

Что важно знать про кастомный editor:

| Метод                 | Назначение                               |
|-----------------------|------------------------------------------|
| `getValue`            | вернуть итоговое значение                |
| `isPopup`             | рендерится ли редактор как popup         |
| `isCancelBeforeStart` | отменить редактирование до старта        |
| `isCancelAfterEnd`    | отменить редактирование после завершения |
| `afterGuiAttached`    | действия после появления DOM             |
| `focusIn`, `focusOut` | обработка фокуса                         |

---

# 12. Выбор строк: selection

## 12.1. Multiple selection

```vue
<AgGridVue rowSelection="multiple" />
```

---

## 12.2. Checkbox selection

```ts
const columnDefs: ColDef[] = [
  {
    headerName: '',
    width: 50,
    checkboxSelection: true,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    suppressSizeToFit: true
  },
  { field: 'firstName' }
]
```

Пояснение:

- `checkboxSelection` — чекбокс в строках;
- `headerCheckboxSelection` — чекбокс в заголовке;
- `headerCheckboxSelectionFilteredOnly` — выбирать только отфильтрованные строки.

---

## 12.3. Получить выбранные строки

```ts
function getSelectedEmployees() {
  const selected = gridApi?.getSelectedRows() ?? []
  console.log(selected)
}
```

---

## 12.4. Событие изменения выбора

```vue
<AgGridVue @selection-changed="onSelectionChanged" />
```

```ts
function onSelectionChanged() {
  const selected = gridApi?.getSelectedRows() ?? []
  console.log('Выбрано строк:', selected.length)
}
```

---

## 12.5. Выбрать/снять выделение программно

```ts
function selectAllRows() {
  gridApi?.selectAll()
}

function deselectAllRows() {
  gridApi?.deselectAll()
}

function selectFirstRow() {
  gridApi?.forEachNode(node => {
    if (node.rowIndex === 0) {
      node.setSelected(true)
    }
  })
}
```

---

# 13. События AG Grid

Важно понимать, какие события использовать.

```vue
<AgGridVue
  @grid-ready="onGridReady"
  @cell-clicked="onCellClicked"
  @row-double-clicked="onRowDoubleClicked"
  @selection-changed="onSelectionChanged"
  @cell-value-changed="onCellValueChanged"
  @filter-changed="onFilterChanged"
  @sort-changed="onSortChanged"
  @first-data-rendered="onFirstDataRendered"
/>
```

```ts
import type {
  CellClickedEvent,
  RowDoubleClickedEvent,
  FilterChangedEvent,
  SortChangedEvent,
  FirstDataRenderedEvent,
} from 'ag-grid-community'

function onCellClicked(event: CellClickedEvent) {
  console.log('Клик по ячейке', event.colId, event.value)
}

function onRowDoubleClicked(event: RowDoubleClickedEvent) {
  console.log('Двойной клик по строке', event.data)
}

function onFilterChanged(event: FilterChangedEvent) {
  console.log('Фильтры изменены', event.api.getFilterModel())
}

function onSortChanged(event: SortChangedEvent) {
  console.log('Сортировка изменена')
}

function onFirstDataRendered(event: FirstDataRenderedEvent) {
  event.api.sizeColumnsToFit()
}
```

---

# 14. Пагинация

```vue
<AgGridVue
  :pagination="true"
  :paginationPageSize="20"
  :paginationPageSizeSelector="[10, 20, 50, 100]"
/>
```

Важно понимать: пагинация в client-side row model работает поверх уже загруженных данных.
То есть данные уже в браузере, AG Grid просто показывает их страницами.

Если данных много и они приходят с сервера постранично, нужен infinite row model или
server-side row model.

---

# 15. Pinned rows (Закреплённые строки)

Это хороший Community-способ показать итоги без Enterprise status bar.

```vue
<template>
  <div class="ag-theme-alpine" style="height: 520px">
    <AgGridVue
      style="width: 100%; height: 100%"
      :rowData="rowData"
      :columnDefs="columnDefs"
      :pinnedBottomRowData="pinnedBottomRowData"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Employee {
  id: number;
  firstName: string;
  salary: number;
}

const rowData = ref<Employee[]>([
  { id: 1, firstName: 'Иван', salary: 100000 },
  { id: 2, firstName: 'Мария', salary: 150000 }
])

const pinnedBottomRowData = computed(() => {
  const total = rowData.value.reduce(
    (sum, row) => sum + row.salary,
    0
  );

  return [
    {
      id: 'total',
      firstName: 'Итого',
      salary: total
    }
  ]
})

const columnDefs = [
  { field: 'firstName' },
  { field: 'salary' }
]
</script>
```

---

# 16. Экспорт данных

## 16.1. CSV export

```ts
function exportAllCsv() {
  gridApi?.exportDataAsCsv({
    fileName: 'employees.csv',
    allColumns: true
  })
}

function exportSelectedCsv() {
  gridApi?.exportDataAsCsv({
    fileName: 'selected-employees.csv',
    onlySelected: true
  })
}
```

---

## 16.2. Excel export

Только если подключен Enterprise.

```ts
import 'ag-grid-enterprise';

function exportExcel() {
  gridApi?.exportDataAsExcel({
    fileName: 'employees.xlsx',
    sheetName: 'Сотрудники'
  })
}
```

---

## 16.3. Кастомизация экспортируемых значений

```ts
const columnDefs: ColDef[] = [
  {
    field: 'status',
    valueFormatter: params => params.value === 'active' ? 'Активен' : 'Уволен',
    exportValueFormatter: params => params.value === 'active' ? 'ACTIVE' : 'FIRED'
  }
]
```

Или через `processCellCallback` в export options:

```ts
gridApi?.exportDataAsCsv({
  processCellCallback: params => {
    if (params.column.getColId() === 'status') {
      return params.value === 'active' ? 'Активный' : 'Удаленный'
    }

    return params.value
  }
})
```

---

# 17. Row Models

AG Grid поддерживает несколько моделей данных.

---

## 17.1. Client-side row model

Это модель по умолчанию.

```vue
<AgGridVue :rowData="rowData" />
```

Характеристики:

- все данные находятся в браузере;
- фильтрация и сортировка работают на клиенте;
- хорошо подходит для небольших и средних объемов;
- просто редактировать данные;
- легко делать grouping/pivot на клиенте, если есть Enterprise.

Когда использовать:
- до десятков тысяч строк;
- данные можно загрузить целиком;
- нужны богатые клиентские операции.

---

## 17.2. Infinite row model

Infinite row model подходит, когда данных много, но сервер отдает их страницами.

```vue
<template>
  <div class="ag-theme-alpine" style="height: 520px">
    <AgGridVue
      style="width: 100%; height: 100%"
      rowModelType="infinite"
      :columnDefs="columnDefs"
      :datasource="datasource"
      :cacheBlockSize="100"
      :maxBlocksInCache="10"
      :rowBuffer="20"
      @grid-ready="onGridReady"
    />
  </div>
</template>

<script setup lang="ts">
import type { GridReadyEvent } from 'ag-grid-community'

const columnDefs = [
  { field: 'id' },
  { field: 'firstName' },
  { field: 'lastName' }
]

const datasource = {
  rowCount: undefined,

  getRows(params: any) {
    const pageSize = params.endRow - params.startRow
    const page = Math.floor(params.startRow / pageSize)

    fetch(
      `/api/employees?page=${page}&size=${pageSize}` +
      `&sortModel=${encodeURIComponent(JSON.stringify(params.sortModel))}` +
      `&filterModel=${encodeURIComponent(JSON.stringify(params.filterModel))}`
    )
      .then(response => response.json())
      .then(data => {
        params.successCallback(data.rows, data.totalCount)
      })
      .catch(() => {
        params.failCallback()
      })
  }
}

function onGridReady(params: GridReadyEvent) {
  // грид сам начнет запрашивать строки через datasource
}
</script>
```

Важно: сортировку и фильтрацию сервер должен обрабатывать сам через `params.sortModel` и `params.filterModel`.

Когда использовать:
- большие списки;
- нет сложной группировки;
- сервер умеет пагинировать, сортировать, фильтровать;
- не нужен сложный server-side grouping.

---

## 17.3. Server-side row model

Это Enterprise-модель для сложных серверных сценариев.

```ts
const serverSideDatasource = {
  getRows(params: any) {
    const request = params.request

    fetch('/api/grid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then(response => response.json())
      .then(data => {
        params.success({
          rowData: data.rows,
          rowCount: data.totalCount,
        })
      })
      .catch(() => {
        params.fail()
      })
  }
}
```

```vue
<AgGridVue
  rowModelType="serverSide"
  :serverSideDatasource="serverSideDatasource"
/>
```

Что внутри `request`:

- `startRow`;
- `endRow`;
- `sortModel`;
- `filterModel`;
- `rowGroupCols`;
- `groupKeys`;
- `pivotMode`;
- `pivotCols`.

Когда использовать:
- очень большие данные;
- группировка на сервере;
- aggregation на сервере;
- pivot на сервере;
- сложная фильтрация и сортировка на сервере.

---

# 18. Grouping и aggregation

Дальше идут Enterprise-возможности.

## 18.1. Простая группировка

```ts
import type { ColDef } from 'ag-grid-community'

const autoGroupColumnDef = {
  headerName: 'Группа',
  minWidth: 250,
  cellRendererParams: {
    checkbox: true,
    suppressCount: false
  }
}

const columnDefs: ColDef[] = [
  {
    field: 'country',
    rowGroup: true,
    hide: true,
  },
  {
    field: 'city',
    rowGroup: true,
    hide: true,
  },
  {
    field: 'salary',
    aggFunc: 'sum',
    valueFormatter: params => params.value == null
      ? ''
      : `${Number(params.value).toLocaleString('ru-RU')} ₽`,
  },
  {
    field: 'age',
    aggFunc: 'avg'
  }
]
```

```vue
<AgGridVue
  :rowData="rowData"
  :columnDefs="columnDefs"
  :autoGroupColumnDef="autoGroupColumnDef"
  :groupSelectsChildren="true"
/>
```

---

## 18.2. Кастомная агрегация

```ts
const columnDefs: ColDef[] = [
  {
    field: 'salary',
    aggFunc: (values: number[]) => {
      return values.reduce((sum, value) => sum + value, 0)
    }
  }
]
```

---

## 18.3. Pivot mode

```ts
const columnDefs: ColDef[] = [
  {
    field: 'year',
    pivot: true
  },
  {
    field: 'region',
    rowGroup: true
  },
  {
    field: 'sales',
    aggFunc: 'sum'
  }
]
```

```vue
<AgGridVue :pivotMode="true" />
```

---

# 19. Tree Data

Tree data нужна для иерархий: оргструктура, категории, файлы.

```ts
const autoGroupColumnDef = {
  headerName: 'Организация',
  minWidth: 300,
  cellRendererParams: {
    checkbox: true
  }
}

function getDataPath(data: any) {
  return data.orgPath
}
```

Данные:

```ts
const rowData = [
  {
    id: 1,
    orgPath: ['Компания'],
    name: 'Компания'
  },
  {
    id: 2,
    orgPath: ['Компания', 'IT'],
    name: 'IT'
  },
  {
    id: 3,
    orgPath: ['Компания', 'IT', 'Frontend'],
    name: 'Frontend'
  }
]
```

```vue
<AgGridVue
  :treeData="true"
  :getDataPath="getDataPath"
  :autoGroupColumnDef="autoGroupColumnDef"
/>
```

---

# 20. Master/Detail

Master/detail — раскрывающиеся строки с вложенной таблицей.

```ts
const detailCellRendererParams = {
  detailGridOptions: {
    columnDefs: [
      { field: 'orderId', headerName: 'Заказ' },
      { field: 'amount', headerName: 'Сумма' }
    ]
  },

  getDetailRowData(params: any) {
    params.successCallback(params.data.orders)
  }
}
```

Данные:

```ts
const rowData = [
  {
    id: 1,
    name: 'Иван',
    orders: [
      { orderId: 'A-1', amount: 1000 },
      { orderId: 'A-2', amount: 3000 }
    ]
  },
  {
    id: 2,
    name: 'Мария',
    orders: [
      { orderId: 'B-1', amount: 7000 }
    ]
  }
]
```

```vue
<AgGridVue
  :masterDetail="true"
  :detailCellRendererParams="detailCellRendererParams"
/>
```

---

# 21. Сохранение состояния таблицы

Очень частая продуктовая задача: сохранить ширину колонок, порядок, сортировку, фильтры.

```ts
const STORAGE_KEY = 'employees-grid-state'

function saveGridState() {
  if (!gridApi) return

  const state = {
    columns: gridApi.getColumnState(),
    filters: gridApi.getFilterModel()
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function restoreGridState() {
  if (!gridApi) return

  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) return

  try {
    const state = JSON.parse(raw)

    if (Array.isArray(state.columns)) {
      gridApi.applyColumnState({
        state: state.columns,
        applyOrder: true
      })
    }

    if (state.filters) {
      gridApi.setFilterModel(state.filters)
    }
  } catch (error) {
    console.error('Не удалось восстановить состояние грида', error)
  }
}

function resetGridState() {
  gridApi?.resetColumnState()
  gridApi?.setFilterModel(null)
  localStorage.removeItem(STORAGE_KEY)
}
```

Хороший ответ на собеседовании:

> `getColumnState` хранит порядок, ширину, видимость, sort, agg, pivot и другие параметры колонок. `getFilterModel` хранит filter model. Их можно сохранять в localStorage, URL или backend.

---

# 22. Производительность

## 22.1. Всегда задавай `getRowId`

```vue
<AgGridVue :getRowId="getRowId" />
```

```ts
function getRowId(params: any) {
  return String(params.data.id)
}
```

Зачем:

- AG Grid понимает, какая строка какая;
- можно обновлять данные точечно;
- работает `applyTransaction`;
- меньше лишнего пересоздания DOM;
- корректнее selection/editing при обновлениях.

Без `getRowId` при замене `rowData` таблица может воспринимать строки как полностью новые.

---

## 22.2. Используй `applyTransaction` для обновлений

Плохо для частых обновлений:

```ts
rowData.value = [...rowData.value]
```

Лучше:

```ts
function addEmployee(employee: Employee) {
  gridApi?.applyTransaction({
    add: [employee]
  })
}

function updateEmployee(employee: Employee) {
  gridApi?.applyTransaction({
    update: [employee]
  })
}

function removeEmployee(employee: Employee) {
  gridApi?.applyTransaction({
    remove: [employee]
  })
}
```

Для массовых обновлений:

```ts
function bulkUpdate(rows: Employee[]) {
  gridApi?.applyTransactionAsync({
    update: rows
  })
}
```

---

## 22.3. Используй `shallowRef` для больших массивов

Vue 3 по умолчанию делает глубокую реактивность. Для огромных массивов это может быть дорого.

```ts
import { shallowRef } from 'vue'

const rowData = shallowRef<Employee[]>([])

async function loadData() {
  const response = await fetch('/api/employees')
  const data = await response.json()

  rowData.value = data
}
```

Если используешь transaction updates, данные внутри могут быть обычными объектами, не обязательно оборачивать каждую строку в reactive proxy.

---

## 22.4. Не пересоздавай `columnDefs` без необходимости

Плохо:

```ts
const columnDefs = computed(() => {
  return [
    { field: 'id' },
    { field: 'name' }
  ]
})
```

Если такой computed пересчитывается часто, грид может получать новые колонки и терять состояние.

Лучше:

```ts
const columnDefs = shallowRef<ColDef[]>([
  { field: 'id' },
  { field: 'name' }
])
```

Если колонки приходят с сервера:

```ts
async function loadColumns() {
  const fields = await fetchFields()

  columnDefs.value = fields.map(field => ({
    field,
    headerName: field
  }))
}
```

---

## 22.5. Не ставь слишком большой `rowBuffer`

`rowBuffer` определяет, сколько строк рендерится вне видимой области.

```vue
<AgGridVue :rowBuffer="20" />
```

Слишком большой `rowBuffer` увеличивает DOM и снижает производительность.

---

## 22.6. Избегай дорогих `cellRenderer` в каждой ячейке

Если можно использовать `valueFormatter`, лучше использовать его.

Дорого:

```ts
{
  field: 'salary',
  cellRenderer: SalaryRenderer
}
```

Дешево:

```ts
{
  field: 'salary',
  valueFormatter: params => `${params.value} ₽`
}
```

---

# 23. Типичные ошибки Vue + AG Grid

Это то, на чем часто сыпятся даже сильные кандидаты.

---

## Ошибка 1: нет высоты у контейнера

AG Grid не может сам угадать высоту.

Плохо:

```html
<AgGridVue />
```

Хорошо:

```html
<div class="ag-theme-alpine" style="height: 500px">
  <AgGridVue style="width: 100%; height: 100%" />
</div>
```

---

## Ошибка 2: не подключены CSS

Нужно подключить:

```ts
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
```

---

## Ошибка 3: компонент передается без `markRaw`

Плохо:

```ts
cellRenderer: StatusBadge
```

Лучше:

```ts
cellRenderer: markRaw(StatusBadge)
```

---

## Ошибка 4: ожидается, что AG Grid будет рендериться как обычный `v-for`

AG Grid сам управляет DOM строк и ячеек. Не надо пытаться вручную вставлять строки через Vue.

---

## Ошибка 5: мутация данных без уведомления грида

Если изменить поле в строке, AG Grid не всегда сам поймет, что нужно обновить ячейку.

Лучше использовать:

```ts
node.setDataValue('status', 'active')
```

или:

```ts
node.setData({ ...node.data, status: 'active' })
```

или:

```ts
gridApi.applyTransaction({ update: [updatedRow] })
```

---

## Ошибка 6: несогласованные версии пакетов

Плохо:

```json
"ag-grid-community": "^31.0.0",
"ag-grid-vue3": "^32.0.0"
```

Нужно держать одну major-версию.

---

# 24. Live-coding cookbook (типовые задачи)

## Задача 1. Отфильтровать только активных сотрудников

```ts
function showActiveOnly() {
  gridApi?.setFilterModel({
    status: {
      type: 'equals',
      filter: 'active'
    }
  })
}
```

Если статус не поддерживает стандартный text filter, можно использовать external filter.

---

## Задача 2. Сбросить все фильтры

```ts
function resetFilters() {
  gridApi?.setFilterModel(null)
}
```

---

## Задача 3. Отсортировать по зарплате по убыванию

```ts
function sortSalaryDesc() {
  gridApi?.applyColumnState({
    state: [
      {
        colId: 'salary',
        sort: 'desc'
      }
    ],
    defaultState: { sort: null }
  })
}
```

---

## Задача 4. Добавить строку

```ts
function addEmployee(employee: Employee) {
  gridApi?.applyTransaction({
    add: [employee]
  })
}
```

---

## Задача 5. Обновить выбранную строку

```ts
function updateSelectedRows(patch: Partial<Employee>) {
  const selected = gridApi?.getSelectedRows() ?? []

  const updated = selected.map(row => ({
    ...row,
    ...patch,
  }))

  gridApi?.applyTransaction({
    update: updated
  })
}
```

---

## Задача 6. Удалить выбранные строки

```ts
function removeSelectedRows() {
  const selected = gridApi?.getSelectedRows() ?? []

  gridApi?.applyTransaction({
    remove: selected
  })
}
```

---

## Задача 7. Получить отфильтрованные строки

```ts
function getFilteredRows() {
  const rows: any[] = []

  gridApi?.forEachNodeAfterFilter(node => {
    rows.push(node.data)
  })

  console.log(rows)
}
```

---

## Задача 8. Экспортировать только выбранные строки

```ts
function exportSelected() {
  gridApi?.exportDataAsCsv({
    fileName: 'selected.csv',
    onlySelected: true
  })
}
```

---

## Задача 9. Сделать динамические колонки из API

```ts
import { shallowRef } from 'vue'
import type { ColDef } from 'ag-grid-community'

const columnDefs = shallowRef<ColDef[]>([])

async function loadColumns() {
  const response = await fetch('/api/grid-columns')
  const fields: string[] = await response.json()

  columnDefs.value = fields.map(field => ({
    field,
    headerName: field,
    sortable: true,
    filter: true
  }))
}
```

---

## Задача 10. Сделать кнопку в ячейке

`ActionCell.vue`:

```vue
<script setup lang="ts">
const props = defineProps<{ params: any }>()

function onClick() {
  props.params.context?.parent?.openRow?.(props.params.data)
}
</script>

<template>
  <button @click="onClick">Открыть</button>
</template>
```

```ts
import { markRaw } from 'vue'
import ActionCell from './components/ActionCell.vue'

const columnDefs: ColDef[] = [
  // ...
  {
    headerName: 'Действия',
    cellRenderer: markRaw(ActionCell),
    pinned: 'right',
    suppressSizeToFit: true
  }
]
```

Использование:

```vue
<script setup lang="ts">
const context = {
  parent: {
    openRow: (row: any) => {
      console.log('Открыть строку', row)
    }
  }
}
</script>

<template>
  <div class="ag-theme-alpine" style="height: 500px;">
    <AgGridVue
      :rowData="rowData"
      :columnDefs="columnDefs"
      :context="context"
    />
  </div>
</template>
```

---

## Задача 11. Восстановить состояние таблицы при загрузке

```ts
function onFirstDataRendered() {
  restoreGridState()
}
```

```vue
<AgGridVue @first-data-rendered="onFirstDataRendered" />
```

---

## Задача 12. Сделать quick search

```ts
function onSearchInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  gridApi?.setGridOption('quickFilterText', value)
}
```

Для production лучше debounce.

---

# 25. Локализация AG Grid на русский

AG Grid позволяет переводить встроенные тексты через `localeText`.

Пример частичной русской локализации:

```ts
const localeText = {
  searchOoo: 'Поиск...',
  filterOoo: 'Фильтр...',
  equals: 'Равно',
  notEqual: 'Не равно',
  contains: 'Содержит',
  startsWith: 'Начинается с',
  endsWith: 'Заканчивается',
  lessThan: 'Меньше',
  greaterThan: 'Больше',
  lessThanOrEqual: 'Меньше или равно',
  greaterThanOrEqual: 'Больше или равно',
  inRange: 'В диапазоне',
  page: 'Страница',
  to: 'по',
  of: 'из',
  loadingOoo: 'Загрузка...',
  noRowsToShow: 'Нет данных',
  selectAll: 'Выбрать все',
  copy: 'Копировать',
  export: 'Экспорт',
}
```

```vue
<AgGridVue :localeText="localeText" />
```

---

# 26. Темы и кастомизация CSS

AG Grid имеет темы через CSS-класс:

```html
<div class="ag-theme-alpine">
  <AgGridVue />
</div>
```

```html
<div class="ag-theme-balham">
  <AgGridVue />
</div>
```

```html
<div class="ag-theme-material">
  <AgGridVue />
</div>
```

Кастомизация через `:deep` во Vue:

```vue
<style scoped>
:deep(.ag-header-cell) {
  background-color: #f8fafc;
}

:deep(.ag-row-selected) {
  background-color: #eff6ff;
}

:deep(.ag-cell) {
  padding-left: 12px;
  padding-right: 12px;
}
</style>
```

---

# 27. Контекстное меню

Enterprise-функция.

```ts
function getContextMenuItems(params: any) {
  return [
    {
      name: 'Открыть запись',
      action: () => {
        console.log('Открыть', params.node.data)
      }
    },
    {
      name: 'Удалить запись',
      action: () => {
        gridApi?.applyTransaction({
          remove: [params.node.data]
        })
      }
    },
    'separator',
    'copy',
    'export'
  ]
}
```

```vue
<AgGridVue :getContextMenuItems="getContextMenuItems" />
```

---

# 28. Tool panels и sidebar

Enterprise.

```vue
<AgGridVue :sideBar="true" />
```

Более точная настройка:

```ts
const sideBar = {
  toolPanels: [
    'columns',
    'filters'
  ]
}
```

```vue
<AgGridVue :sideBar="sideBar" />
```

---

# 29. Microfronts и AG Grid

Основные проблемы:

1. Несколько приложений могут загрузить разные версии AG Grid.
2. CSS тем может конфликтовать.
3. Состояние таблицы может теряться при переключении micro-apps.
4. Bundle может раздуваться, если каждый микрофронт тащит свой AG Grid.

Рекомендации:

- выносить AG Grid в shared module через Module Federation;
- фиксировать одну версию AG Grid в рамках платформы;
- изолировать темы, если микрофронты используют разные UI-библиотеки;
- сохранять состояние грида в URL, localStorage или shared store;
- не хранить gridApi в глобальном состоянии без необходимости.

Хороший ответ:

> «В микрофронтах AG Grid опасен дублированием бандла и конфликтом стилей. Я бы вынес его в shared dependency, зафиксировал версию и хранил состояние таблицы отдельно от жизненного цикла микроприложения».

---

# 30. Вопросы собеседования с ответами

## Вопрос 1. Что такое AG Grid и чем он отличается от обычной таблицы?

Ответ:

AG Grid - это самостоятельный табличный движок с виртуализацией строк и колонок, собственными row models, API, фильтрами, сортировкой, редактированием, aggregation, pivot и enterprise-функциями. В отличие от простой HTML-таблицы, он умеет эффективно работать с большим количеством данных и предоставляет богатый API.

---

## Вопрос 2. Чем отличаются `field`, `valueGetter`, `valueFormatter`?

Ответ:

- `field` — берет значение напрямую из объекта по ключу;
- `valueGetter` — вычисляет значение для ячейки;
- `valueFormatter` — форматирует уже вычисленное значение для отображения.

Пример:

```ts
{
  valueGetter: params => `${params.data.firstName} ${params.data.lastName}`,
  valueFormatter: params => params.value.toUpperCase()
}
```

---

## Вопрос 3. Когда использовать `cellRenderer`, а когда `valueFormatter`?

Ответ:

Если нужно просто показать текст в другом формате — `valueFormatter`.
Если нужен UI: кнопка, badge, dropdown, tooltip component, link — `cellRenderer`.

---

## Вопрос 4. Какие row models есть в AG Grid?

Ответ:

- client-side row model — данные полностью в браузере;
- infinite row model — подгрузка данных блоками;
- server-side row model — серверная модель для сложных сценариев, обычно Enterprise;
- viewport row model — устаревший/специфичный сценарий, обычно не нужен.

---

## Вопрос 5. Когда использовать infinite row model?

Ответ:

Когда данных много, сервер отдает их постранично, нужен lazy loading, но не требуются сложные серверные grouping/pivot/tree.

---

## Вопрос 6. Когда использовать server-side row model?

Ответ:

Когда группировка, агрегация, pivot, фильтрация и сортировка выполняются на сервере, а данных слишком много для загрузки в браузер.

---

## Вопрос 7. Зачем нужен `getRowId`?

Ответ:

Он дает AG Grid стабильный идентификатор строки. Это нужно для точечных обновлений, selection, editing, transaction updates и корректной работы с данными при обновлениях.

---

## Вопрос 8. Как обновить строку без полной замены `rowData`?

Ответ:

Через:

```ts
gridApi.applyTransaction({
  update: [updatedRow]
})
```

Или через row node:

```ts
node.setData(updatedRow)
```

Или:

```ts
node.setDataValue('status', 'active')
```

---

## Вопрос 9. Как сохранить состояние колонок?

Ответ:

```ts
const state = gridApi.getColumnState()
localStorage.setItem('state', JSON.stringify(state))
```

Восстановление:

```ts
gridApi.applyColumnState({
  state: JSON.parse(savedState),
  applyOrder: true
})
```

---

## Вопрос 10. Как сохранить фильтры?

Ответ:

```ts
const filters = gridApi.getFilterModel()
localStorage.setItem('filters', JSON.stringify(filters))
```

Восстановление:

```ts
gridApi.setFilterModel(JSON.parse(savedFilters))
```

---

## Вопрос 11. Как реализовать внешний фильтр?

Ответ:

Нужно передать:

```ts
isExternalFilterPresent
doesExternalFilterPass
```

И после изменения внешнего условия вызвать:

```ts
gridApi.onFilterChanged()
```

---

## Вопрос 12. Какие методы должен реализовать кастомный фильтр?

Ответ:

- `isFilterActive`;
- `doesFilterPass`;
- `getModel`;
- `setModel`;
- опционально `afterGuiAttached`.

Также нужно вызывать:

```ts
params.filterChangedCallback()
```

---

## Вопрос 13. Какие методы должен реализовать кастомный cell editor?

Ответ:

Минимум:

```ts
getValue()
```

Опционально:

```ts
isPopup()
isCancelBeforeStart()
isCancelAfterEnd()
afterGuiAttached()
focusIn()
focusOut()
```

---

## Вопрос 14. Как сделать редактируемую таблицу с сохранением на сервер?

Ответ:

1. Включить `editable`.
2. Назначить `cellEditor`.
3. Слушать `cellValueChanged`.
4. Валидировать `newValue`.
5. Если валидация прошла — отправить изменения в API.
6. Если не прошла — вернуть старое значение через `node.setDataValue`.

---

## Вопрос 15. Почему AG Grid может не отображаться?

Ответ:

Чаще всего:

- нет высоты у контейнера;
- не подключены CSS;
- неправильная тема;
- неправильный импорт AG Grid Vue component;
- несовместимость версий `ag-grid-community` и `ag-grid-vue3`.

---

## Вопрос 16. Как улучшить производительность AG Grid во Vue?

Ответ:

- использовать `getRowId`;
- использовать `applyTransaction`;
- не пересоздавать `columnDefs`;
- использовать `shallowRef` для больших данных;
- не ставить большой `rowBuffer`;
- использовать `valueFormatter` вместо лишних renderer;
- выносить сложную фильтрацию/сортировку на сервер;
- использовать server-side row model для очень больших данных.

---

## Вопрос 17. Какие Enterprise-функции AG Grid ты знаешь?

Ответ:

- row grouping;
- aggregation;
- pivot;
- tree data;
- master/detail;
- server-side row model;
- set filter;
- Excel export;
- clipboard;
- context menu;
- tool panels;
- status bar.

---

## Вопрос 18. Как сделать кнопку в ячейке и вызвать метод родительского компонента?

Ответ:

Через `cellRenderer` и `context`.

```ts
const context = {
  parent: {
    onAction: row => console.log(row)
  }
}
```

В renderer:

```ts
props.params.context.parent.onAction(props.params.data)
```

---

## Вопрос 19. Как экспортировать CSV?

Ответ:

```ts
gridApi.exportDataAsCsv({
  fileName: 'report.csv'
})
```

Для Excel:

```ts
gridApi.exportDataAsExcel()
```

Но Excel export обычно требует Enterprise.

---

## Вопрос 20. Что такое `defaultColDef`?

Ответ:

Это объект с настройками, которые применяются ко всем колонкам по умолчанию.

```ts
const defaultColDef = {
  sortable: true,
  resizable: true,
  filter: true
}
```

---

# 31. Русскоязычные материалы

Официальная документация AG Grid - на английском. Ниже приводятся русскоязычные ресурсы
и поисковые выдачи, которые можно использовать дополнительно.

## Статьи и примеры на русском

Поиск по Habr:

AG Grid:

https://habr.com/ru/search/?q=AG+Grid&target_type=posts&order=relevance

---

# 32. Финальный чек-лист

## База

- поднять Vite + Vue 3 + TS + AG Grid;
- подключить CSS;
- задать высоту контейнеру;
- получить `gridApi`;
- вывести массив данных;
- сделать `defaultColDef`.

## Колонки

- менять ширину;
- закреплять колонки;
- группировать заголовки;
- использовать `valueGetter`;
- использовать `valueFormatter`;
- динамически менять `columnDefs`.

## Сортировка

- включать/отключать сортировку;
- писать кастомный comparator;
- программно ставить sort;
- получать текущую сортировку.

## Фильтрация

- text/number/date filter;
- floating filter;
- quick filter;
- external filter;
- программно ставить filter model;
- сбрасывать фильтры;
- писать кастомный фильтр.

## Ячейки

- условные стили;
- `cellClassRules`;
- `getRowStyle`;
- badge renderer;
- button renderer;
- tooltip.

## Редактирование

- `editable`;
- `agTextCellEditor`;
- `agNumberCellEditor`;
- `agSelectCellEditor`;
- `cellValueChanged`;
- откат невалидного значения;
- кастомный editor.

## Данные

- `getRowId`;
- `applyTransaction`;
- update/add/remove rows;
- selected rows;
- filtered rows;
- pinned rows.

## Большие данные

- client-side;
- infinite;
- server-side;
- когда что использовать.

## Enterprise

- grouping;
- aggregation;
- pivot;
- tree data;
- master/detail;
- Excel export;
- context menu.

---

# 33. Оценка уровня компетенций

На позицию Vue.js Developer по AG Grid:

## Junior/Middle уровень

Кандидат может вывести таблицу, знает `rowData`, `columnDefs`, умеет делать
простые сортировки и фильтры, но теряется в API и производительности.

## Хороший Middle+/Senior

Кандидат:
- уверенно использует `gridApi`;
- понимает external filter;
- умеет делать custom cell renderer/editor;
- использует `getRowId`;
- знает, как обновлять данные через transaction;
- понимает разницу row models.

## Сильный Senior

Кандидат:
- понимает, что и когда выполнять на клиенте, а что на сервере;
- может спроектировать серверную фильтрацию/сортировку;
- знает, как сохранить состояние таблицы;
- понимает производительность Vue + AG Grid;
- умеет делать кастомные фильтры и editor-компоненты;
- может объяснить, где Community, а где Enterprise;
- не боится live-coding и быстро читает API.

> «AG Grid — это отдельный движок. Vue нужен для интеграции, реактивности и кастомных компонентов. Для производительности важно использовать правильную row model, getRowId, transaction updates и не пересоздавать лишние объекты».

Если ты можешь спокойно объяснить эту фразу и подкрепить ее кодом - это уже очень сильный ответ.
