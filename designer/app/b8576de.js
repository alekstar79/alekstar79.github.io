(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1536:function(t,n,s){"use strict";(function(t){n.a={props:{group:{default:null,type:Object},action:{default:function(){},type:Function},fullscreen:{default:!1,type:Boolean}},computed:{color:function(){return this.$store.state.app.color}},methods:{transition:function(){var n=this.$store.state.app.user;this.action(),window.location.assign(t.env.APP_URI+"_"+n.id)}}}}).call(this,s(38))},1576:function(t,n,s){},1750:function(t,n,s){"use strict";s(1576)},1994:function(t,n,s){"use strict";s.r(n);var a=s(1114),o=s(1091),i=s(1142),c=s(1090),e=s(1093),r=s(1070),l=(s(29),s(1536).a),u=(s(1750),s(250)),_=Object(u.a)(l,(function(){var t=this,n=t._self._c;return t.group?n(i.a,{staticClass:"vk-transition__container"},[n(o.a,{staticClass:"vk-transition__cross--btn",attrs:{"aria-label":"close",icon:""},on:{click:function(n){return t.$emit("close")}}},[n(e.a,[t._v("mdi-close")])],1),t._v(" "),n(c.b,{staticClass:"vk-transition__pane",class:{fullscreen:t.fullscreen}},[n(r.a,{attrs:{column:"","justify-space-between":"","align-center":""}},[n(a.a,{staticClass:"group-logo",attrs:{size:"72"}},[n("img",{attrs:{src:t.group.photo_100||t.group.photo_50,alt:""}})]),t._v(" "),n("h2",{staticClass:"vk-transition__container--heading"},[t._v("\n        "+t._s(t.group.name)+"\n      ")]),t._v(" "),n("p",{staticClass:"vk-transition__container--text"},[t._v("\n        "+t._s(t.$t("common.need_login"))+"\n      ")]),t._v(" "),n("p",{staticClass:"vk-transition__container--list"},[t._v("\n        "+t._s(t.$t("common.allow_to"))+"\n      ")])],1)],1),t._v(" "),n(c.a,{staticClass:"vk-transition__actions"},[n(r.a,{attrs:{"justify-center":""}},[n(o.a,{staticClass:"shadowless",attrs:{color:t.color,"aria-label":"go-transition",block:""},on:{click:t.transition}},[t._v("\n        "+t._s(t.$t("common.transition"))+"\n      ")])],1)],1)],1):t._e()}),[],!1,null,"81390530",null);n.default=_.exports}}]);