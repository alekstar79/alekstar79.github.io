import{A as D,E as R,C as _}from"./main.esm-DqBob0QU.js";import{d as m,i as k,o as f,c as A,a as o,b as i,u as p,F as G,r as g,s as d,_ as E,e as V,w as u}from"./index-CwHQ-y8K.js";const $=m({__name:"Example5.demo",emits:["log"],setup(h,{emit:a}){const t=a,l=k("onGridReady"),r=g([{id:1,firstName:"Иван",lastName:"Петров",status:"active"},{id:2,firstName:"Мария",lastName:"Сидорова",status:"fired"},{id:3,firstName:"Алексей",lastName:"Козлов",status:"active"},{id:4,firstName:"Елена",lastName:"Иванова",status:"active"}]),C=d([{headerName:"",width:50,checkboxSelection:!0,headerCheckboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,suppressSizeToFit:!0},{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя"},{field:"lastName",headerName:"Фамилия"},{field:"status",headerName:"Статус"}]),N=d({sortable:!0,resizable:!0,filter:!0});let e=null;function w(n){e=n.api,n.api.sizeColumnsToFit(),l&&l()}function S(){e==null||e.selectAll(),t("log","Выбраны все строки")}function b(){e==null||e.deselectAll(),t("log","Выделение снято")}function v(){const n=(e==null?void 0:e.getSelectedRows())??[];if(n.length===0)t("log","Ни одна строка не выбрана");else{const s=n.map(c=>`${c.firstName} ${c.lastName}`).join(", ");t("log",`Выбраны строки: ${s}`)}}function x(n){const s=n.api.getSelectedRows().length;t("log",`Выделение изменено: выбрано ${s} строк(а)`)}function y(){e==null||e.exportDataAsCsv({fileName:"employees.csv",allColumns:!0,onlySelected:!1}),t("log","Экспорт CSV выполнен (все строки)")}return(n,s)=>(f(),A(G,null,[o("div",{class:"controls"},[o("button",{onClick:S},"Выбрать все"),o("button",{onClick:b},"Снять выделение"),o("button",{onClick:y},"Экспорт CSV"),o("button",{onClick:v},"Показать выбранные")]),i(p(D),{style:{flex:"1",width:"100%"},rowData:r.value,columnDefs:C.value,defaultColDef:N.value,rowSelection:"multiple",animateRows:!0,onGridReady:w,onSelectionChanged:x},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),F=E($,[["__scopeId","data-v-e614ab9b"]]),z=`<template>
  <div class="controls">
    <button @click="selectAll">Выбрать все</button>
    <button @click="deselectAll">Снять выделение</button>
    <button @click="exportCSV">Экспорт CSV</button>
    <button @click="logSelectedRows">Показать выбранные</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    :animateRows="true"
    @grid-ready="onGridReady"
    @selection-changed="onSelectionChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import type { ColDef, GridApi, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Employee { id: number; firstName: string; lastName: string; status: 'active' | 'fired' }

const rowData = ref<Employee[]>([
  { id: 1, firstName: 'Иван', lastName: 'Петров', status: 'active' },
  { id: 2, firstName: 'Мария', lastName: 'Сидорова', status: 'fired' },
  { id: 3, firstName: 'Алексей', lastName: 'Козлов', status: 'active' },
  { id: 4, firstName: 'Елена', lastName: 'Иванова', status: 'active' },
])

const columnDefs = shallowRef<ColDef[]>([
  {
    headerName: '',
    width: 50,
    checkboxSelection: true,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    suppressSizeToFit: true
  },
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя' },
  { field: 'lastName', headerName: 'Фамилия' },
  { field: 'status', headerName: 'Статус' },
])

const defaultColDef = shallowRef<ColDef>({ sortable: true, resizable: true, filter: true })

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

function selectAll() {
  gridApi?.selectAll()
  emit('log', 'Выбраны все строки')
}

function deselectAll() {
  gridApi?.deselectAll()
  emit('log', 'Выделение снято')
}

function logSelectedRows() {
  const selected = gridApi?.getSelectedRows() ?? []
  if (selected.length === 0) {
    emit('log', 'Ни одна строка не выбрана')
  } else {
    const names = selected.map((row: Employee) => \`\${row.firstName} \${row.lastName}\`).join(', ')
    emit('log', \`Выбраны строки: \${names}\`)
  }
}

function onSelectionChanged(event: SelectionChangedEvent) {
  const count = event.api.getSelectedRows().length
  emit('log', \`Выделение изменено: выбрано \${count} строк(а)\`)
}

function exportCSV() {
  gridApi?.exportDataAsCsv({
    fileName: 'employees.csv',
    allColumns: true,
    onlySelected: false
  })
  emit('log', 'Экспорт CSV выполнен (все строки)')
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
</style>
`,j="Selection и экспорт",T="Демонстрация множественного выбора строк, работы с выделением и экспорта данных в CSV.",I=m({__name:"Example5",setup(h){const a=g([]);function t(l){a.value.push(`[${new Date().toLocaleTimeString()}] ${l}`)}return(l,r)=>(f(),V(R,{title:j,description:T,code:p(z),language:"html",onLog:t},{console:u(()=>[i(_,{logs:a.value},null,8,["logs"])]),default:u(()=>[i(F,{onLog:t})]),_:1},8,["code"]))}});export{I as default};
