import{C as R}from"./ConsoleOutput-q6McdQfj.js";import{A as _,E as k}from"./main.esm-ZSTnD18R.js";import{d as g,i as P,o as F,b as M,e as a,f as q,v as $,a as u,u as v,F as S,r as d,s as m,_ as V,c as O,w as p}from"./index-Bc4Mc_9k.js";const H={class:"controls"},I=g({__name:"Example3.demo",emits:["log"],setup(h,{emit:o}){const l=o,i=P("onGridReady"),f=d([{id:1,firstName:"Иван",lastName:"Петров",age:32,salary:22e4,status:"active",hired:"2021-03-01"},{id:2,firstName:"Мария",lastName:"Сидорова",age:27,salary:18e4,status:"fired",hired:"2022-07-15"},{id:3,firstName:"Алексей",lastName:"Козлов",age:41,salary:25e4,status:"active",hired:"2019-11-20"},{id:4,firstName:"Елена",lastName:"Иванова",age:35,salary:2e5,status:"fired",hired:"2020-05-10"}]),x=m([{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя",filter:"agTextColumnFilter",filterParams:{debounceMs:200}},{field:"lastName",headerName:"Фамилия",filter:"agTextColumnFilter"},{field:"age",headerName:"Возраст",filter:"agNumberColumnFilter"},{field:"salary",headerName:"Зарплата",filter:"agNumberColumnFilter",valueFormatter:t=>t.value?`${t.value.toLocaleString("ru-RU")} ₽`:""},{field:"status",headerName:"Статус",filter:"agTextColumnFilter"},{field:"hired",headerName:"Дата приема",filter:"agDateColumnFilter",filterParams:{comparator:(t,n)=>{if(!n)return 0;const s=new Date(n);return s<t?-1:s>t?1:0}}}]),y=m({sortable:!0,resizable:!0,filter:!0,floatingFilter:!0});let e=null;const r=d("all");function N(t){e=t.api,t.api.sizeColumnsToFit(),i&&i()}let c;function C(t){const n=t.target.value;clearTimeout(c),c=setTimeout(()=>{e==null||e.setGridOption("quickFilterText",n),l("log",`Quick filter: "${n}"`)},300)}function D(){return r.value!=="all"}function b(t){var n;return r.value==="all"||((n=t.data)==null?void 0:n.status)===r.value}function E(){e==null||e.onFilterChanged(),l("log",`External filter: ${r.value}`)}function T(){e==null||e.setFilterModel(null),e==null||e.setGridOption("quickFilterText",""),r.value="all";const t=document.querySelector(".controls input");t&&(t.value=""),e==null||e.onFilterChanged(),l("log","Все фильтры сброшены")}function w(){const t=e==null?void 0:e.getFilterModel();l("log",`Модель фильтров: ${JSON.stringify(t,null,2)}`)}function G(){l("log","Фильтры изменены (событие)")}return(t,n)=>(F(),M(S,null,[a("div",H,[a("input",{type:"text",placeholder:"Быстрый поиск...",onInput:C},null,32),q(a("select",{"onUpdate:modelValue":n[0]||(n[0]=s=>r.value=s),onChange:E},[...n[1]||(n[1]=[a("option",{value:"all"},"Все статусы",-1),a("option",{value:"active"},"Активные",-1),a("option",{value:"fired"},"Уволенные",-1)])],544),[[$,r.value]]),a("button",{onClick:T},"Сбросить все фильтры"),a("button",{onClick:w},"Показать модель фильтров")]),u(v(_),{style:{flex:"1",width:"100%"},rowData:f.value,columnDefs:x.value,defaultColDef:y.value,isExternalFilterPresent:D,doesExternalFilterPass:b,animateRows:!0,onGridReady:N,onFilterChanged:G},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),L=V(I,[["__scopeId","data-v-ce5c4a45"]]),z=`<template>
  <div class="controls">
    <input type="text" placeholder="Быстрый поиск..." @input="onQuickFilter" />
    <select v-model="statusFilter" @change="applyExternalFilter">
      <option value="all">Все статусы</option>
      <option value="active">Активные</option>
      <option value="fired">Уволенные</option>
    </select>
    <button @click="resetFilters">Сбросить все фильтры</button>
    <button @click="logFilterModel">Показать модель фильтров</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :isExternalFilterPresent="isExternalFilterPresent"
    :doesExternalFilterPass="doesExternalFilterPass"
    :animateRows="true"
    @grid-ready="onGridReady"
    @filter-changed="onFilterChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Employee {
  id: number
  firstName: string
  lastName: string
  age: number
  salary: number
  status: 'active' | 'fired'
  hired: string
}

const rowData = ref<Employee[]>([
  { id: 1, firstName: 'Иван', lastName: 'Петров', age: 32, salary: 220000, status: 'active', hired: '2021-03-01' },
  { id: 2, firstName: 'Мария', lastName: 'Сидорова', age: 27, salary: 180000, status: 'fired', hired: '2022-07-15' },
  { id: 3, firstName: 'Алексей', lastName: 'Козлов', age: 41, salary: 250000, status: 'active', hired: '2019-11-20' },
  { id: 4, firstName: 'Елена', lastName: 'Иванова', age: 35, salary: 200000, status: 'fired', hired: '2020-05-10' },
])

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя', filter: 'agTextColumnFilter', filterParams: { debounceMs: 200 } },
  { field: 'lastName', headerName: 'Фамилия', filter: 'agTextColumnFilter' },
  { field: 'age', headerName: 'Возраст', filter: 'agNumberColumnFilter' },
  { field: 'salary', headerName: 'Зарплата', filter: 'agNumberColumnFilter', valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : '' },
  { field: 'status', headerName: 'Статус', filter: 'agTextColumnFilter' },
  { field: 'hired', headerName: 'Дата приема', filter: 'agDateColumnFilter', filterParams: { comparator: (filterDate: Date, cellValue: string) => { if (!cellValue) return 0; const d = new Date(cellValue); return d < filterDate ? -1 : d > filterDate ? 1 : 0 } } },
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
  floatingFilter: true,
})

let gridApi: GridApi | null = null
const statusFilter = ref<'all' | 'active' | 'fired'>('all')

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

let qTimeout: ReturnType<typeof setTimeout>
function onQuickFilter(e: Event) {
  const val = (e.target as HTMLInputElement).value
  clearTimeout(qTimeout)
  qTimeout = setTimeout(() => {
    gridApi?.setGridOption('quickFilterText', val)
    emit('log', \`Quick filter: "\${val}"\`)
  }, 300)
}

function isExternalFilterPresent() {
  return statusFilter.value !== 'all'
}
function doesExternalFilterPass(node: any) {
  return statusFilter.value === 'all' || node.data?.status === statusFilter.value
}
function applyExternalFilter() {
  gridApi?.onFilterChanged();
  emit('log', \`External filter: \${statusFilter.value}\`)
}

function resetFilters() {
  gridApi?.setFilterModel(null)
  gridApi?.setGridOption('quickFilterText', '')
  statusFilter.value = 'all'
  const input = document.querySelector('.controls input') as HTMLInputElement
  if (input) input.value = ''
  gridApi?.onFilterChanged()
  emit('log', 'Все фильтры сброшены')
}

function logFilterModel() {
  const model = gridApi?.getFilterModel()
  emit('log', \`Модель фильтров: \${JSON.stringify(model, null, 2)}\`)
}
function onFilterChanged() {
  emit('log', 'Фильтры изменены (событие)')
}
<\/script>

<style scoped>
.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  align-items: center;
}
.controls input,
.controls select {
  padding: 6px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.9rem;
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
`,Q="Фильтрация",B="Демонстрация быстрого поиска (quick filter), floating filter, внешнего фильтра (по статусу) и программного управления фильтрами.",J=g({__name:"Example3",setup(h){const o=d([]);function l(i){o.value.push(`[${new Date().toLocaleTimeString()}] ${i}`)}return(i,f)=>(F(),O(k,{title:Q,description:B,code:v(z),language:"html",onLog:l},{console:p(()=>[u(R,{logs:o.value},null,8,["logs"])]),default:p(()=>[u(L,{onLog:l})]),_:1},8,["code"]))}});export{J as default};
