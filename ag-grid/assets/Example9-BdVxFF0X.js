import{A as B,E as q,C as T}from"./main.esm-CgUOTdan.js";import{d as b,i as z,o as D,e as _,u as I,s as y,w as R,b as v,r as V}from"./index-CvHQtGdr.js";const j=b({__name:"Example9.demo",emits:["log"],setup($,{emit:d}){const a=d,l=z("onGridReady"),c=Array.from({length:1e4},(e,t)=>({id:t+1,name:`Сотрудник ${t+1}`,age:20+t%50,salary:5e4+t%200*1e3})),M=y([{field:"id",headerName:"ID",width:90},{field:"name",headerName:"Имя"},{field:"age",headerName:"Возраст",filter:"agNumberColumnFilter"},{field:"salary",headerName:"Зарплата",filter:"agNumberColumnFilter",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}]),N=y({sortable:!0,resizable:!0,filter:!0});let u=null,L=0,r=!1;const E={getRows(e){const t=e.startRow,f=e.endRow,m=++L;r&&a("log",`[Запрос ${m}] Загрузка строк ${t}–${f}...`),setTimeout(()=>{var p,w;let n=[...c];const o=e.filterModel;if((p=o==null?void 0:o.age)!=null&&p.filter){const s=Number(o.age.filter);n=n.filter(i=>i.age>=s)}if((w=o==null?void 0:o.salary)!=null&&w.filter){const s=Number(o.salary.filter);n=n.filter(i=>i.salary>=s)}const g=e.sortModel;if(g.length>0){const{colId:s,sort:i}=g[0];n.sort((S,x)=>{const C=S[s]-x[s];return i==="asc"?C:-C})}const A=Math.min(f,n.length),h=n.slice(t,A);r&&a("log",`[Запрос ${m}] Отправлено ${h.length} строк (всего в БД: ${n.length})`),e.successCallback(h,n.length)},200)}};function F(e){u=e.api,e.api.sizeColumnsToFit(),r=(l==null?void 0:l())??!1,u.addEventListener("bodyScroll",()=>{r=!0})}function G(e){r=!0,a("log","Сортировка изменена, данные будут запрошены заново")}function k(e){r=!0,a("log","Фильтры изменены, данные будут запрошены заново")}return(e,t)=>(D(),_(I(B),{style:{flex:"1",width:"100%"},columnDefs:M.value,defaultColDef:N.value,rowModelType:"infinite",datasource:E,cacheBlockSize:100,maxBlocksInCache:10,rowBuffer:20,onGridReady:F,onSortChanged:G,onFilterChanged:k},null,8,["columnDefs","defaultColDef"]))}}),U=`<template>
  <AgGridVue
    style="flex: 1; width: 100%;"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    rowModelType="infinite"
    :datasource="datasource"
    :cacheBlockSize="100"
    :maxBlocksInCache="10"
    :rowBuffer="20"
    @grid-ready="onGridReady"
    @sort-changed="onSortChanged"
    @filter-changed="onFilterChanged"
  />
</template>

<script setup lang="ts">
import {inject, shallowRef} from 'vue'
import {AgGridVue} from 'ag-grid-vue3'
import type {
  ColDef,
  FilterChangedEvent,
  GridApi,
  GridReadyEvent,
  IDatasource,
  SortChangedEvent
} from 'ag-grid-community'

/**
 * Infinite Row Model — данные подгружаются блоками при прокрутке.
 * Сервер (эмуляция) получает startRow/endRow, sortModel и filterModel,
 * возвращает блок и общее количество строк.
 * В этом примере мы показываем каждый запрос к "серверу" в консоли.
 */

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => boolean>('onGridReady')

// Эмуляция базы данных: 10 000 записей
const allData = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: \`Сотрудник \${i + 1}\`,
  age: 20 + (i % 50),
  salary: 50000 + (i % 200) * 1000,
}))

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Имя' },
  { field: 'age', headerName: 'Возраст', filter: 'agNumberColumnFilter' },
  {
    field: 'salary',
    headerName: 'Зарплата',
    filter: 'agNumberColumnFilter',
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : ''
  }
])

const defaultColDef = shallowRef<ColDef>({
  sortable: true,
  resizable: true,
  filter: true,
})

let gridApi: GridApi | null = null
let requestId = 0
let shouldLog = false

const datasource: IDatasource = {
  getRows(params: any) {
    const startRow = params.startRow
    const endRow = params.endRow
    const reqId = ++requestId

    if (shouldLog) {
      emit('log', \`[Запрос \${reqId}] Загрузка строк \${startRow}–\${endRow}...\`)
    }

    setTimeout(() => {
      let data = [...allData]
      const filterModel = params.filterModel
      if (filterModel?.age?.filter) {
        const value = Number(filterModel.age.filter)
        data = data.filter(row => row.age >= value)
      }
      if (filterModel?.salary?.filter) {
        const value = Number(filterModel.salary.filter)
        data = data.filter(row => row.salary >= value)
      }

      const sortModel = params.sortModel
      if (sortModel.length > 0) {
        const { colId, sort } = sortModel[0]
        data.sort((a: any, b: any) => {
          const diff = a[colId] - b[colId]
          return sort === 'asc' ? diff : -diff
        })
      }

      const end = Math.min(endRow, data.length)
      const block = data.slice(startRow, end)

      if (shouldLog) {
        emit('log', \`[Запрос \${reqId}] Отправлено \${block.length} строк (всего в БД: \${data.length})\`)
      }

      params.successCallback(block, data.length)
    }, 200)
  }
}

function onGridReady(params: GridReadyEvent) {
  gridApi = params.api
  params.api.sizeColumnsToFit()

  // Используем возвращаемое значение родительского обработчика:
  // true при первом монтировании, false при последующих
  shouldLog = onGridReadyHandler?.() ?? false

  // Добавляем слушатель прокрутки: как только пользователь прокрутит, включаем логирование
  gridApi.addEventListener('bodyScroll', () => {
    shouldLog = true
  })
}

function onSortChanged(_: SortChangedEvent) {
  shouldLog = true
  emit('log', 'Сортировка изменена, данные будут запрошены заново')
}

function onFilterChanged(_: FilterChangedEvent) {
  shouldLog = true
  emit('log', 'Фильтры изменены, данные будут запрошены заново')
}
<\/script>
`,H="Infinite Row Model",O='Ленивая подгрузка данных блоками (Community). Эмуляция сервера с 10 000 строк: данные, сортировка и фильтрация обрабатываются на "сервере".',K=b({__name:"Example9",setup($){const d=V([]);function a(l){d.value.push(`[${new Date().toLocaleTimeString()}] ${l}`)}return(l,c)=>(D(),_(q,{title:H,description:O,code:I(U),language:"html",onLog:a},{console:R(()=>[v(T,{logs:d.value},null,8,["logs"])]),default:R(()=>[v(j,{onLog:a})]),_:1},8,["code"]))}});export{K as default};
