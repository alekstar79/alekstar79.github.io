(window.webpackJsonp=window.webpackJsonp||[]).push([[157,51],{1452:function(t,e,i){"use strict";i.r(e),e.default=[{key:"VK",width:1590,height:530},{key:"480p",width:640,height:480},{key:"SVGA",width:800,height:600},{key:"XGA",width:1024,height:768},{key:"720p",width:1280,height:720},{key:"UXGA",width:1600,height:1200},{key:"1080p",width:1920,height:1080},{key:"Custom",width:1024,height:768}]},1578:function(t,e,i){},1756:function(t,e,i){"use strict";i(1578)},1920:function(t,e,i){"use strict";i.r(e);var n=i(1092),o=i(1143),s=i(1091),a=i(1071),r=i(1070),u=i(1098),c=i(1107),l=i(1887),h=i(1886),d=(i(51),i(1452)),p={computed:{color:function(){return this.$vuetify.theme.dark?"gray":this.$store.state.app.color},window:function(){return this.$store.state.app.window}},data:function(){return{menu:!1,dim:d.default[3],dimensions:d.default}},methods:{openDialog:function(){var t=this;setTimeout((function(){return t.menu=!0}))},create:function(t){this.$emit("Custom"===t.key?"custom":"choose",t),this.menu=!1}},beforeDestroy:function(){this.$bus.$off("open:new-dialog",this.openDialog)},beforeMount:function(){this.$bus.$on("open:new-dialog",this.openDialog)}},f=(i(1756),i(250)),w=Object(f.a)(p,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{"position-x":t.window.width-260,"position-y":(t.window.height-390)/2,"close-on-content-click":!1,transition:"slide-x-transition","max-height":"390px","min-width":"260px","max-width":"260px",absolute:"","offset-x":""},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e(o.a,{staticClass:"create-new__dialog"},[e(s.b,{staticClass:"create-new__dialog-pane"},[e(r.a,{attrs:{column:""}},[e("div",{staticClass:"text-uppercase sidebar-filter"},[t._v("\n          "+t._s(t.$t("graph.resolution"))+"\n        ")]),t._v(" "),e(h.a,{attrs:{mandatory:!1,"hide-details":""},model:{value:t.dim,callback:function(e){t.dim=e},expression:"dim"}},t._l(t.dimensions,(function(i){return e(u.a,{key:i.key,attrs:{ripple:!1},on:{click:function(t){t.stopPropagation()}}},[e(l.a,{attrs:{ripple:!1,color:t.color,value:i},scopedSlots:t._u([{key:"label",fn:function(){return[e(r.a,{attrs:{"justify-space-between":""}},[e(a.a,[t._v(t._s(i.key))]),t._v(" "),"Custom"!==i.key?e(a.a,{staticClass:"text-sm-right"},[t._v("\n                    "+t._s(i.width)+" : "+t._s(i.height)+"\n                  ")]):t._e()],1)]},proxy:!0}],null,!0)})],1)})),1),t._v(" "),e(n.a,{staticClass:"shadowless white--text",attrs:{color:t.color,block:""},on:{click:function(e){return t.create(t.dim)}}},[t._v("\n          "+t._s(t.$t("common.build"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,"62c915d2",null);e.default=w.exports}}]);