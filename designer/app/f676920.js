(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1088:function(t,e,n){"use strict";var o=n(5);function i(t){return function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(e,o)||this.$delete(this.$data[t],o);for(var i in e)this.$set(this.$data[t],i,e[i])}}e.a=o.default.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},1090:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var o=n(5),i=n(47),a={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o.default.extend({name:"positionable",props:t.length?Object(i.n)(a,t):a})}e.a=r()},1989:function(t,e,n){"use strict";n.r(e);var o=n(1093),i=n(1202),a={computed:{color:function(){return this.$store.state.app.color}},watch:{blocksize:function(t){this.$emit("update",{field:"blocksize",value:t})}},data:function(){return{blocksize:0}}},r=n(250),s=Object(r.a)(a,(function(){var t=this,e=t._self._c;return e("div",t._b({},"div",t.$attrs,!1),[e(i.a,{attrs:{"thumb-label":!0,"track-color":t.color,color:t.color,min:0,max:20,"always-dirty":"","hide-details":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e(o.a,{domProps:{textContent:t._s("mdi-minus")},on:{click:function(e){t.blocksize-=1}}})]},proxy:!0},{key:"append",fn:function(){return[e(o.a,{domProps:{textContent:t._s("mdi-plus")},on:{click:function(e){t.blocksize+=1}}})]},proxy:!0}]),model:{value:t.blocksize,callback:function(e){t.blocksize=e},expression:"blocksize"}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);