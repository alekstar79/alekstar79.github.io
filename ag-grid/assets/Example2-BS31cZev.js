import{A as x,E as R,C as G}from"./main.esm-CgUOTdan.js";import{d as p,i as k,o as g,c as I,a as r,b as i,u as y,F as $,r as h,s as m,_ as E,e as A,w as f}from"./index-CvHQtGdr.js";const F=p({__name:"Example2.demo",emits:["log"],setup(C,{emit:l}){const n=l,o=k("onGridReady"),d=h([{id:1,firstName:"Иван",lastName:"Петров",age:32,salary:22e4,status:"active",hired:"2021-03-01"},{id:2,firstName:"Мария",lastName:"Сидорова",age:27,salary:18e4,status:"fired",hired:"2022-07-15"},{id:3,firstName:"Алексей",lastName:"Козлов",age:41,salary:25e4,status:"active",hired:"2019-11-20"},{id:4,firstName:"Елена",lastName:"Иванова",age:35,salary:2e5,status:"active",hired:"2020-05-10"}]),u=(t,a)=>(t??"").localeCompare(a??"","ru",{sensitivity:"base"}),c=(t,a)=>(t??1/0)-(a??1/0),N=m([{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя",comparator:u},{field:"lastName",headerName:"Фамилия",comparator:u},{field:"age",headerName:"Возраст",comparator:c},{field:"salary",headerName:"Зарплата",comparator:c,valueFormatter:t=>t.value?`${t.value.toLocaleString("ru-RU")} ₽`:""},{field:"status",headerName:"Статус"},{field:"hired",headerName:"Дата приема"}]),b=m({resizable:!0,sortable:!0,filter:!0});let e=null;function S(t){e=t.api,t.api.sizeColumnsToFit(),o&&o()}function v(){e==null||e.applyColumnState({state:[{colId:"salary",sort:"desc"}],defaultState:{sort:null}}),n("log","Сортировка по зарплате ↓")}function D(){e==null||e.applyColumnState({state:[{colId:"salary",sort:"asc"}],defaultState:{sort:null}}),n("log","Сортировка по зарплате ↑")}function _(){e==null||e.applyColumnState({defaultState:{sort:null}}),n("log","Сортировка сброшена")}function w(){const a=((e==null?void 0:e.getColumnState())??[]).filter(s=>s.sort);n("log",a.length?`Текущая сортировка: ${a.map(s=>`${s.colId}: ${s.sort}`).join(", ")}`:"Сортировка не активна")}return(t,a)=>(g(),I($,null,[r("div",{class:"controls"},[r("button",{onClick:v},"Сортировать по зарплате ↓"),r("button",{onClick:D},"Сортировать по зарплате ↑"),r("button",{onClick:_},"Сбросить сортировку"),r("button",{onClick:w},"Показать текущую сортировку")]),i(y(x),{style:{flex:"1",width:"100%"},rowData:d.value,columnDefs:N.value,defaultColDef:b.value,animateRows:!0,onGridReady:S},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),j=E(F,[["__scopeId","data-v-e3d45f35"]]),V=`<template>
  <div class="controls">
    <button @click="sortSalaryDesc">Сортировать по зарплате ↓</button>
    <button @click="sortSalaryAsc">Сортировать по зарплате ↑</button>
    <button @click="resetSorting">Сбросить сортировку</button>
    <button @click="logSortState">Показать текущую сортировку</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :animateRows="true"
    @grid-ready="onGridReady"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import type { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  salary: number;
  status: 'active' | 'fired';
  hired: string
}

const rowData = ref<Employee[]>([
  { id: 1, firstName: 'Иван', lastName: 'Петров', age: 32, salary: 220000, status: 'active', hired: '2021-03-01' },
  { id: 2, firstName: 'Мария', lastName: 'Сидорова', age: 27, salary: 180000, status: 'fired', hired: '2022-07-15' },
  { id: 3, firstName: 'Алексей', lastName: 'Козлов', age: 41, salary: 250000, status: 'active', hired: '2019-11-20' },
  { id: 4, firstName: 'Елена', lastName: 'Иванова', age: 35, salary: 200000, status: 'active', hired: '2020-05-10' },
])

const ruComparator = (a: string, b: string) => (a ?? '').localeCompare(b ?? '', 'ru', { sensitivity: 'base' })
const numComparator = (a?: number, b?: number) => ((a == null ? Infinity : a) - (b == null ? Infinity : b))

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя', comparator: ruComparator },
  { field: 'lastName', headerName: 'Фамилия', comparator: ruComparator },
  { field: 'age', headerName: 'Возраст', comparator: numComparator },
  {
    field: 'salary',
    headerName: 'Зарплата',
    comparator: numComparator,
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : '',
  },
  { field: 'status', headerName: 'Статус' },
  { field: 'hired', headerName: 'Дата приема' },
])

const defaultColDef = shallowRef<ColDef>({
  resizable: true,
  sortable: true,
  filter: true
})

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

function sortSalaryDesc() {
  gridApi?.applyColumnState({ state: [{ colId: 'salary', sort: 'desc' }], defaultState: { sort: null } })
  emit('log', 'Сортировка по зарплате ↓')
}

function sortSalaryAsc() {
  gridApi?.applyColumnState({ state: [{ colId: 'salary', sort: 'asc' }], defaultState: { sort: null } })
  emit('log', 'Сортировка по зарплате ↑')
}

function resetSorting() {
  gridApi?.applyColumnState({ defaultState: { sort: null } })
  emit('log', 'Сортировка сброшена')
}

function logSortState() {
  const state = gridApi?.getColumnState() ?? []
  const sorting = state.filter(col => col.sort)
  emit('log', sorting.length ? \`Текущая сортировка: \${sorting.map(c => \`\${c.colId}: \${c.sort}\`).join(', ')}\` : 'Сортировка не активна')
}
<\/script>

<style scoped>
.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  flex-shrink: 0;
}
.controls button {
  padding: 6px 14px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  cursor: pointer;
}
.controls button:hover {
  background: #e2e8f0;
}
</style>
`,z="Сортировка и comparator",B="Демонстрация стандартной сортировки, кастомных comparator-ов и программного управления сортировкой через GridApi.",T=p({__name:"Example2",setup(C){const l=h([]);function n(o){l.value.push(`[${new Date().toLocaleTimeString()}] ${o}`)}return(o,d)=>(g(),A(R,{title:z,description:B,code:y(V),language:"html",onLog:n},{console:f(()=>[i(G,{logs:l.value},null,8,["logs"])]),default:f(()=>[i(j,{onLog:n})]),_:1},8,["code"]))}});export{T as default};
