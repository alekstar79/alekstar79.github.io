import{A as G,E as _,C as $}from"./main.esm-CgUOTdan.js";import{d as y,i as V,o as g,c as A,a as s,b as u,u as D,F as B,r as v,g as k,s as p,_ as T,e as z,w}from"./index-CvHQtGdr.js";const F=y({__name:"Example6.demo",emits:["log"],setup(x,{emit:r}){const o=r,l=V("onGridReady"),n=v([...[{id:1,firstName:"Иван",salary:1e5},{id:2,firstName:"Мария",salary:15e4},{id:3,firstName:"Алексей",salary:2e5}]]);let c=4;const C=k(()=>[{id:"total",firstName:"ИТОГО",salary:n.value.reduce((a,d)=>a+d.salary,0)}]),h=p([{field:"id",headerName:"ID",width:80,editable:!1},{field:"firstName",headerName:"Имя",editable:!0},{field:"salary",headerName:"Зарплата",editable:!0,cellEditor:"agNumberCellEditor",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}]),E=p({sortable:!0,resizable:!0,filter:!0});let t=null;function I(e){t=e.api,e.api.sizeColumnsToFit(),l&&l()}function N(e){const a=e.column.getColId(),d=e.data.id,i=n.value.findIndex(m=>m.id===d);if(i!==-1){const f={...n.value[i],[a]:e.newValue};n.value=[...n.value.slice(0,i),f,...n.value.slice(i+1)],t==null||t.applyTransaction({update:[f]})}o("log",`Изменено поле "${a}": "${e.oldValue}" → "${e.newValue}"`)}function b(){if(!t)return;const e={id:c++,firstName:`Новый ${c-1}`,salary:Math.round(Math.random()*1e5+5e4)};n.value=[...n.value,e],t.applyTransaction({add:[e]}),o("log",`Добавлен сотрудник: ${e.firstName} с зарплатой ${e.salary}`)}return(e,a)=>(g(),A(B,null,[s("div",{class:"controls"},[s("button",{onClick:b},"➕ Добавить сотрудника"),a[0]||(a[0]=s("span",{style:{"margin-left":"12px","font-size":"0.9rem",color:"#475569"}}," 💡 Редактируйте имя или зарплату – итог пересчитается автоматически ",-1))]),u(D(G),{style:{flex:"1",width:"100%"},rowData:n.value,columnDefs:h.value,defaultColDef:E.value,pinnedBottomRowData:C.value,animateRows:!0,onGridReady:I,onCellValueChanged:N},null,8,["rowData","columnDefs","defaultColDef","pinnedBottomRowData"])],64))}}),H=T(F,[["__scopeId","data-v-4970ffd8"]]),L=`<template>
  <div class="controls">
    <button @click="addEmployee">➕ Добавить сотрудника</button>
    <span style="margin-left: 12px; font-size: 0.9rem; color: #475569;">
      💡 Редактируйте имя или зарплату – итог пересчитается автоматически
    </span>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :pinnedBottomRowData="pinnedBottomRowData"
    :animateRows="true"
    @grid-ready="onGridReady"
    @cell-value-changed="onCellValueChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef, computed } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent, CellValueChangedEvent } from 'ag-grid-community'

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Employee {
  id: number
  firstName: string
  salary: number
}

// Начальные данные
const initialData: Employee[] = [
  { id: 1, firstName: 'Иван', salary: 100000 },
  { id: 2, firstName: 'Мария', salary: 150000 },
  { id: 3, firstName: 'Алексей', salary: 200000 },
]

// Реактивные данные и счётчик ID
const rowData = ref<Employee[]>([...initialData])
let nextId = 4 // следующий доступный ID

// Итоговая строка (вычисляется автоматически)
const pinnedBottomRowData = computed(() => {
  const total = rowData.value.reduce((sum, r) => sum + r.salary, 0)
  return [{ id: 'total', firstName: 'ИТОГО', salary: total }]
})

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80, editable: false },
  { field: 'firstName', headerName: 'Имя', editable: true },
  {
    field: 'salary',
    headerName: 'Зарплата',
    editable: true,
    cellEditor: 'agNumberCellEditor',
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : ''
  }
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
})

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

// Обработчик изменения ячейки – обновляем данные в rowData, чтобы пересчитать итог
function onCellValueChanged(event: CellValueChangedEvent) {
  const colId = event.column.getColId()
  const rowId = event.data.id
  // Находим обновляемую строку в rowData и меняем значение
  const rowIndex = rowData.value.findIndex(r => r.id === rowId)
  if (rowIndex !== -1) {
    const oldRow = rowData.value[rowIndex]
    const newRow = { ...oldRow, [colId]: event.newValue }
    rowData.value = [
      ...rowData.value.slice(0, rowIndex),
      newRow,
      ...rowData.value.slice(rowIndex + 1)
    ]
    // Синхронизируем AG Grid через транзакцию (обновляем только одну строку)
    gridApi?.applyTransaction({ update: [newRow] })
  }
  emit('log', \`Изменено поле "\${colId}": "\${event.oldValue}" → "\${event.newValue}"\`)
}

// Добавление сотрудника
function addEmployee() {
  if (!gridApi) return
  const newEmployee: Employee = {
    id: nextId++,
    firstName: \`Новый \${nextId - 1}\`,
    salary: Math.round(Math.random() * 100000 + 50000)
  }
  // Обновляем rowData (добавляем в конец)
  rowData.value = [...rowData.value, newEmployee]
  // Применяем транзакцию для AG Grid
  gridApi.applyTransaction({ add: [newEmployee] })
  emit('log', \`Добавлен сотрудник: \${newEmployee.firstName} с зарплатой \${newEmployee.salary}\`)
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
`,M="Закреплённых строки (pinned rows)",j="Закреплённая снизу строка автоматически показывает сумму зарплат. При редактировании данных (имя, зарплата) или добавлении нового сотрудника итог пересчитывается. Полезно для отчётов и сводных таблиц.",O=y({__name:"Example6",setup(x){const r=v([]);function o(l){r.value.push(`[${new Date().toLocaleTimeString()}] ${l}`)}return(l,R)=>(g(),z(_,{title:M,description:j,code:D(L),language:"html",onLog:o},{console:w(()=>[u($,{logs:r.value},null,8,["logs"])]),default:w(()=>[u(H,{onLog:o})]),_:1},8,["code"]))}});export{O as default};
