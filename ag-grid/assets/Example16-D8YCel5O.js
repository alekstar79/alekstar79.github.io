import{A as G,E as y,C as v}from"./main.esm-DqBob0QU.js";import{d as i,i as I,o as s,e as u,u as m,r as f,s as o,w as d,b as l}from"./index-CwHQ-y8K.js";const x=i({__name:"Example16.demo",emits:["log"],setup(c,{emit:a}){const r=a,n=I("onGridReady"),t=f([{id:1,name:"Иван Петров",orders:[{orderId:"A-1",amount:1200},{orderId:"A-2",amount:800}]},{id:2,name:"Мария Сидорова",orders:[{orderId:"B-1",amount:2500}]},{id:3,name:"Алексей Козлов",orders:[{orderId:"C-1",amount:300},{orderId:"C-2",amount:450}]}]),p=o([{field:"id",headerName:"ID",width:80,cellRenderer:"agGroupCellRenderer"},{field:"name",headerName:"Клиент"}]),g=o({sortable:!0,resizable:!0,filter:!0,flex:1}),R={masterDetail:!0,isRowMaster:e=>e&&e.orders&&e.orders.length>0},D={detailGridOptions:{columnDefs:[{field:"orderId",headerName:"Заказ",width:150},{field:"amount",headerName:"Сумма",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}],defaultColDef:{sortable:!0,flex:1}},getDetailRowData:e=>{e.successCallback(e.data.orders)}};function C(e){return String(e.data.id)}function w(e){e.api,e.api.sizeColumnsToFit(),n&&n()}function h(e){r("log",`Раскрыт клиент: ${e.data.name}`)}return(e,b)=>(s(),u(m(G),{style:{flex:"1",width:"100%"},rowData:t.value,columnDefs:p.value,defaultColDef:g.value,gridOptions:R,detailRowHeight:200,detailCellRendererParams:D,getRowId:C,animateRows:!0,onGridReady:w,onMasterDetailExpanded:h},null,8,["rowData","columnDefs","defaultColDef"]))}}),_=`<template>
  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :gridOptions="gridOptions"
    :detailRowHeight="200"
    :detailCellRendererParams="detailCellRendererParams"
    :getRowId="getRowId"
    :animateRows="true"
    @grid-ready="onGridReady"
    @master-detail-expanded="onMasterDetailExpanded"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import type { ColDef, GridApi, GridReadyEvent, GridOptions } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'

/**
 * Enterprise: Master/Detail
 * Каждая строка — клиент. Нажмите на иконку ">" слева от строки,
 * чтобы раскрыть детальную таблицу с заказами клиента.
 * Демонстрирует masterDetail, detailCellRendererParams, isRowMaster.
 * Важно: первый столбец использует cellRenderer: 'agGroupCellRenderer'
 * для отображения иконки разворачивания.
 */

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Order {
  orderId: string
  amount: number
}

interface Customer {
  id: number
  name: string
  orders: Order[]
}

const rowData = ref<Customer[]>([
  {
    id: 1,
    name: 'Иван Петров',
    orders: [{ orderId: 'A-1', amount: 1200 }, { orderId: 'A-2', amount: 800 }]
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    orders: [{ orderId: 'B-1', amount: 2500 }]
  },
  {
    id: 3,
    name: 'Алексей Козлов',
    orders: [{ orderId: 'C-1', amount: 300 }, { orderId: 'C-2', amount: 450 }]
  }
])

const columnDefs = shallowRef<ColDef[]>([
  // без agGroupCellRenderer иконка ">" не появится
  { field: 'id', headerName: 'ID', width: 80, cellRenderer: 'agGroupCellRenderer' },
  { field: 'name', headerName: 'Клиент' },
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
  flex: 1,
})

// В v31.3.4 masterDetail и isRowMaster задаются внутри gridOptions
const gridOptions: GridOptions = {
  masterDetail: true,
  isRowMaster: (data: any) => {
    return data && data.orders && data.orders.length > 0
  }
}

const detailCellRendererParams = {
  detailGridOptions: {
    columnDefs: [
      { field: 'orderId', headerName: 'Заказ', width: 150 },
      {
        field: 'amount',
        headerName: 'Сумма',
        valueFormatter: (p: any) => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : ''
      }
    ],
    defaultColDef: { sortable: true, flex: 1 }
  },
  getDetailRowData: (params: any) => {
    params.successCallback(params.data.orders)
  }
}

function getRowId(params: any) {
  return String(params.data.id)
}

let gridApi: GridApi | null = null

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  if (onGridReadyHandler) {
    onGridReadyHandler()
  }
}

function onMasterDetailExpanded(event: any) {
  emit('log', \`Раскрыт клиент: \${event.data.name}\`)
}
<\/script>
`,A="Мастер/Детали",O='Каждая строка — клиент, при нажатии на иконку ">" раскрывается детальная таблица с его заказами.',M=i({__name:"Example16",setup(c){const a=f([]);function r(n){a.value.push(`[${new Date().toLocaleTimeString()}] ${n}`)}return(n,t)=>(s(),u(y,{title:A,description:O,code:m(_),language:"html",onLog:r},{console:d(()=>[l(v,{logs:a.value},null,8,["logs"])]),default:d(()=>[l(x,{onLog:r})]),_:1},8,["code"]))}});export{M as default};
