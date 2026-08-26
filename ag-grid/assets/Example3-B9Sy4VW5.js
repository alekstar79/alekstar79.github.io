import{A as P,E as $,C as S}from"./main.esm-CgUOTdan.js";import{d as v,i as q,o as y,c as O,a,f as V,v as H,b as d,u as c,F as I,r as u,s as g,_ as J,e as L,w as F}from"./index-CvHQtGdr.js";const z={class:"controls"},Q=v({__name:"Example3.demo",emits:["log"],setup(h,{emit:o}){const l=o,i=q("onGridReady"),m=document.body,N=u([{id:1,firstName:"Иван",lastName:"Петров",age:32,salary:22e4,status:"active",hired:"2021-03-01"},{id:2,firstName:"Мария",lastName:"Сидорова",age:27,salary:18e4,status:"fired",hired:"2022-07-15"},{id:3,firstName:"Алексей",lastName:"Козлов",age:41,salary:25e4,status:"active",hired:"2019-11-20"},{id:4,firstName:"Елена",lastName:"Иванова",age:35,salary:2e5,status:"fired",hired:"2020-05-10"}]),x=g([{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя",filter:"agTextColumnFilter",filterParams:{debounceMs:200}},{field:"lastName",headerName:"Фамилия",filter:"agTextColumnFilter"},{field:"age",headerName:"Возраст",filter:"agNumberColumnFilter"},{field:"salary",headerName:"Зарплата",filter:"agNumberColumnFilter",valueFormatter:t=>t.value?`${t.value.toLocaleString("ru-RU")} ₽`:""},{field:"status",headerName:"Статус",filter:"agTextColumnFilter"},{field:"hired",headerName:"Дата приема",filter:"agDateColumnFilter",filterParams:{comparator:(t,n)=>{if(!n)return 0;const s=new Date(n);return s<t?-1:s>t?1:0}}}]),C=g({sortable:!0,resizable:!0,filter:!0,floatingFilter:!0}),r=u("all"),f=u(null);let e=null;function b(t){e=t.api,t.api.sizeColumnsToFit(),i&&i()}let p;function D(t){const n=t.target.value;clearTimeout(p),p=setTimeout(()=>{e==null||e.setGridOption("quickFilterText",n),l("log",`Quick filter: "${n}"`)},300)}function M(){return r.value!=="all"}function E(t){var n;return r.value==="all"||((n=t.data)==null?void 0:n.status)===r.value}function T(){e==null||e.onFilterChanged(),l("log",`External filter: ${r.value}`)}function w(){e==null||e.setFilterModel(null),e==null||e.setGridOption("quickFilterText",""),r.value="all";const t=document.querySelector(".controls input");t&&(t.value=""),e==null||e.onFilterChanged(),l("log","Все фильтры сброшены")}function k(){const t=(e==null?void 0:e.getFilterModel())??null;l("log",`Save filter model: ${JSON.stringify(t,null,2)}`),f.value=t}function G(){const t=f.value;l("log",`Apply filter model: ${JSON.stringify(t,null,2)}`),e==null||e.setFilterModel(t)}function R(){const t=e==null?void 0:e.getFilterModel();l("log",`Модель фильтров: ${JSON.stringify(t,null,2)}`)}function _(){l("log","Фильтры изменены (событие)")}return(t,n)=>(y(),O(I,null,[a("div",z,[a("input",{type:"text",placeholder:"Быстрый поиск...",onInput:D},null,32),V(a("select",{"onUpdate:modelValue":n[0]||(n[0]=s=>r.value=s),onChange:T},[...n[1]||(n[1]=[a("option",{value:"all"},"Все статусы",-1),a("option",{value:"active"},"Активные",-1),a("option",{value:"fired"},"Уволенные",-1)])],544),[[H,r.value]]),a("button",{onClick:w},"Сбросить все фильтры"),a("button",{onClick:R},"Показать модель фильтров"),a("button",{onClick:k},"Сохранить фильтр"),a("button",{onClick:G},"Применить фильтр")]),d(c(P),{style:{flex:"1",width:"100%"},rowData:N.value,columnDefs:x.value,defaultColDef:C.value,isExternalFilterPresent:M,doesExternalFilterPass:E,animateRows:!0,popupParent:c(m),onGridReady:b,onFilterChanged:_},null,8,["rowData","columnDefs","defaultColDef","popupParent"])],64))}}),B=J(Q,[["__scopeId","data-v-6b663a47"]]),j=`<template>
  <div class="controls">
    <input type="text" placeholder="Быстрый поиск..." @input="onQuickFilter" />
    <select v-model="statusFilter" @change="applyExternalFilter">
      <option value="all">Все статусы</option>
      <option value="active">Активные</option>
      <option value="fired">Уволенные</option>
    </select>
    <button @click="resetFilters">Сбросить все фильтры</button>
    <button @click="logFilterModel">Показать модель фильтров</button>
    <button @click="saveFilterModel">Сохранить фильтр</button>
    <button @click="applyFilterModel">Применить фильтр</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :isExternalFilterPresent="isExternalFilterPresent"
    :doesExternalFilterPass="doesExternalFilterPass"
    :animateRows="true"
    :popupParent="popupParent"
    @grid-ready="onGridReady"
    @filter-changed="onFilterChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import type { ColDef, GridApi, GridReadyEvent, FilterModel } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

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

const popupParent = document.body // null

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

const statusFilter = ref<'all' | 'active' | 'fired'>('all')
const savedFilterModel = ref<FilterModel | null>(null)
let gridApi: GridApi | null = null

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

function saveFilterModel() {
  const model = gridApi?.getFilterModel() ?? null
  emit('log', \`Save filter model: \${JSON.stringify(model, null, 2)}\`)
  savedFilterModel.value = model
}

function applyFilterModel() {
  const model = savedFilterModel.value
  emit('log', \`Apply filter model: \${JSON.stringify(model, null, 2)}\`)
  gridApi?.setFilterModel(model)
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
`,A="Фильтрация",U="Демонстрация быстрого поиска (quick filter), floating filter, внешнего фильтра (по статусу) и программного управления фильтрами.",X=v({__name:"Example3",setup(h){const o=u([]);function l(i){o.value.push(`[${new Date().toLocaleTimeString()}] ${i}`)}return(i,m)=>(y(),L($,{title:A,description:U,code:c(j),language:"html",onLog:l},{console:F(()=>[d(S,{logs:o.value},null,8,["logs"])]),default:F(()=>[d(B,{onLog:l})]),_:1},8,["code"]))}});export{X as default};
