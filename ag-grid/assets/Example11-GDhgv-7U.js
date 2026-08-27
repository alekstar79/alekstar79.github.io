import{A as I,E as S,C as V}from"./main.esm-DqBob0QU.js";import{d as E,r as f,j as k,o as i,c as u,a as r,F as $,k as G,l as b,t as x,p as A,g as B,i as H,s as y,m as P,e as N,u as R,w,b as D}from"./index-CwHQ-y8K.js";const T={class:"my-dept-editor"},j=["value"],z={key:0,class:"my-dept-editor__list"},F=["onClick"],L={class:"my-dept-editor__name"},M={key:0,class:"my-dept-editor__check"},q={key:1,class:"my-dept-editor__empty"},O=E({__name:"DepartmentEditor",props:{params:{}},setup(g,{expose:s}){const a=g,o=["IT","HR","Sales","Marketing","Finance"],l=f(a.params.value??""),c=f(""),p=B(()=>c.value?o.filter(t=>t.toLowerCase().includes(c.value.toLowerCase())):o);function C(t){c.value=t.target.value}function v(t){l.value=t,a.params.api.stopEditing()}function _(){return l.value}function h(){return!0}function e(){return!1}function d(){return l.value===""}return k(()=>{const t=document.querySelector(".my-dept-editor-search");t==null||t.focus()}),s({getValue:_,isPopup:h,isCancelBeforeStart:e,isCancelAfterEnd:d}),(t,n)=>(i(),u("div",T,[n[1]||(n[1]=r("div",{class:"my-dept-editor__header"},[r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#3b82f6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[r("path",{d:"M21 21l-4.35-4.35"}),r("circle",{cx:"11",cy:"11",r:"8"})]),r("span",null,"Выбор отдела")],-1)),r("input",{class:"my-dept-editor-search",value:c.value,onInput:C,placeholder:"Поиск..."},null,40,j),p.value.length?(i(),u("ul",z,[(i(!0),u($,null,G(p.value,m=>(i(),u("li",{key:m,onClick:W=>v(m),class:b({"my-dept-editor__item--selected":l.value===m})},[n[0]||(n[0]=r("span",{class:"my-dept-editor__icon"},"📁",-1)),r("span",L,x(m),1),l.value===m?(i(),u("span",M,"✓")):A("",!0)],10,F))),128))])):(i(),u("div",q,"Не найдено"))]))}}),J=E({__name:"Example11.demo",emits:["log"],setup(g,{emit:s}){const a=s,o=H("onGridReady"),l=f([{id:1,firstName:"Иван",department:"IT"},{id:2,firstName:"Мария",department:"HR"},{id:3,firstName:"Алексей",department:"Sales"}]),c=y([{field:"id",headerName:"ID",width:80,editable:!1},{field:"firstName",headerName:"Имя",editable:!0},{field:"department",headerName:"Отдел",editable:!0,cellEditor:P(O),cellEditorPopup:!0}]),p=y({sortable:!0,resizable:!0,filter:!0});function C(e){e.api,e.api.sizeColumnsToFit(),o&&o()}function v(e){var n;const d=e.data,t=(n=e.column)==null?void 0:n.getId();a("log",`Редактирование начато для строки ${d.firstName} (поле: ${t})`)}function _(e){var n;const d=e.data,t=(n=e.column)==null?void 0:n.getId();a("log",`Редактирование завершено для строки ${d.firstName} (поле: ${t})`)}function h(e){e.column.getColId()==="department"&&a("log",`Отдел сотрудника ${e.data.firstName} изменён: "${e.oldValue}" → "${e.newValue}"`)}return(e,d)=>(i(),N(R(I),{style:{flex:"1",width:"100%"},rowData:l.value,columnDefs:c.value,defaultColDef:p.value,animateRows:!0,onGridReady:C,onCellEditingStarted:v,onCellEditingStopped:_,onCellValueChanged:h},null,8,["rowData","columnDefs","defaultColDef"]))}}),K=`<template>
  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :animateRows="true"
    @grid-ready="onGridReady"
    @cell-editing-started="onCellEditingStarted"
    @cell-editing-stopped="onCellEditingStopped"
    @cell-value-changed="onCellValueChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef, markRaw } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent, CellValueChangedEvent, CellEditingStartedEvent, CellEditingStoppedEvent } from 'ag-grid-community'
import DepartmentEditor from '@/components/DepartmentEditor.vue'

/**
 * Кастомный cell editor — Vue-компонент для редактирования ячейки.
 * Используется для выбора отдела из списка с автодополнением.
 * Реализует методы getValue(), isPopup(), isCancelBeforeStart(), isCancelAfterEnd().
 */

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Employee {
  id: number
  firstName: string
  department: string
}

const rowData = ref<Employee[]>([
  { id: 1, firstName: 'Иван', department: 'IT' },
  { id: 2, firstName: 'Мария', department: 'HR' },
  { id: 3, firstName: 'Алексей', department: 'Sales' },
])

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80, editable: false },
  { field: 'firstName', headerName: 'Имя', editable: true },
  {
    field: 'department',
    headerName: 'Отдел',
    editable: true,
    cellEditor: markRaw(DepartmentEditor),
    cellEditorPopup: true
  }
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
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

function onCellEditingStarted(event: CellEditingStartedEvent) {
  const row = event.data
  const columnId = event.column?.getId()
  emit('log', \`Редактирование начато для строки \${row.firstName} (поле: \${columnId})\`)
}

function onCellEditingStopped(event: CellEditingStoppedEvent) {
  const row = event.data
  const columnId = event.column?.getId()
  emit('log', \`Редактирование завершено для строки \${row.firstName} (поле: \${columnId})\`)
}

function onCellValueChanged(event: CellValueChangedEvent) {
  const colId = event.column.getColId()
  if (colId === 'department') {
    emit('log', \`Отдел сотрудника \${event.data.firstName} изменён: "\${event.oldValue}" → "\${event.newValue}"\`)
  }
}
<\/script>
`,Q="Кастомный cell editor",U='Vue-компонент редактора ячейки с автодополнением. Реализует методы getValue, isPopup, isCancelBeforeStart, isCancelAfterEnd. Дважды кликните на колонку "Отдел", чтобы открыть редактирование.',Z=E({__name:"Example11",setup(g){const s=f([]);function a(o){s.value.push(`[${new Date().toLocaleTimeString()}] ${o}`)}return(o,l)=>(i(),N(S,{title:Q,description:U,code:R(K),language:"html",onLog:a},{console:w(()=>[D(V,{logs:s.value},null,8,["logs"])]),default:w(()=>[D(J,{onLog:a})]),_:1},8,["code"]))}});export{Z as default};
