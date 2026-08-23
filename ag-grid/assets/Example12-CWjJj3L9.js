import{C as w}from"./ConsoleOutput-q6McdQfj.js";import{A as S,E as T}from"./main.esm-ZSTnD18R.js";import{d as C,i as F,r as b,o as D,b as x,e as i,u as r,a as f,F as A,s as p,_ as $,c as N,w as P}from"./index-Bc4Mc_9k.js";const k={class:"controls"},v="ag-grid-demo-current-page",z=C({__name:"Example12.demo",emits:["log"],setup(G,{emit:l}){const t=l,a=F("onGridReady"),m=b(Array.from({length:50},(e,n)=>({id:n+1,name:`Сотрудник ${n+1}`,age:20+n%30,salary:5e4+n*1e3}))),R=p([{field:"id",headerName:"ID",width:80},{field:"name",headerName:"Имя"},{field:"age",headerName:"Возраст",filter:"agNumberColumnFilter"},{field:"salary",headerName:"Зарплата",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}]),y=p({sortable:!0,resizable:!0,filter:!0});let d=null,o=1,s=1,u=!0;function E(e){d=e.api,e.api.sizeColumnsToFit(),a&&a(),u=!0}function h(e){const n=Number(localStorage.getItem(v));n>1&&e.api.paginationGoToPage(n-1)}function _(e){const n=e.api;if(o=n.paginationGetCurrentPage()+1,s=n.paginationGetTotalPages(),u){u=!1;return}e.newPage&&(localStorage.setItem(v,String(o)),t("log",`Страница ${o} из ${s}`))}function g(e){d&&(e<1||e>s||(d.paginationGoToPage(e-1),t("log",`Переход на страницу ${e}`)))}return(e,n)=>(D(),x(A,null,[i("div",k,[i("button",{onClick:n[0]||(n[0]=c=>g(1))},"Первая"),i("button",{onClick:n[1]||(n[1]=c=>g(r(o)-1))},"Предыдущая"),i("button",{onClick:n[2]||(n[2]=c=>g(r(o)+1))},"Следующая"),i("button",{onClick:n[3]||(n[3]=c=>g(r(s)))},"Последняя")]),f(r(S),{style:{flex:"1",width:"100%"},rowData:m.value,columnDefs:R.value,defaultColDef:y.value,pagination:!0,paginationPageSize:10,paginationPageSizeSelector:[5,10,20],animateRows:!0,onGridReady:E,onFirstDataRendered:h,onPaginationChanged:_},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),I=$(z,[["__scopeId","data-v-e25f637d"]]),O=`<template>
  <div class="controls">
    <button @click="goToPage(1)">Первая</button>
    <button @click="goToPage(currentPage - 1)">Предыдущая</button>
    <button @click="goToPage(currentPage + 1)">Следующая</button>
    <button @click="goToPage(totalPages)">Последняя</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :pagination="true"
    :paginationPageSize="10"
    :paginationPageSizeSelector="[5, 10, 20]"
    :animateRows="true"
    @grid-ready="onGridReady"
    @first-data-rendered="onFirstDataRendered"
    @pagination-changed="onPaginationChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent, FirstDataRenderedEvent, PaginationChangedEvent } from 'ag-grid-community'

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

const STORAGE_KEY = 'ag-grid-demo-current-page'

const rowData = ref(
  Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: \`Сотрудник \${i + 1}\`,
    age: 20 + (i % 30),
    salary: 50000 + (i * 1000),
  }))
)

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Имя' },
  { field: 'age', headerName: 'Возраст', filter: 'agNumberColumnFilter' },
  {
    field: 'salary',
    headerName: 'Зарплата',
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : '',
  },
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
})

let gridApi: GridApi | null = null
let currentPage = 1
let totalPages = 1
let isFirstPaginationEvent = true // флаг для первого события после монтирования

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }

  isFirstPaginationEvent = true
}

function onFirstDataRendered(event: FirstDataRenderedEvent) {
  const savedPage = Number(localStorage.getItem(STORAGE_KEY))
  if (savedPage > 1) {
    event.api.paginationGoToPage(savedPage - 1)
  }
}

function onPaginationChanged(event: PaginationChangedEvent) {
  const api = event.api
  currentPage = api.paginationGetCurrentPage() + 1
  totalPages = api.paginationGetTotalPages()

  // Пропускаем первое событие (при инициализации или восстановлении страницы)
  if (isFirstPaginationEvent) {
    isFirstPaginationEvent = false
    return
  }

  // Логируем только когда страница реально изменилась (клик по встроенным или внешним кнопкам)
  if (event.newPage) {
    localStorage.setItem(STORAGE_KEY, String(currentPage))
    emit('log', \`Страница \${currentPage} из \${totalPages}\`)
  }
}

function goToPage(page: number) {
  if (!gridApi) return
  if (page < 1 || page > totalPages) return
  gridApi.paginationGoToPage(page - 1)
  emit('log', \`Переход на страницу \${page}\`)
}
<\/script>

<style scoped>
.controls {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
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
`,V="Pagination",B="Пагинация в Community: переключение страниц, выбор размера, события pagination-changed.",Y=C({__name:"Example12",setup(G){const l=b([]);function t(a){l.value.push(`[${new Date().toLocaleTimeString()}] ${a}`)}return(a,m)=>(D(),N(T,{title:V,description:B,code:r(O),language:"html",onLog:t},{console:P(()=>[f(w,{logs:l.value},null,8,["logs"])]),default:P(()=>[f(I,{onLog:t})]),_:1},8,["code"]))}});export{Y as default};
