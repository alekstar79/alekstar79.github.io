(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1078:function(t,a,e){"use strict";var r=e(6),o=e(1127),n=e(74),i=e(73),c=e(96),s=e(370);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,a=n(this),e=i(a),r=s(a,0);return r.length=o(r,a,a,e,0,void 0===t?1:c(t)),r}})},1079:function(t,a,e){e(177)("flat")},1127:function(t,a,e){"use strict";var r=e(7),o=e(253),n=e(73),i=e(59),c=r.TypeError,s=function(t,a,e,r,l,u,p,f){for(var d,v,h=l,m=0,_=!!p&&i(p,f);m<r;){if(m in e){if(d=_?_(e[m],m,a):e[m],u>0&&o(d))v=n(d),h=s(t,a,d,v,h,u-1)-1;else{if(h>=9007199254740991)throw c("Exceed the acceptable array length");t[h]=d}h++}m++}return h};t.exports=s},1580:function(t,a,e){},1757:function(t,a,e){"use strict";e(1580)},1922:function(t,a,e){"use strict";e.r(a);var r=e(1091),o=e(1142),n=e(1090),i=e(1093),c=e(1070),s=e(1309),l=e(1556),u=e(1668),p=e(1135),f=(e(29),{props:{name:{type:String,default:""}},watch:{name:function(t){this.value=t}},computed:{color:function(){return this.$vuetify.theme.dark?"gray":this.$store.state.app.color},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},data:function(){return{value:""}},mounted:function(){this.value=this.name}}),d=(e(1757),e(250)),v=Object(d.a)(f,(function(){var t=this,a=t._self._c;return a(o.a,{staticClass:"rename-dialog__card",class:{fullscreen:t.mobile},attrs:{elevation:"0"}},[t.mobile&&t.$store.state.app.vkapp?a(s.a,{attrs:{height:"26px",color:"transparent"}}):t._e(),t._v(" "),t.mobile&&t.$store.state.app.vkapp?[a(c.a,{staticClass:"rename-dialog__btn-wrapper",attrs:{"justify-start":""}},[a(r.a,{attrs:{icon:""},on:{click:function(a){return t.$emit("close")}}},[a(i.a,[t._v("mdi-window-close")])],1),t._v(" "),a(r.a,{attrs:{icon:""},on:{click:function(a){return t.$emit("apply",{name:t.value})}}},[a(i.a,[t._v("mdi-check")])],1)],1)]:[a(u.a,{staticClass:"rename-dialog__tabs-header",attrs:{color:t.color,height:"60px","hide-slider":"","show-arrows":"",grow:""}},[a(l.a,{attrs:{ripple:!1},on:{click:function(a){return t.$emit("close")}}},[a(i.a,{attrs:{color:t.color}},[t._v("mdi-window-close")])],1),t._v(" "),a(l.a,{attrs:{ripple:!1},on:{click:function(a){return t.$emit("apply",{name:t.value})}}},[a(i.a,{attrs:{color:t.color}},[t._v("mdi-check")])],1)],1)],t._v(" "),a(n.b,{staticClass:"rename-dialog__card-pane"},[a(c.a,{staticClass:"pane"},[a(p.a,{attrs:{label:"Name",color:t.color,"hide-details":"",outlined:""},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1)],2)}),[],!1,null,"eb9f1e1c",null);a.default=v.exports}}]);