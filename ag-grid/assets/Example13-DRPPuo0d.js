import{A as w,E as D,C as N}from"./main.esm-DqBob0QU.js";import{d as s,i as C,o as m,c as h,q as x,b as d,u as f,F as _,r as c,s as l,_ as R,e as E,w as r}from"./index-CwHQ-y8K.js";const G=s({__name:"Example13.demo",emits:["log"],setup(u,{emit:o}){const a=o,t=C("onGridReady"),i=c([{id:1,firstName:"Иван",lastName:"Петров",age:32},{id:2,firstName:"Мария",lastName:"Сидорова",age:27},{id:3,firstName:"Алексей",lastName:"Козлов",age:41}]),b=l([{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя",editable:!0},{field:"lastName",headerName:"Фамилия",editable:!0},{field:"age",headerName:"Возраст",editable:!0}]),p=l({sortable:!0,resizable:!0,filter:!0,editable:!0});function g(e){e.api,e.api.sizeColumnsToFit(),t&&t()}function k(e){const n=e.event.key,y=e.column.getColId(),v=e.rowIndex;n==="Enter"?a("log",`Редактирование ячейки (${y}, строка ${v})`):n.startsWith("Arrow")?a("log",`Навигация клавишей ${n}`):n==="Tab"&&a("log","Переход Tab")}return(e,n)=>(m(),h(_,null,[n[0]||(n[0]=x('<div class="instructions" data-v-388a4157><p data-v-388a4157>Используйте клавиши <kbd data-v-388a4157>↑</kbd> <kbd data-v-388a4157>↓</kbd> <kbd data-v-388a4157>←</kbd> <kbd data-v-388a4157>→</kbd> для навигации, <kbd data-v-388a4157>Enter</kbd> для редактирования, <kbd data-v-388a4157>Tab</kbd> для перехода между ячейками.</p></div>',1)),d(f(w),{style:{flex:"1",width:"100%"},rowData:i.value,columnDefs:b.value,defaultColDef:p.value,animateRows:!0,onGridReady:g,onCellKeyDown:k},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),I=R(G,[["__scopeId","data-v-388a4157"]]),A=`<template>
  <div class="instructions">
    <p>Используйте клавиши <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> для навигации, <kbd>Enter</kbd> для редактирования, <kbd>Tab</kbd> для перехода между ячейками.</p>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :animateRows="true"
    @grid-ready="onGridReady"
    @cell-key-down="onCellKeyDown"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import type { ColDef, GridApi, GridReadyEvent, CellKeyDownEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

const rowData = ref([
  { id: 1, firstName: 'Иван', lastName: 'Петров', age: 32 },
  { id: 2, firstName: 'Мария', lastName: 'Сидорова', age: 27 },
  { id: 3, firstName: 'Алексей', lastName: 'Козлов', age: 41 }
])

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя', editable: true },
  { field: 'lastName', headerName: 'Фамилия', editable: true },
  { field: 'age', headerName: 'Возраст', editable: true }
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
  editable: true
})

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

function onCellKeyDown(event: CellKeyDownEvent) {
  const key = (event.event as KeyboardEvent).key
  const colId = event.column.getColId()
  const rowIndex = event.rowIndex

  if (key === 'Enter') {
    emit('log', \`Редактирование ячейки (\${colId}, строка \${rowIndex})\`)
  } else if (key.startsWith('Arrow')) {
    emit('log', \`Навигация клавишей \${key}\`)
  } else if (key === 'Tab') {
    emit('log', 'Переход Tab')
  }
}
<\/script>

<style scoped>
.instructions {
  margin-bottom: 12px;
  color: #475569;
  font-size: 14px;
}
.instructions kbd {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 2px 6px;
  font-family: monospace;
}
</style>
`,T="Keyboard Navigation",$="Навигация с клавиатуры: стрелки, Tab, Enter для редактирования.",V=s({__name:"Example13",setup(u){const o=c([]);function a(t){o.value.push(`[${new Date().toLocaleTimeString()}] ${t}`)}return(t,i)=>(m(),E(D,{title:T,description:$,code:f(A),language:"html",onLog:a},{console:r(()=>[d(N,{logs:o.value},null,8,["logs"])]),default:r(()=>[d(I,{onLog:a})]),_:1},8,["code"]))}});export{V as default};
