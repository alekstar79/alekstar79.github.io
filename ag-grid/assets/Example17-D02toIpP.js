import{A as b,E as v,C as _}from"./main.esm-DqBob0QU.js";import{d as u,i as w,r as f,o as g,c as x,a as s,b as r,u as m,F as G,s as d,_ as S,e as A,w as c}from"./index-CwHQ-y8K.js";const N=u({__name:"Example17.demo",emits:["log"],setup(p,{emit:l}){const a=l,t=w("onGridReady"),i=f(Array.from({length:10},(e,o)=>({id:o+1,name:`Сотрудник ${o+1}`,age:20+o%30,salary:5e4+o*1e3}))),h=d([{field:"id",headerName:"ID",width:80},{field:"name",headerName:"Имя"},{field:"age",headerName:"Возраст",filter:"agNumberColumnFilter"},{field:"salary",headerName:"Зарплата",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}]),y=d({sortable:!0,resizable:!0,filter:!0,flex:1});let n=null;function R(e){n=e.api,e.api.sizeColumnsToFit(),t&&t()}function C(){const e=(n==null?void 0:n.getCellRanges())??[];e.length>0&&a("log",`Выделен диапазон ячеек (${e.length} диапазонов)`)}function D(){n&&(n.copySelectedRangeToClipboard(),a("log","Диапазон скопирован в буфер обмена"))}return(e,o)=>(g(),x(G,null,[s("div",{class:"controls"},[s("button",{onClick:D},"Копировать выделенное")]),r(m(b),{style:{flex:"1",width:"100%"},rowData:i.value,columnDefs:h.value,defaultColDef:y.value,enableRangeSelection:!0,animateRows:!0,onGridReady:R,onRangeSelectionChanged:C},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),E=S(N,[["__scopeId","data-v-bd12e152"]]),$=`<template>
  <div class="controls">
    <button @click="copySelection">Копировать выделенное</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :enableRangeSelection="true"
    :animateRows="true"
    @grid-ready="onGridReady"
    @range-selection-changed="onRangeSelectionChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import type { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

/**
 * Enterprise: Range Selection
 * Выделение прямоугольной области ячеек мышью.
 * Логируется изменение выделения. Кнопка копирует диапазон в буфер обмена.
 * Для v31.3.4 используется enableRangeSelection: true.
 */

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

const rowData = ref(
  Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: \`Сотрудник \${i + 1}\`,
    age: 20 + (i % 30),
    salary: 50000 + (i * 1000)
  }))
)

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Имя' },
  { field: 'age', headerName: 'Возраст', filter: 'agNumberColumnFilter' },
  {
    field: 'salary',
    headerName: 'Зарплата',
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : ''
  }
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
  flex: 1
})

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

// Событие для v31.3.4: range-selection-changed
function onRangeSelectionChanged() {
  const ranges = gridApi?.getCellRanges() ?? []

  if (ranges.length > 0) {
    emit('log', \`Выделен диапазон ячеек (\${ranges.length} диапазонов)\`)
  }
}

function copySelection() {
  if (!gridApi) return

  gridApi.copySelectedRangeToClipboard()
  emit('log', 'Диапазон скопирован в буфер обмена')
}
<\/script>

<style scoped>
.controls {
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
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
`,F="Выделение диапазона",k="Enterprise: выделение диапазона ячеек мышью и копирование в буфер. Нажмите кнопку для копирования.",z=u({__name:"Example17",setup(p){const l=f([]);function a(t){l.value.push(`[${new Date().toLocaleTimeString()}] ${t}`)}return(t,i)=>(g(),A(v,{title:F,description:k,code:m($),language:"html",onLog:a},{console:c(()=>[r(_,{logs:l.value},null,8,["logs"])]),default:c(()=>[r(E,{onLog:a})]),_:1},8,["code"]))}});export{z as default};
