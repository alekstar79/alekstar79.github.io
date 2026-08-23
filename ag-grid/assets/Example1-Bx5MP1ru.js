import{A as l,E as f}from"./main.esm-ZSTnD18R.js";import{d as s,o as n,c as r,u as i,r as c,s as u,_ as d,w as p,a as h}from"./index-Bc4Mc_9k.js";const N=s({__name:"Example1.demo",setup(m){const e=c([{id:1,firstName:"Иван",lastName:"Петров",age:32,salary:22e4,status:"active",hired:"2021-03-01"},{id:2,firstName:"Мария",lastName:"Сидорова",age:27,salary:18e4,status:"fired",hired:"2022-07-15"},{id:3,firstName:"Алексей",lastName:"Козлов",age:41,salary:25e4,status:"active",hired:"2019-11-20"}]),a=u([{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя"},{field:"lastName",headerName:"Фамилия"},{field:"age",headerName:"Возраст"},{field:"salary",headerName:"Зарплата"},{field:"status",headerName:"Статус"},{field:"hired",headerName:"Дата приема"}]);function o(t){t.api.sizeColumnsToFit()}return(t,v)=>(n(),r(i(l),{style:{width:"100%",height:"100%"},rowData:e.value,columnDefs:a.value,animateRows:!0,onGridReady:o},null,8,["rowData","columnDefs"]))}}),g=d(N,[["__scopeId","data-v-6791eb29"]]),_=`<template>
  <AgGridVue
    style="width: 100%; height: 100%"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :animateRows="true"
    @grid-ready="onGridReady"
  />
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridReadyEvent } from 'ag-grid-community'

interface Employee {
  id: number
  firstName: string
  lastName: string
  age: number
  salary: number
  status: 'active' | 'fired'
  hired: string
}

const rowData = ref<Employee[]>([
  { id: 1, firstName: 'Иван', lastName: 'Петров', age: 32, salary: 220000, status: 'active', hired: '2021-03-01' },
  { id: 2, firstName: 'Мария', lastName: 'Сидорова', age: 27, salary: 180000, status: 'fired', hired: '2022-07-15' },
  { id: 3, firstName: 'Алексей', lastName: 'Козлов', age: 41, salary: 250000, status: 'active', hired: '2019-11-20' },
])

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя' },
  { field: 'lastName', headerName: 'Фамилия' },
  { field: 'age', headerName: 'Возраст' },
  { field: 'salary', headerName: 'Зарплата' },
  { field: 'status', headerName: 'Статус' },
  { field: 'hired', headerName: 'Дата приема' },
])

function onGridReady(params: GridReadyEvent) {
  params.api.sizeColumnsToFit()
}
<\/script>

<style scoped>
/* любые стили, если нужны */
</style>
`,y="Сотрудники",D="Пример базовой таблицы с данными сотрудников. Используются стандартные колонки с фильтрацией и сортировкой (включены по умолчанию в ag-grid).",w=s({__name:"Example1",setup(m){return(e,a)=>(n(),r(f,{title:y,description:D,code:i(_),language:"html"},{default:p(()=>[h(g)]),_:1},8,["code"]))}}),E=d(w,[["__scopeId","data-v-d022d1dd"]]);export{E as default};
