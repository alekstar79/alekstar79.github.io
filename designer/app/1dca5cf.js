(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1088:function(t,n,e){"use strict";var o=e(5);function r(t){return function(n,e){for(var o in e)Object.prototype.hasOwnProperty.call(n,o)||this.$delete(this.$data[t],o);for(var r in n)this.$set(this.$data[t],r,n[r])}}n.a=o.default.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},1090:function(t,n,e){"use strict";e.d(n,"b",(function(){return s}));var o=e(5),r=e(47),i={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o.default.extend({name:"positionable",props:t.length?Object(r.n)(i,t):i})}n.a=s()},1985:function(t,n,e){"use strict";e.r(n);var o=e(1093),r=e(1202),i={computed:{color:function(){return this.$store.state.app.color}},watch:{brightness:function(t){this.$emit("update",{field:"brightness",value:t})}},data:function(){return{brightness:0}}},s=e(250),a=Object(s.a)(i,(function(){var t=this,n=t._self._c;return n("div",t._b({},"div",t.$attrs,!1),[n(r.a,{attrs:{"thumb-label":!0,"track-color":t.color,color:t.color,step:.005,min:-1,max:1,"always-dirty":"","hide-details":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[n(o.a,{domProps:{textContent:t._s("mdi-minus")},on:{click:function(n){t.brightness-=.1}}})]},proxy:!0},{key:"append",fn:function(){return[n(o.a,{domProps:{textContent:t._s("mdi-plus")},on:{click:function(n){t.brightness+=.1}}})]},proxy:!0}]),model:{value:t.brightness,callback:function(n){t.brightness=n},expression:"brightness"}})],1)}),[],!1,null,null,null);n.default=a.exports}}]);