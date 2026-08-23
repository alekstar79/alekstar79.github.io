import{C as E}from"./ConsoleOutput-q6McdQfj.js";import{A as S,E as $}from"./main.esm-ZSTnD18R.js";import{d as s,o as d,b as u,t as A,n as G,g as c,i as V,s as h,m as C,e as v,a as m,u as w,F as k,r as R,_ as B,c as z,w as N}from"./index-Bc4Mc_9k.js";const I=s({__name:"StatusBadge",props:{params:{}},setup(i){const a=i,t=c(()=>a.params.value),n=c(()=>t.value==="active"?"#16a34a":"#dc2626"),o=c(()=>t.value==="active"?"Активен":"Уволен");return(p,f)=>(d(),u("span",{style:G({color:n.value,border:`1px solid ${n.value}`,borderRadius:"999px",padding:"0 6px",fontSize:"12px",lineHeight:"20px",display:"inline-block"})},A(o.value),5))}}),F=s({__name:"ActionCell",props:{params:{}},setup(i){const a=i;function t(){var o;const n=(o=a.params.context)==null?void 0:o.parent;n!=null&&n.onRowAction&&n.onRowAction(a.params.data)}return(n,o)=>(d(),u("button",{onClick:t},"Открыть"))}}),T=s({__name:"Example4.demo",emits:["log"],setup(i,{emit:a}){const t=a,n=V("onGridReady"),o=R([{id:1,firstName:"Иван",lastName:"Петров",age:32,salary:22e4,status:"active",hired:"2021-03-01"},{id:2,firstName:"Мария",lastName:"Сидорова",age:27,salary:18e4,status:"fired",hired:"2022-07-15"},{id:3,firstName:"Алексей",lastName:"Козлов",age:41,salary:25e4,status:"active",hired:"2019-11-20"}]),p={parent:{onRowAction:e=>t("log",`Открыт сотрудник: ${e.firstName} ${e.lastName}`)}},f=h([{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя",editable:!0},{field:"lastName",headerName:"Фамилия",editable:!0},{field:"age",headerName:"Возраст",editable:!0,cellEditor:"agNumberCellEditor"},{field:"status",headerName:"Статус",cellRenderer:C(I),editable:!0,cellEditor:"agSelectCellEditor",cellEditorParams:{values:["active","fired"]}},{headerName:"Действия",cellRenderer:C(F),pinned:"right",suppressSizeToFit:!0,width:100,minWidth:100,maxWidth:100}]),b=h({sortable:!0,resizable:!0,filter:!0});let r=null;function y(e){r=e.api,e.api.sizeColumnsToFit(),n&&n()}function _(e){const l=e.column.getColId();t("log",`Изменено поле "${l}": "${e.oldValue}" → "${e.newValue}"`)}function x(e){const l=e.api.getSelectedRows().length;t("log",`Выделение изменено: выбрано ${l} строк(а)`)}function D(){const e=(r==null?void 0:r.getSelectedRows())??[];if(e.length===0)t("log","Ни одна строка не выбрана");else{const l=e.map(g=>`${g.firstName} ${g.lastName}`).join(", ");t("log",`Выбраны строки: ${l}`)}}return(e,l)=>(d(),u(k,null,[v("div",{class:"controls"},[v("button",{onClick:D},"Показать выбранную строку")]),m(w(S),{style:{flex:"1",width:"100%"},rowData:o.value,columnDefs:f.value,defaultColDef:b.value,context:p,rowSelection:"single",animateRows:!0,onGridReady:y,onCellValueChanged:_,onSelectionChanged:x},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),j=B(T,[["__scopeId","data-v-3f466de7"]]),H=`<template>
  <div class="controls">
    <button @click="logSelected">Показать выбранную строку</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :context="context"
    rowSelection="single"
    :animateRows="true"
    @grid-ready="onGridReady"
    @cell-value-changed="onCellValueChanged"
    @selection-changed="onSelectionChanged"
  />
</template>

<script setup lang="ts">
import { ref, shallowRef, markRaw, inject } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent, CellValueChangedEvent, SelectionChangedEvent } from 'ag-grid-community'
import StatusBadge from '@/components/StatusBadge.vue'
import ActionCell from '@/components/ActionCell.vue'

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
])

const context = {
  parent: {
    onRowAction: (row: Employee) => emit('log', \`Открыт сотрудник: \${row.firstName} \${row.lastName}\`)
  }
}

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя', editable: true },
  { field: 'lastName', headerName: 'Фамилия', editable: true },
  { field: 'age', headerName: 'Возраст', editable: true, cellEditor: 'agNumberCellEditor' },
  {
    field: 'status',
    headerName: 'Статус',
    cellRenderer: markRaw(StatusBadge),
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: { values: ['active', 'fired'] }
  },
  {
    headerName: 'Действия',
    cellRenderer: markRaw(ActionCell),
    pinned: 'right',
    suppressSizeToFit: true,
    width: 100,
    minWidth: 100,
    maxWidth: 100
  }
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

function onCellValueChanged(event: CellValueChangedEvent) {
  const colId = event.column.getColId()
  emit('log', \`Изменено поле "\${colId}": "\${event.oldValue}" → "\${event.newValue}"\`)
}

function onSelectionChanged(event: SelectionChangedEvent) {
  const count = event.api.getSelectedRows().length
  emit('log', \`Выделение изменено: выбрано \${count} строк(а)\`)
}

function logSelected() {
  const selected = gridApi?.getSelectedRows() ?? []
  if (selected.length === 0) {
    emit('log', 'Ни одна строка не выбрана')
  } else {
    const names = selected.map((row: Employee) => \`\${row.firstName} \${row.lastName}\`).join(', ')
    emit('log', \`Выбраны строки: \${names}\`)
  }
}
<\/script>

<style scoped>
.controls {
  display: flex;
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

:deep(.ag-pinned-right-header) {
  border-left: none !important;
}
:deep(.ag-pinned-right-cols-container) {
  border-left: none !important;
}
</style>
`,W="Cell Renderer и Editor",P="Демонстрация кастомных рендереров (StatusBadge, ActionCell), редактирования ячеек и обработки события изменения.",J=s({__name:"Example4",setup(i){const a=R([]);function t(n){a.value.push(`[${new Date().toLocaleTimeString()}] ${n}`)}return(n,o)=>(d(),z($,{title:W,description:P,code:w(H),language:"html",onLog:t},{console:N(()=>[m(E,{logs:a.value},null,8,["logs"])]),default:N(()=>[m(j,{onLog:t})]),_:1},8,["code"]))}});export{J as default};
