(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1565:function(t,e,s){},1737:function(t,e,s){"use strict";s(1565)},1907:function(t,e,s){"use strict";s.r(e);var a=s(1114),i=s(1091),r=s(1069),c=s(1120),o=s(1071),n=s(1093),l=s(1149),h=s(1070),u=s(1309),m=s(2),v=(s(25),s(32),{props:{fullscreen:{default:!1,type:Boolean}},computed:{theme:{set:function(t){this.$store.commit("app/set",{theme:t?"dark":"light"})},get:function(){return"dark"===this.$store.state.app.theme}},locale:{set:function(t){this.$store.commit("app/set",{locale:t?"en":"ru"})},get:function(){return"en"===this.$store.state.app.locale}},hints:{set:function(t){this.$ls.set("theme",{hints:t,theme:this.theme,color:this.color,cover:this.cover}),this.$store.commit("app/set",{hints:t})},get:function(){return this.$store.state.app.hints}},barColor:function(){return this.$vuetify.theme.dark?"transparent":"#f5f5f5"},colors:function(){return this.$vuetify.theme.dark?["accent","accent","accent"]:["secondary","accent","info"]},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE},color:function(){return this.$store.state.app.color},cover:function(){return this.$store.state.app.cover}},watch:{locale:"setLocale",theme:"setTheme"},data:function(){return{covers:["/img/sidebar/c01.jpg","/img/sidebar/pcb-thumb.svg","simple"]}},methods:{setColor:function(t){var e=this.theme?"dark":"light";this.$ls.set("theme",{color:t,cover:this.cover,theme:e,hints:this.hints}),this.$store.commit("app/set",{color:t})},setCover:function(t){var e=this.theme?"dark":"light";this.$ls.set("theme",{cover:t,color:this.color,theme:e,hints:this.hints}),this.$store.commit("app/set",{cover:t})},setTheme:function(){var t=this.theme?"dark":"light";this.$ls.set("theme",{theme:t,color:this.color,cover:this.cover,hints:this.hints})},setLocale:function(t){var e=t?"en":"ru";this.$i18n.locale=e,this.$cookies.set("locale",e,{maxAge:31536e3,secure:!0,path:"/"})}}}),p=(s(1737),s(250)),f=Object(p.a)(v,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"settings-menu",on:{mouseenter:function(e){return t.$emit("mouseenter")},mouseleave:function(e){return t.$emit("mouseleave")}}},[t.fullscreen&&t.$store.state.app.vkapp?e(u.a,{attrs:{color:t.barColor,height:"10px"}}):t._e(),t._v(" "),e(h.a,{attrs:{column:""}},[t.fullscreen?e(o.a,[e(h.a,{staticClass:"vk-transition",attrs:{"justify-start":""}},[e(i.a,{staticClass:"vk-transition__cross--btn",attrs:{"aria-label":"close",icon:""},on:{click:function(e){return t.$emit("close")}}},[e(n.a,[t._v("mdi-close")])],1)],1)],1):t._e(),t._v(" "),e(o.a,[e("div",{staticClass:"text-center text-uppercase sidebar-filter"},[t._v("\n        "+t._s(t.$t("common.settings"))+"\n      ")])]),t._v(" "),e(o.a,{staticClass:"colors",attrs:{xs12:""}},[e(h.a,{staticClass:"colors-list",attrs:{"justify-center":""}},t._l(t.colors,(function(s,i){return e(a.a,{key:"".concat(s,"-").concat(i),class:Object(m.a)({"color-bage":!0,"color-active":s===t.color},s,!0),attrs:{size:"23"},on:{click:function(e){return t.setColor(s)}}})})),1)],1),t._v(" "),e(c.a,{staticClass:"my-2",style:{visibility:"hidden",opacity:0}}),t._v(" "),e(o.a,{attrs:{xs12:""}},[e(h.a,{staticClass:"covers-list",attrs:{"justify-center":""}},[t._l(t.covers,(function(s){return["simple"===s?e(o.a,{key:s,staticClass:"pa-2",class:{"cover-image":!0,"image-active":s===t.cover},style:{backgroundColor:"#262E58"},attrs:{height:"120"},on:{click:function(e){return t.setCover(s)}}}):e(l.a,{key:s,staticClass:"pa-2",class:{"cover-image":!0,"image-active":s===t.cover},attrs:{src:s,height:"120"},on:{click:function(e){return t.setCover(s)}}})]}))],2)],1),t._v(" "),e(c.a,{staticClass:"my-3",style:{visibility:"hidden",opacity:0}}),t._v(" "),e(o.a,{staticClass:"toggler"},[e(h.a,{attrs:{"justify-center":""}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.locale,expression:"locale"}],attrs:{type:"checkbox",id:"lang"},domProps:{checked:Array.isArray(t.locale)?t._i(t.locale,null)>-1:t.locale},on:{change:function(e){var s=t.locale,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.locale=s.concat([null])):r>-1&&(t.locale=s.slice(0,r).concat(s.slice(r+1)))}else t.locale=i}}}),t._v(" "),e("label",{attrs:{for:"lang"}},[t._v("EN")])])],1),t._v(" "),t.$store.state.app.webview?t._e():e(o.a,{staticClass:"toggler pt-3"},[e(h.a,{attrs:{"justify-center":""}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],attrs:{type:"checkbox",id:"theme"},domProps:{checked:Array.isArray(t.theme)?t._i(t.theme,null)>-1:t.theme},on:{change:function(e){var s=t.theme,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.theme=s.concat([null])):r>-1&&(t.theme=s.slice(0,r).concat(s.slice(r+1)))}else t.theme=i}}}),t._v(" "),e("label",{attrs:{for:"theme"}},[t._v("NIGHT")])])],1),t._v(" "),e(o.a,{staticClass:"toggler pt-3"},[e(h.a,{attrs:{"justify-center":""}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.hints,expression:"hints"}],attrs:{type:"checkbox",id:"hints"},domProps:{checked:Array.isArray(t.hints)?t._i(t.hints,null)>-1:t.hints},on:{change:function(e){var s=t.hints,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.hints=s.concat([null])):r>-1&&(t.hints=s.slice(0,r).concat(s.slice(r+1)))}else t.hints=i}}}),t._v(" "),e("label",{staticClass:"reverse-toggler",attrs:{for:"hints"}},[t._v("OFF")])])],1),t._v(" "),e(c.a,{staticClass:"mt-3 mb-1",style:{visibility:"hidden",opacity:0}}),t._v(" "),e("lazy-core-share")],1)],1)}),[],!1,null,"6b9786e1",null);e.default=f.exports}}]);