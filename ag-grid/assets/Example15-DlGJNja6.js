import{A as G,E as h,C}from"./main.esm-DqBob0QU.js";import{d,i as R,o as s,e as m,u as p,r as f,s as t,w as u,b as l}from"./index-CwHQ-y8K.js";const _=d({__name:"Example15.demo",emits:["log"],setup(c,{emit:o}){const r=o,n=R("onGridReady"),i=f([{id:1,region:"Север",year:2022,revenue:12e4},{id:2,region:"Юг",year:2022,revenue:95e3},{id:3,region:"Север",year:2023,revenue:145e3},{id:4,region:"Запад",year:2022,revenue:81e3},{id:5,region:"Юг",year:2023,revenue:102e3},{id:6,region:"Запад",year:2023,revenue:99e3}]),g=t([{field:"id",headerName:"ID",width:80},{field:"region",headerName:"Регион",rowGroup:!0,hide:!0},{field:"year",headerName:"Год",width:100},{field:"revenue",headerName:"Выручка",aggFunc:"sum",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}]),v=t({sortable:!0,resizable:!0,filter:!0,flex:1}),y=t({headerName:"Группа",minWidth:200});function D(e){e.api,e.api.sizeColumnsToFit(),n&&n()}function w(e){const{node:a}=e;r("log",`Группа ${a.key} ${a.expanded?"раскрыта":"свёрнута"}`)}return(e,a)=>(s(),m(p(G),{style:{flex:"1",width:"100%"},rowData:i.value,columnDefs:g.value,defaultColDef:v.value,autoGroupColumnDef:y.value,groupDisplayType:"multipleColumns",animateRows:!0,onGridReady:D,onRowGroupOpened:w},null,8,["rowData","columnDefs","defaultColDef","autoGroupColumnDef"]))}}),x=`<template>
  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :autoGroupColumnDef="autoGroupColumnDef"
    :groupDisplayType="'multipleColumns'"
    :animateRows="true"
    @grid-ready="onGridReady"
    @row-group-opened="onRowGroupOpened"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import type { ColDef, GridApi, GridReadyEvent, RowGroupOpenedEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

/**
 * Enterprise: Row Grouping & Aggregation
 * Группировка по региону, агрегация сумм продаж.
 * Демонстрирует autoGroupColumnDef, rowGroup, aggFunc.
 * Логируется раскрытие/сворачивание групп.
 */

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Sale {
  id: number
  region: string
  year: number
  revenue: number
}

const rowData = ref<Sale[]>([
  { id: 1, region: 'Север', year: 2022, revenue: 120000 },
  { id: 2, region: 'Юг', year: 2022, revenue: 95000 },
  { id: 3, region: 'Север', year: 2023, revenue: 145000 },
  { id: 4, region: 'Запад', year: 2022, revenue: 81000 },
  { id: 5, region: 'Юг', year: 2023, revenue: 102000 },
  { id: 6, region: 'Запад', year: 2023, revenue: 99000 }
])

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'region', headerName: 'Регион', rowGroup: true, hide: true },
  { field: 'year', headerName: 'Год', width: 100 },
  {
    field: 'revenue',
    headerName: 'Выручка',
    aggFunc: 'sum',
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : ''
  }
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
  flex: 1
})

const autoGroupColumnDef = shallowRef<ColDef>({
  headerName: 'Группа',
  minWidth: 200
})

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

function onRowGroupOpened(event: RowGroupOpenedEvent) {
  const { node } = event
  emit('log', \`Группа \${node.key} \${node.expanded ? 'раскрыта' : 'свёрнута'}\`)
}
<\/script>
`,N="Группировка и агрегация",E="Демонстрация группировки строк по региону и агрегации выручки с помощью функции sum.",b=d({__name:"Example15",setup(c){const o=f([]);function r(n){o.value.push(`[${new Date().toLocaleTimeString()}] ${n}`)}return(n,i)=>(s(),m(h,{title:N,description:E,code:p(x),language:"html",onLog:r},{console:u(()=>[l(C,{logs:o.value},null,8,["logs"])]),default:u(()=>[l(_,{onLog:r})]),_:1},8,["code"]))}});export{b as default};
