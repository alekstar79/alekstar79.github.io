(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1088:function(t,n,o){"use strict";var e=o(5);function a(t){return function(n,o){for(var e in o)Object.prototype.hasOwnProperty.call(n,e)||this.$delete(this.$data[t],e);for(var a in n)this.$set(this.$data[t],a,n[a])}}n.a=e.default.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",a("attrs$"),{immediate:!0}),this.$watch("$listeners",a("listeners$"),{immediate:!0})}})},1090:function(t,n,o){"use strict";o.d(n,"b",(function(){return i}));var e=o(5),a=o(47),r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.default.extend({name:"positionable",props:t.length?Object(a.n)(r,t):r})}n.a=i()},1987:function(t,n,o){"use strict";o.r(n);var e=o(1093),a=o(1202),r={computed:{color:function(){return this.$store.state.app.color}},watch:{rotation:function(t){this.$emit("update",{field:"rotation",value:t})}},data:function(){return{rotation:0}}},i=o(250),s=Object(i.a)(r,(function(){var t=this,n=t._self._c;return n("div",t._b({},"div",t.$attrs,!1),[n(a.a,{attrs:{"thumb-label":!0,"track-color":t.color,color:t.color,step:.002,min:-2,max:2,"always-dirty":"","hide-details":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[n(e.a,{domProps:{textContent:t._s("mdi-minus")},on:{click:function(n){t.rotation-=.2}}})]},proxy:!0},{key:"append",fn:function(){return[n(e.a,{domProps:{textContent:t._s("mdi-plus")},on:{click:function(n){t.rotation+=.2}}})]},proxy:!0}]),model:{value:t.rotation,callback:function(n){t.rotation=n},expression:"rotation"}})],1)}),[],!1,null,null,null);n.default=s.exports}}]);