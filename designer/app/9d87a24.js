(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1078:function(t,e,r){"use strict";var n=r(6),i=r(1127),o=r(74),a=r(73),s=r(96),c=r(370);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=o(this),r=a(e),n=c(e,0);return n.length=i(n,e,e,r,0,void 0===t?1:s(t)),n}})},1079:function(t,e,r){r(177)("flat")},1127:function(t,e,r){"use strict";var n=r(7),i=r(253),o=r(73),a=r(59),s=n.TypeError,c=function(t,e,r,n,u,l,h,p){for(var d,f,m=u,b=0,w=!!h&&a(h,p);b<n;){if(b in r){if(d=w?w(r[b],b,e):r[b],l>0&&i(d))f=o(d),m=c(t,e,d,f,m,l-1)-1;else{if(m>=9007199254740991)throw s("Exceed the acceptable array length");t[m]=d}m++}b++}return m};t.exports=c},1575:function(t,e,r){},1749:function(t,e,r){"use strict";r(1575)},1916:function(t,e,r){"use strict";r.r(e);var n=r(1091),i=r(1142),o=r(1090),a=r(1093),s=r(1070),c=r(1309),u=r(1556),l=r(1668),h=r(1135),p=(r(87),r(35)),d=function(t){return!(t<=0||t>3e3)||"Value can range from 0 to 3000"},f={computed:{xE:function(){return this.xNotNumber||this.xOutOfRange||this.xError},yE:function(){return this.yNotNumber||this.yOutOfRange||this.yError},xOutOfRange:function(){return this.dump.width<=0||this.dump.width>3e3},yOutOfRange:function(){return this.dump.height<=0||this.dump.height>3e3},xNotNumber:function(){return"number"!=typeof this.dump.width},yNotNumber:function(){return"number"!=typeof this.dump.height},w:{get:function(){return Object(p.rclamp)(Number(this.dump.width),0,3e3)},set:function(t){this.dump.width=Object(p.rclamp)(Number(t),0,3e3)}},h:{get:function(){return Object(p.rclamp)(Number(this.dump.height),0,3e3)},set:function(t){this.dump.height=Object(p.rclamp)(Number(t),0,3e3)}},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE},color:function(){return this.$vuetify.theme.dark?"gray":this.$store.state.app.color}},data:function(){return{dump:{width:1024,height:768},xError:!1,yError:!1}},methods:{wheel:function(t,e){var r=t.deltaY,n=t.wheelDelta;this[e]+=Math.max(-1,Math.min(1,r||n))},xV:function(t){var e=d(Number(t));return this.xError="string"==typeof e,e},yV:function(t){var e=d(Number(t));return this.yError="string"==typeof e,e},open:function(){this.$emit("create",this.dump),this.close()},close:function(){this.$emit("close")}}},m=(r(1749),r(250)),b=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(i.a,{staticClass:"custom-dialog__card",class:{fullscreen:t.mobile},attrs:{elevation:"0"}},[t.mobile&&t.$store.state.app.vkapp?e(c.a,{attrs:{height:"26px",color:"transparent"}}):t._e(),t._v(" "),t.mobile&&t.$store.state.app.vkapp?[e(s.a,{staticClass:"custom-dialog__btn-wrapper",attrs:{"justify-start":""}},[e(n.a,{attrs:{icon:""},on:{click:t.close}},[e(a.a,[t._v("mdi-window-close")])],1),t._v(" "),e(n.a,{attrs:{icon:""},on:{click:t.open}},[e(a.a,[t._v("mdi-check")])],1)],1)]:[e(l.a,{staticClass:"custom-dialog__tabs-header",attrs:{color:t.color,height:"60px","hide-slider":"","show-arrows":"",grow:""}},[e(u.a,{attrs:{ripple:!1},on:{click:t.close}},[e(a.a,{attrs:{color:t.color}},[t._v("\n          mdi-window-close\n        ")])],1),t._v(" "),e(u.a,{attrs:{ripple:!1},on:{click:t.open}},[e(a.a,{attrs:{color:t.color}},[t._v("\n          mdi-check\n        ")])],1)],1)],t._v(" "),e(o.b,{staticClass:"custom-dialog__card-pane"},[e(s.a,{staticClass:"pane"},[e(h.a,{staticClass:"cell-width",attrs:{type:"number",label:"W","hide-details":!t.xE,rules:[t.xV],color:t.color,outlined:"",dense:""},on:{wheel:function(e){return t.wheel(e,"w")}},model:{value:t.w,callback:function(e){t.w=e},expression:"w"}}),t._v(" "),e(h.a,{staticClass:"cell-height",attrs:{type:"number",label:"H","hide-details":!t.yE,rules:[t.yV],color:t.color,outlined:"",dense:""},on:{wheel:function(e){return t.wheel(e,"h")}},model:{value:t.h,callback:function(e){t.h=e},expression:"h"}})],1)],1)],2)}),[],!1,null,"40a7a9cf",null);e.default=b.exports}}]);