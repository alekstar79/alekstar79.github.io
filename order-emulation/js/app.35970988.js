(function(){"use strict";var t={2258:function(t,e,n){var s=n(7195),r=function(){var t=this,e=t._self._c;return e("main",{attrs:{id:"app"}},[e("OrderRegistrationComponent")],1)},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("section",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("nav",{staticClass:"navbar navbar-light bg-light"},[e("div",{staticClass:"container-fluid"},[e("span",{staticClass:"navbar-brand"},[t._v("Эмулятор заказа")]),e("Switches",{attrs:{label:t.label},model:{value:t.enabled,callback:function(e){t.enabled=e},expression:"enabled"}})],1)])])]),e("section",{staticClass:"row my-3"},[e("div",{staticClass:"col-3"},[e("input",{ref:"price",staticClass:"form-control",attrs:{type:"text",id:"price",placeholder:"Цена"},domProps:{value:t.price},on:{change:function(e){return t.onChange(e,"price")},input:function(e){return t.onInput(e,"price")}}}),t._m(0)]),e("div",{staticClass:"col-3"},[e("input",{ref:"qty",staticClass:"form-control",attrs:{type:"text",id:"qty",placeholder:"Количество"},domProps:{value:t.qty},on:{change:function(e){return t.onChange(e,"qty")},input:function(e){return t.onInput(e,"qty")}}}),t._m(1)]),e("div",{staticClass:"col-3"},[e("input",{ref:"amount",staticClass:"form-control",attrs:{type:"text",id:"amount",placeholder:"Сумма"},domProps:{value:t.amount},on:{change:function(e){return t.onChange(e,"amount")},input:function(e){return t.onInput(e,"amount")}}}),t._m(2)]),e("div",{staticClass:"col-3"},[e("button",{staticClass:"btn btn-outline-secondary",on:{click:t.send}},[t._v(" Добавить ")])])]),e("section",{staticClass:"row my-3"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v(" Состояние хранилища ")]),e("div",{staticClass:"card-body"},[e("code",{staticClass:"storage__view",domProps:{innerHTML:t._s(t.representation)}})])])])]),e("section",{staticClass:"row my-3"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v(" События ")]),e("ul",{staticClass:"list-group list-group-flush"},[t._l(t.events,(function(n,s){return[e("li",{key:s,staticClass:"list-group-item list-group-item-action dropdown",on:{click:t.expand}},[n.extend?e("em",{staticClass:"bi bi-caret-down-fill"}):t._e(),t._v(" "+t._s(n.desc)+" "),n.extend?e("div",{staticClass:"dropdown-menu",attrs:{"data-collapsed":"true"},domProps:{innerHTML:t._s(n.extend)}}):t._e()])]}))],2)])])])])},o=[function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"price"}},[e("sub",[t._v("Цена за единицу")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"qty"}},[e("sub",[t._v("Общее количество")])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"amount"}},[e("sub",[t._v("Общая стоимость")])])}];n(541),n(7658);const c=t=>!(t%2);function u(t){return new Promise((e=>{setTimeout((()=>{e({success:!!c(JSON.parse(t).amount)})}),1e3)}))}function l(t,e=null,n=2){return JSON.stringify(Object.entries(t).reduce(((t,[e,n])=>({...t,[e]:Number(n)})),""),e,n)}function h(t,e=300){let n;return function(...s){n&&clearTimeout(n),n=setTimeout((()=>{t.apply(this,s)}),e)}}var d=n(6318);class p{constructor(){this.events={}}on(t,e){(this.events[t]=this.events[t]||[]).push(e)}emit(t,...e){(this.events[t]||[]).forEach((t=>t(...e)))}}class v extends p{constructor(t,e,n=null){switch(super(),this.bind(),this.input=t,this.rules=e,this.errors=[],n??=v.ON_ENTRY,n){case v.ON_CHANGE:this.validateOnChange();break;case v.ON_ENTRY:this.validateOnEntry();break;case v.ON_BLUR:this.validateOnBlur();break}}bind(){this.validate=this.validate.bind(this)}validateOnChange(){this.input.addEventListener("change",this.validate)}validateOnEntry(){this.input.addEventListener("input",this.validate)}validateOnBlur(){this.input.addEventListener("blur",this.validate)}validate(){this.rules.forEach((({id:t,validator:e,message:n})=>{switch(!0){case e instanceof Function:e.call(this.input,this.input,t)||(this.errors.push({id:t,value:this.input.value,message:n}),this.emit.call(this,v.ERROR,this.errors));break;case e instanceof RegExp:e.test(this.input.value)||(this.errors.push({id:t,value:this.input.value,message:n}),this.emit.call(this,v.ERROR,this.errors))}}))}}(0,d.Z)(v,"SUCCESS","success"),(0,d.Z)(v,"ERROR","error"),(0,d.Z)(v,"ON_CHANGE",2),(0,d.Z)(v,"ON_ENTRY",1),(0,d.Z)(v,"ON_BLUR",0);class f extends Error{}class m{static init(){return new m}constructor(t=null){m._tmp=this.value=t}set nowChange(t){let e;m._tmp!==t&&(m._tmp=t,e=m.dump.length?m.dump[m.dump.length-1]:null,e&&e!==t&&(this.value=e),e&&e===t||m.dump.push(t))}get nowChange(){return m._tmp}get firstChanged(){return m.dump[0]}get lastChanged(){return this.value}}(0,d.Z)(m,"dump",[]),(0,d.Z)(m,"_tmp",void 0);var b=n(6225),g={name:"OrderRegistrationComponent",components:{Switches:b.Z},data:()=>({archiver:m.init(),label:"По первому полю",correction:!1,byFirst:!0,validators:[],events:[],storage:{},order:{nonce:0,price:0,qty:0,amount:0}}),computed:{enabled:{set(t){this.label=t?"По первому полю":"По последнему полю",this.byFirst=t},get(){return this.byFirst}},representation(){return`<pre>${l(this.storage)}</pre>`},amount(){const t=Number(this.order.amount);return t>0?t:null},price(){const t=Number(this.order.price);return t>0?t:null},qty(){const t=Number(this.order.qty);return t>0?t:null}},watch:{order:{deep:!0,handler(){if(this.correction||!this.archiver.lastChanged)return;this.correction=!0;const t=this.archiver.firstChanged,e=this.archiver.lastChanged,n=this.archiver.nowChange,s=this.byFirst?t:e;Object.assign(this.order,{[s]:(t=>{const e=this.price*this.qty;switch(n){case"amount":switch(s){case"qty":this.price&&(t=this.amount/this.price);break;case"price":this.qty&&(t=this.amount/this.qty);break}break;case"price":switch(this.order.amount||(this.order.amount=e),s){case"qty":this.amount&&(t=this.amount/this.price);break;case"amount":this.qty&&(t=this.price*this.qty);break}break;case"qty":switch(this.order.amount||(this.order.amount=e),s){case"price":this.amount&&(t=this.amount/this.qty);break;case"amount":this.price&&(t=this.qty*this.price);break}}return t>=1/0&&(t=0),t})(this[s])}),this.correction=!1}}},methods:{expand({target:t}){t.closest(".dropdown").lastElementChild?.classList.toggle("dropdown-menu--expanded")},beforeSend(){this.onChange({extend:`\n          <pre>send: ${l(this.order)}</pre><br>\n          <pre>local: ${l(this.storage)}</pre>\n        `},"submit","отправка на сервер")},afterSend(t){this.onChange({extend:`\n          <pre>response: ${JSON.stringify({success:t},null,2)}</pre><br>\n          <pre>local: ${l(this.storage)}</pre>\n        `},"response","ответ сервера")},async send(){this.beforeSend();const{success:t}=await u(l(this.order));t&&(window.localStorage.setItem("order",l(this.order)),this.storage=Object.assign({},this.order)),this.afterSend(t)},onChange:h((function({target:t,extend:e},n,s="было изменено"){this.order.nonce+=1,this.events.unshift({key:n,desc:`${this.order.nonce} ${n} ${s} ${t?.value||""}`,extend:e})})),onInput:h((function({target:t},e){this.order[e]=+t.value,this.archiver.nowChange=e}))},beforeMount(){window.localStorage.getItem("order")||window.localStorage.setItem("order",l(this.order)),this.storage=JSON.parse(window.localStorage.getItem("order"))},async mounted(){await this.$nextTick();for(const t in this.$refs)this.validators.push(new v(this.$refs[t],[{id:t,message:"Not a Number",validator:t=>!Number.isNaN(Number(t.value))||(t.value=t.value.toString().slice(0,t.value.length-1),!1)}]))}},C=g,y=n(1001),w=(0,y.Z)(C,a,o,!1,null,"e69b25fe",null),_=w.exports,O={name:"App",components:{OrderRegistrationComponent:_}},N=O,x=(0,y.Z)(N,r,i,!1,null,null,null),k=x.exports;s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(k)}).$mount("#app")}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,r,i){if(!s){var a=1/0;for(l=0;l<t.length;l++){s=t[l][0],r=t[l][1],i=t[l][2];for(var o=!0,c=0;c<s.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(o=!1,i<a&&(a=i));if(o){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[s,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,i,a=s[0],o=s[1],c=s[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var l=c(n)}for(e&&e(s);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},s=self["webpackChunkorder_emulation"]=self["webpackChunkorder_emulation"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(2258)}));s=n.O(s)})();