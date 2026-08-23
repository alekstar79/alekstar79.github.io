import{C as T}from"./ConsoleOutput-q6McdQfj.js";import{A as O,E as V}from"./main.esm-ZSTnD18R.js";import{d as y,i as k,o as D,b as M,e as i,a as p,u as S,F,r as x,s as w,_ as K,c as Y,w as v}from"./index-Bc4Mc_9k.js";const f="ag-grid-demo-state",z=y({__name:"Example7.demo",emits:["log"],setup(h,{emit:s}){const l=s,d=k("onGridReady"),u=[{id:1,firstName:"Иван",lastName:"Петров",salary:22e4},{id:2,firstName:"Мария",lastName:"Сидорова",salary:18e4},{id:3,firstName:"Алексей",lastName:"Козлов",salary:25e4}],n=x([...u]);let c=4;const C=w([{field:"id",headerName:"ID",width:80,editable:!1},{field:"firstName",headerName:"Имя",editable:!0},{field:"lastName",headerName:"Фамилия",editable:!0},{field:"salary",headerName:"Зарплата",editable:!0,cellEditor:"agNumberCellEditor",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}]),I=w({sortable:!0,resizable:!0,filter:!0});let t=null;function N(e){return String(e.data.id)}function R(e){t=e.api,e.api.sizeColumnsToFit(),d&&d()}function b(e){const a=e.column.getColId(),o=e.data.id,r=n.value.findIndex(m=>m.id===o);if(r!==-1){const g={...n.value[r],[a]:e.newValue};n.value=[...n.value.slice(0,r),g,...n.value.slice(r+1)],t==null||t.applyTransaction({update:[g]})}l("log",`Изменено поле "${a}": "${e.oldValue}" → "${e.newValue}"`)}function E(){if(!t)return;const e={id:c++,firstName:"Новый",lastName:`Сотрудник ${c-1}`,salary:Math.round(Math.random()*1e5+5e4)};n.value=[...n.value,e],t.applyTransaction({add:[e]}),l("log",`Добавлен сотрудник: ${e.firstName} ${e.lastName}`)}function A(){if(!t)return;const e=t.getSelectedRows();if(!e.length){l("log","Нет выбранных строк для удаления");return}const a=new Set(e.map(o=>o.id));n.value=n.value.filter(o=>!a.has(o.id)),t.applyTransaction({remove:e}),l("log",`Удалено ${e.length} сотрудников`)}function G(){if(!t)return;const e={data:n.value,columns:t.getColumnState(),filters:t.getFilterModel()};localStorage.setItem(f,JSON.stringify(e)),l("log","Состояние (данные + колонки + фильтры) сохранено")}function _(){if(!t)return;const e=localStorage.getItem(f);if(!e){l("log","Сохранённое состояние не найдено");return}try{const a=JSON.parse(e);a.data&&Array.isArray(a.data)&&(n.value=a.data,c=n.value.reduce((r,m)=>Math.max(r,m.id),0)+1,t.setGridOption("rowData",n.value)),a.columns&&t.applyColumnState({state:a.columns,applyOrder:!0}),a.filters&&t.setFilterModel(a.filters),l("log","Состояние успешно восстановлено")}catch{l("log","Ошибка при восстановлении состояния")}}function $(){t&&(n.value=[...u],c=u.reduce((e,a)=>Math.max(e,a.id),0)+1,t.setGridOption("rowData",n.value),t.applyColumnState({defaultState:{sort:null}}),t.setFilterModel(null),localStorage.removeItem(f),l("log","Состояние сброшено к начальному"))}return(e,a)=>(D(),M(F,null,[i("div",{class:"controls"},[i("button",{onClick:E},"➕ Добавить"),i("button",{onClick:A},"🗑️ Удалить выбранных"),i("button",{onClick:G},"💾 Сохранить состояние"),i("button",{onClick:_},"📂 Восстановить состояние"),i("button",{onClick:$},"🔄 Сбросить состояние")]),p(S(O),{style:{flex:"1",width:"100%"},rowData:n.value,columnDefs:C.value,defaultColDef:I.value,rowSelection:"multiple",getRowId:N,animateRows:!0,onGridReady:R,onCellValueChanged:b},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),B=K(z,[["__scopeId","data-v-e9e24b37"]]),H=`<template>
  <div class="controls">
    <button @click="addEmployee">➕ Добавить</button>
    <button @click="deleteSelected">🗑️ Удалить выбранных</button>
    <button @click="saveState">💾 Сохранить состояние</button>
    <button @click="restoreState">📂 Восстановить состояние</button>
    <button @click="resetState">🔄 Сбросить состояние</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    :getRowId="getRowId"
    :animateRows="true"
    @grid-ready="onGridReady"
    @cell-value-changed="onCellValueChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent, CellValueChangedEvent } from 'ag-grid-community'

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Employee {
  id: number
  firstName: string
  lastName: string
  salary: number
}

const initialData: Employee[] = [
  { id: 1, firstName: 'Иван', lastName: 'Петров', salary: 220000 },
  { id: 2, firstName: 'Мария', lastName: 'Сидорова', salary: 180000 },
  { id: 3, firstName: 'Алексей', lastName: 'Козлов', salary: 250000 },
]

const rowData = ref<Employee[]>([...initialData])
let nextId = 4
const STORAGE_KEY = 'ag-grid-demo-state'

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80, editable: false },
  { field: 'firstName', headerName: 'Имя', editable: true },
  { field: 'lastName', headerName: 'Фамилия', editable: true },
  {
    field: 'salary',
    headerName: 'Зарплата',
    editable: true,
    cellEditor: 'agNumberCellEditor',
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : ''
  }
])

const defaultColDef = shallowRef<ColDef>({ sortable: true, resizable: true, filter: true })

let gridApi: GridApi | null = null

function getRowId(params: any) {
  return String(params.data.id)
}

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

function onCellValueChanged(event: CellValueChangedEvent) {
  const colId = event.column.getColId()
  const rowId = event.data.id
  const rowIndex = rowData.value.findIndex(r => r.id === rowId)

  if (rowIndex !== -1) {
    const oldRow = rowData.value[rowIndex]
    const newRow = { ...oldRow, [colId]: event.newValue }
    rowData.value = [
      ...rowData.value.slice(0, rowIndex),
      newRow,
      ...rowData.value.slice(rowIndex + 1)
    ]
    gridApi?.applyTransaction({ update: [newRow] })
  }

  emit('log', \`Изменено поле "\${colId}": "\${event.oldValue}" → "\${event.newValue}"\`)
}

function addEmployee() {
  if (!gridApi) return

  const newEmployee: Employee = {
    id: nextId++,
    firstName: 'Новый',
    lastName: \`Сотрудник \${nextId - 1}\`,
    salary: Math.round(Math.random() * 100000 + 50000)
  }

  rowData.value = [...rowData.value, newEmployee]
  gridApi.applyTransaction({ add: [newEmployee] })

  emit('log', \`Добавлен сотрудник: \${newEmployee.firstName} \${newEmployee.lastName}\`)
}

function deleteSelected() {
  if (!gridApi) return

  const selected = gridApi.getSelectedRows() as Employee[]
  if (!selected.length) {
    emit('log', 'Нет выбранных строк для удаления')
    return
  }

  // Удаляем из rowData
  const idsToRemove = new Set(selected.map(r => r.id))

  rowData.value = rowData.value.filter(r => !idsToRemove.has(r.id))
  gridApi.applyTransaction({ remove: selected })

  emit('log', \`Удалено \${selected.length} сотрудников\`)
}

function saveState() {
  if (!gridApi) return

  const state = {
    data: rowData.value,
    columns: gridApi.getColumnState(),
    filters: gridApi.getFilterModel()
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))

  emit('log', 'Состояние (данные + колонки + фильтры) сохранено')
}

function restoreState() {
  if (!gridApi) return

  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    emit('log', 'Сохранённое состояние не найдено')
    return
  }

  try {
    const state = JSON.parse(raw)
    if (state.data && Array.isArray(state.data)) {
      rowData.value = state.data
      // Обновляем nextId на основе максимального ID
      const maxId = rowData.value.reduce((max, r) => Math.max(max, r.id), 0)
      nextId = maxId + 1
      // Применяем транзакцию для синхронизации AG Grid (перезагружаем все данные)
      gridApi.setGridOption('rowData', rowData.value)
    }
    if (state.columns) {
      gridApi.applyColumnState({ state: state.columns, applyOrder: true })
    }
    if (state.filters) {
      gridApi.setFilterModel(state.filters)
    }
    emit('log', 'Состояние успешно восстановлено')
  } catch (e) {
    emit('log', 'Ошибка при восстановлении состояния')
  }
}

function resetState() {
  if (!gridApi) return

  rowData.value = [...initialData]
  nextId = initialData.reduce((max, r) => Math.max(max, r.id), 0) + 1

  gridApi.setGridOption('rowData', rowData.value)
  gridApi.applyColumnState({ defaultState: { sort: null } })
  gridApi.setFilterModel(null)

  localStorage.removeItem(STORAGE_KEY)
  emit('log', 'Состояние сброшено к начальному')
}
<\/script>

<style scoped>
.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  align-items: center;
  flex-shrink: 0;
}
.controls button {
  padding: 6px 14px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  cursor: pointer;
}
</style>
`,J="Сохранение состояния",L="Таблица сохраняет данные, ширину колонок, порядок, сортировку и фильтры в localStorage. При перезагрузке страницы состояние восстанавливается. Также можно добавлять, удалять и редактировать записи.",q=y({__name:"Example7",setup(h){const s=x([]);function l(d){s.value.push(`[${new Date().toLocaleTimeString()}] ${d}`)}return(d,u)=>(D(),Y(V,{title:J,description:L,code:S(H),language:"html",onLog:l},{console:v(()=>[p(T,{logs:s.value},null,8,["logs"])]),default:v(()=>[p(B,{onLog:l})]),_:1},8,["code"]))}});export{q as default};
