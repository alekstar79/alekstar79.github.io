import{C as A}from"./ConsoleOutput-q6McdQfj.js";import{A as G,E as I}from"./main.esm-ZSTnD18R.js";import{d as w,i as T,o as y,b as k,e as d,a as m,u as R,F as E,r as h,s as f,_ as M,c as L,w as g}from"./index-Bc4Mc_9k.js";const F=w({__name:"Example8.demo",emits:["log"],setup(v,{emit:u}){const a=u,s=T("onGridReady"),o=h([{id:1,firstName:"Иван",salary:1e5},{id:2,firstName:"Мария",salary:15e4},{id:3,firstName:"Алексей",salary:2e5}]);let p=4;const S=f([{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя"},{field:"salary",headerName:"Зарплата",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}]),D=f({sortable:!0,resizable:!0,filter:!0});function N(e){return String(e.data.id)}let n=null;function $(e){n=e.api,e.api.sizeColumnsToFit(),s&&s()}function b(){if(!n)return;const e={id:p++,firstName:`Новый ${p-1}`,salary:Math.round(Math.random()*1e5+5e4)};o.value=[...o.value,e],n.applyTransaction({add:[e]}),a("log",`Добавлена строка #${e.id}: ${e.firstName}, зарплата ${e.salary}`)}function x(){if(!n)return;const e=n.getSelectedRows();if(!e.length){a("log","Нет выбранных строк для обновления");return}const r=e.map(t=>{let i=t.firstName;i.includes("(ред)")||(i=`${i} (ред)`);const c=Math.round(t.salary*(.8+Math.random()*.4));return{...t,firstName:i,salary:c}}),l=new Set(r.map(t=>t.id));o.value=o.value.map(t=>l.has(t.id)?r.find(i=>i.id===t.id):t),n.applyTransaction({update:r}),a("log",`Обновлено ${r.length} строк(и)`)}function C(){if(!n)return;const e=n.getSelectedRows();if(!e.length){a("log","Нет выбранных строк для удаления");return}const r=new Set(e.map(l=>l.id));o.value=o.value.filter(l=>!r.has(l.id)),n.applyTransaction({remove:e}),a("log",`Удалено ${e.length} строк(и)`)}function _(){if(!n)return;const e=n.getDisplayedRowCount(),r=n.getSelectedRows().length,l=o.value.reduce((i,c)=>i+c.salary,0),t=e?Math.round(l/e):0;a("log",`📊 Всего строк: ${e}, выбрано: ${r}`),a("log",`💰 Сумма зарплат: ${l.toLocaleString("ru-RU")} ₽, средняя: ${t.toLocaleString("ru-RU")} ₽`)}return(e,r)=>(y(),k(E,null,[d("div",{class:"controls"},[d("button",{onClick:b},"➕ Добавить"),d("button",{onClick:x},"✏️ Обновить выбранного"),d("button",{onClick:C},"🗑️ Удалить выбранных"),d("button",{onClick:_},"📊 Показать информацию")]),m(R(G),{style:{flex:"1",width:"100%"},rowData:o.value,columnDefs:S.value,defaultColDef:D.value,getRowId:N,rowSelection:"multiple",animateRows:!0,onGridReady:$},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),U=M(F,[["__scopeId","data-v-29497b1d"]]),V=`<template>
  <div class="controls">
    <button @click="addRow">➕ Добавить</button>
    <button @click="updateSelected">✏️ Обновить выбранного</button>
    <button @click="removeSelected">🗑️ Удалить выбранных</button>
    <button @click="showInfo">📊 Показать информацию</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :getRowId="getRowId"
    rowSelection="multiple"
    :animateRows="true"
    @grid-ready="onGridReady"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community'

/**
 * Назначение: показывает, как использовать applyTransaction для точечного добавления,
 * удаления и обновления строк без полной перерисовки всей таблицы. Это критически важно
 * для производительности при работе с большими объёмами данных (сотни тысяч строк),
 * так как перерисовка всей таблицы при каждом изменении вызывает лаги. Транзакции обновляют
 * только изменённые строки.
 */

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Employee {
  id: number
  firstName: string
  salary: number
}

const rowData = ref<Employee[]>([
  { id: 1, firstName: 'Иван', salary: 100000 },
  { id: 2, firstName: 'Мария', salary: 150000 },
  { id: 3, firstName: 'Алексей', salary: 200000 },
])

let nextId = 4

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя' },
  {
    field: 'salary',
    headerName: 'Зарплата',
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : ''
  }
])

const defaultColDef = shallowRef<ColDef>({ sortable: true, resizable: true, filter: true })

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

function addRow() {
  if (!gridApi) return

  const newRow: Employee = {
    id: nextId++,
    firstName: \`Новый \${nextId - 1}\`,
    salary: Math.round(Math.random() * 100000 + 50000)
  }

  rowData.value = [...rowData.value, newRow]
  gridApi.applyTransaction({ add: [newRow] })
  emit('log', \`Добавлена строка #\${newRow.id}: \${newRow.firstName}, зарплата \${newRow.salary}\`)
}

function updateSelected() {
  if (!gridApi) return

  const selected = gridApi.getSelectedRows() as Employee[]
  if (!selected.length) {
    emit('log', 'Нет выбранных строк для обновления')
    return
  }

  const updated = selected.map(row => {
    // Добавляем "(ред)" только если его ещё нет
    let newName = row.firstName
    if (!newName.includes('(ред)')) {
      newName = \`\${newName} (ред)\`
    }
    // Меняем зарплату случайным образом
    const newSalary = Math.round(row.salary * (0.8 + Math.random() * 0.4))
    return { ...row, firstName: newName, salary: newSalary }
  })

  // Обновляем rowData
  const ids = new Set(updated.map(r => r.id))
  rowData.value = rowData.value.map(r => ids.has(r.id) ? updated.find(u => u.id === r.id)! : r)
  gridApi.applyTransaction({ update: updated })
  emit('log', \`Обновлено \${updated.length} строк(и)\`)
}

function removeSelected() {
  if (!gridApi) return

  const selected = gridApi.getSelectedRows() as Employee[]
  if (!selected.length) {
    emit('log', 'Нет выбранных строк для удаления')
    return
  }

  const idsToRemove = new Set(selected.map(r => r.id))
  rowData.value = rowData.value.filter(r => !idsToRemove.has(r.id))
  gridApi.applyTransaction({ remove: selected })
  emit('log', \`Удалено \${selected.length} строк(и)\`)
}

function showInfo() {
  if (!gridApi) return

  const totalRows = gridApi.getDisplayedRowCount()
  const selectedRows = gridApi.getSelectedRows().length
  const totalSalary = rowData.value.reduce((sum, r) => sum + r.salary, 0)
  const avgSalary = totalRows ? Math.round(totalSalary / totalRows) : 0
  emit('log', \`📊 Всего строк: \${totalRows}, выбрано: \${selectedRows}\`)
  emit('log', \`💰 Сумма зарплат: \${totalSalary.toLocaleString('ru-RU')} ₽, средняя: \${avgSalary.toLocaleString('ru-RU')} ₽\`)
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
`,z="Транзакции (производительность)",B="Вместо полной перерисовки таблицы при каждом изменении, транзакции (applyTransaction) обновляют только изменённые строки. Это критически важно для производительности при работе с большими объёмами данных (сотни тысяч строк).",P=w({__name:"Example8",setup(v){const u=h([]);function a(s){u.value.push(`[${new Date().toLocaleTimeString()}] ${s}`)}return(s,o)=>(y(),L(I,{title:z,description:B,code:R(V),language:"html",onLog:a},{console:g(()=>[m(A,{logs:u.value},null,8,["logs"])]),default:g(()=>[m(U,{onLog:a})]),_:1},8,["code"]))}});export{P as default};
