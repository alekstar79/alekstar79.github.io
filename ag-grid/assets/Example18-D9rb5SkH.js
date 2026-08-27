import{A as v,E as y,C as h}from"./main.esm-DqBob0QU.js";import{d,i as D,o as s,e as f,u as m,r as p,s as i,w as l,b as u}from"./index-CwHQ-y8K.js";const w=d({__name:"Example18.demo",setup(c){const e=D("onGridReady"),r=p([{id:1,region:"North",year:2022,revenue:12e4},{id:2,region:"South",year:2022,revenue:95e3},{id:3,region:"North",year:2023,revenue:145e3},{id:4,region:"West",year:2022,revenue:81e3},{id:5,region:"South",year:2023,revenue:102e3},{id:6,region:"West",year:2023,revenue:99e3}]),o=i([{field:"id",headerName:"ID",width:80},{field:"region",headerName:"Регион",rowGroup:!0,hide:!0},{field:"year",headerName:"Год",pivot:!0,hide:!0},{field:"revenue",headerName:"Выручка",aggFunc:"sum",valueFormatter:n=>{var t;return`${(t=n.value)==null?void 0:t.toLocaleString("ru-RU")} ₽`}}]),a=i({sortable:!0,resizable:!0,filter:!0,flex:1});function g(n){n.api,n.api.sizeColumnsToFit(),e&&e()}return(n,t)=>(s(),f(m(v),{style:{flex:"1",width:"100%"},rowData:r.value,columnDefs:o.value,defaultColDef:a.value,pivotMode:!0,animateRows:!0,groupDisplayType:"multipleColumns",onGridReady:g},null,8,["rowData","columnDefs","defaultColDef"]))}}),R=`<template>
  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :pivotMode="true"
    :animateRows="true"
    :groupDisplayType="'multipleColumns'"
    @grid-ready="onGridReady"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import type { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

/**
 * Enterprise: Pivot
 * Сводная таблица: строки - регионы, столбцы - годы, значения - сумма выручки.
 */

// const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Sale {
  id: number
  region: string
  year: number
  revenue: number
}

const rowData = ref<Sale[]>([
  { id: 1, region: 'North', year: 2022, revenue: 120000 },
  { id: 2, region: 'South', year: 2022, revenue: 95000 },
  { id: 3, region: 'North', year: 2023, revenue: 145000 },
  { id: 4, region: 'West', year: 2022, revenue: 81000 },
  { id: 5, region: 'South', year: 2023, revenue: 102000 },
  { id: 6, region: 'West', year: 2023, revenue: 99000 }
])

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'region', headerName: 'Регион', rowGroup: true, hide: true },
  { field: 'year', headerName: 'Год', pivot: true, hide: true },
  {
    field: 'revenue',
    headerName: 'Выручка',
    aggFunc: 'sum',
    valueFormatter: p => \`\${p.value?.toLocaleString('ru-RU')} ₽\`
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
<\/script>
`,C="Сводная таблица (режим Pivot)",G="Enterprise: сводная таблица — регионы в строках, годы в столбцах, агрегация выручки.",x=d({__name:"Example18",setup(c){const e=p([]);function r(o){e.value.push(`[${new Date().toLocaleTimeString()}] ${o}`)}return(o,a)=>(s(),f(y,{title:C,description:G,code:m(R),language:"html",onLog:r},{console:l(()=>[u(h,{logs:e.value},null,8,["logs"])]),default:l(()=>[u(w,{onLog:r})]),_:1},8,["code"]))}});export{x as default};
