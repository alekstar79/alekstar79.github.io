import{C as w}from"./ConsoleOutput-q6McdQfj.js";import{A as D,E as R}from"./main.esm-ZSTnD18R.js";import{d as N,o as b,b as F,e as a,f as _,h,r as f,i as k,s as A,m as G,a as y,u as x,F as $,_ as E,c as M,w as C}from"./index-Bc4Mc_9k.js";const V={class:"my-age-filter"},P={class:"my-age-filter__row"},S={class:"my-age-filter__field"},z={class:"my-age-filter__field"},I=N({__name:"AgeRangeFilter",props:{params:{}},setup(g,{expose:s}){const r=g,t=f(null),l=f(null);function u(){r.params.filterChangedCallback()}function d(){return t.value!=null||l.value!=null}function o(e){var i;const n=(i=e.data)==null?void 0:i.age;return typeof n!="number"||t.value!=null&&n<t.value?!1:!(l.value!=null&&n>l.value)}function c(){if(d())return{minAge:t.value,maxAge:l.value}}function m(e){t.value=(e==null?void 0:e.minAge)??null,l.value=(e==null?void 0:e.maxAge)??null}function p(){const e=document.querySelector(".my-age-filter-min");e==null||e.focus()}function v(){t.value=null,l.value=null,r.params.filterChangedCallback()}return s({isFilterActive:d,doesFilterPass:o,getModel:c,setModel:m,afterGuiAttached:p}),(e,n)=>(b(),F("div",V,[n[4]||(n[4]=a("div",{class:"my-age-filter__title"},"Возраст от/до",-1)),a("div",P,[a("div",S,[n[2]||(n[2]=a("label",null,"От",-1)),_(a("input",{type:"number",class:"my-age-filter-min my-age-filter__input","onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i),onInput:u,placeholder:"Мин"},null,544),[[h,t.value,void 0,{number:!0}]])]),a("div",z,[n[3]||(n[3]=a("label",null,"До",-1)),_(a("input",{type:"number",class:"my-age-filter-max my-age-filter__input","onUpdate:modelValue":n[1]||(n[1]=i=>l.value=i),onInput:u,placeholder:"Макс"},null,544),[[h,l.value,void 0,{number:!0}]])])]),a("button",{class:"my-age-filter__reset",onClick:v},"Сбросить")]))}}),B={class:"controls"},H=N({__name:"Example10.demo",emits:["log"],setup(g,{emit:s}){const r=s,t=k("onGridReady"),l=f([{id:1,firstName:"Иван",lastName:"Петров",age:32,salary:22e4},{id:2,firstName:"Мария",lastName:"Сидорова",age:27,salary:18e4},{id:3,firstName:"Алексей",lastName:"Козлов",age:41,salary:25e4},{id:4,firstName:"Елена",lastName:"Иванова",age:35,salary:2e5},{id:5,firstName:"Дмитрий",lastName:"Смирнов",age:24,salary:15e4}]),u=A([{field:"id",headerName:"ID",width:80},{field:"firstName",headerName:"Имя"},{field:"lastName",headerName:"Фамилия"},{field:"age",headerName:"Возраст",filter:G(I),floatingFilter:!0},{field:"salary",headerName:"Зарплата",valueFormatter:e=>e.value?`${e.value.toLocaleString("ru-RU")} ₽`:""}]),d=A({sortable:!0,resizable:!0,filter:!0});let o=null;function c(e){o=e.api,e.api.sizeColumnsToFit(),t&&t()}function m(e,n){o&&(o.setFilterModel({age:{minAge:e,maxAge:n}}),r("log",`Применён пресет: возраст от ${e} до ${n}`))}function p(){o&&(o.setFilterModel(null),r("log","Кастомный фильтр сброшен"))}function v(e){const n=e.api.getFilterModel();r("log","Событие filterChanged. Текущая модель фильтров: "+JSON.stringify(n))}return(e,n)=>(b(),F($,null,[a("div",B,[a("button",{onClick:n[0]||(n[0]=i=>m(25,35))},"Возраст 25–35"),a("button",{onClick:n[1]||(n[1]=i=>m(40,100))},"Возраст 40+"),a("button",{onClick:p},"Сбросить фильтр")]),y(x(D),{style:{flex:"1",width:"100%"},rowData:l.value,columnDefs:u.value,defaultColDef:d.value,animateRows:!0,onGridReady:c,onFilterChanged:v},null,8,["rowData","columnDefs","defaultColDef"])],64))}}),L=E(H,[["__scopeId","data-v-c596440b"]]),T=`<template>
  <div class="controls">
    <button @click="applyPreset(25, 35)">Возраст 25–35</button>
    <button @click="applyPreset(40, 100)">Возраст 40+</button>
    <button @click="resetFilter">Сбросить фильтр</button>
  </div>

  <AgGridVue
    style="flex: 1; width: 100%;"
    :rowData="rowData"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :animateRows="true"
    @grid-ready="onGridReady"
    @filter-changed="onFilterChanged"
  />
</template>

<script setup lang="ts">
import { inject, ref, shallowRef, markRaw } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import type { ColDef, GridApi, GridReadyEvent, FilterChangedEvent } from 'ag-grid-community'
import AgeRangeFilter from '@/components/AgeRangeFilter.vue'

/**
 * Кастомный фильтр — Vue-компонент, реализующий интерфейс IFilter.
 * Здесь мы также используем программное управление фильтром:
 * кнопки пресетов устанавливают модель фильтра через gridApi.
 * Все действия логируются для понимания работы.
 */

const emit = defineEmits<{ (e: 'log', message: string): void }>()
const onGridReadyHandler = inject<() => void>('onGridReady')

interface Employee {
  id: number
  firstName: string
  lastName: string
  age: number
  salary: number
}

const rowData = ref<Employee[]>([
  { id: 1, firstName: 'Иван', lastName: 'Петров', age: 32, salary: 220000 },
  { id: 2, firstName: 'Мария', lastName: 'Сидорова', age: 27, salary: 180000 },
  { id: 3, firstName: 'Алексей', lastName: 'Козлов', age: 41, salary: 250000 },
  { id: 4, firstName: 'Елена', lastName: 'Иванова', age: 35, salary: 200000 },
  { id: 5, firstName: 'Дмитрий', lastName: 'Смирнов', age: 24, salary: 150000 }
])

const columnDefs = shallowRef<ColDef[]>([
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя' },
  { field: 'lastName', headerName: 'Фамилия' },
  {
    field: 'age',
    headerName: 'Возраст',
    filter: markRaw(AgeRangeFilter),
    floatingFilter: true,
  },
  {
    field: 'salary',
    headerName: 'Зарплата',
    valueFormatter: p => p.value ? \`\${p.value.toLocaleString('ru-RU')} ₽\` : ''
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

function applyPreset(min: number, max: number) {
  if (!gridApi) return

  gridApi.setFilterModel({
    age: { minAge: min, maxAge: max }
  })

  emit('log', \`Применён пресет: возраст от \${min} до \${max}\`)
}

function resetFilter() {
  if (!gridApi) return

  gridApi.setFilterModel(null)

  emit('log', 'Кастомный фильтр сброшен')
}

function onFilterChanged(event: FilterChangedEvent) {
  const model = event.api.getFilterModel()
  emit('log', 'Событие filterChanged. Текущая модель фильтров: ' + JSON.stringify(model))
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
  font-size: 14px;
}
.controls button:hover {
  background: #e2e8f0;
}
</style>
`,U="Кастомный фильтр",j="Vue-компонент фильтра по диапазону возраста. Показывает реализацию интерфейса IFilter: isFilterActive, doesFilterPass, getModel, setModel, afterGuiAttached. Используйте фильтр в колонке или пресеты сверху.",K=N({__name:"Example10",setup(g){const s=f([]);function r(t){s.value.push(`[${new Date().toLocaleTimeString()}] ${t}`)}return(t,l)=>(b(),M(R,{title:U,description:j,code:x(T),language:"html",onLog:r},{console:C(()=>[y(w,{logs:s.value},null,8,["logs"])]),default:C(()=>[y(L,{onLog:r})]),_:1},8,["code"]))}});export{K as default};
