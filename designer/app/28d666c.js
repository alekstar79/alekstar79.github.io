(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1078:function(t,e,n){"use strict";var o=n(6),r=n(1127),a=n(74),s=n(73),i=n(96),c=n(370);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=a(this),n=s(e),o=c(e,0);return o.length=r(o,e,e,n,0,void 0===t?1:i(t)),o}})},1079:function(t,e,n){n(177)("flat")},1086:function(t,e,n){},1108:function(t,e,n){},1109:function(t,e,n){"use strict";n(1086)},1110:function(t,e,n){"use strict";n.r(e);var o=n(1091),r=n(1093),a=n(1),s=n(2),i=n(0),c=n.n(i),u=(n(87),n(83),n(68)),l=n(35),d=(n(1108),{props:{title:{required:!0,type:String},hash:{required:!0,type:String},close:{type:Boolean,default:!1},apply:{type:Boolean,default:!1},iconColor:{type:String,default:"#fff"},scrollable:{type:Boolean,default:!1},mode:{type:Number,default:0},snap:{type:Number,default:5}},data:function(){return{isDown:!1,smooth:null,offsetX:null,offsetY:null,left:null,top:null,taskHandle:0,attempts:10,pin:!1}},computed:{backgroundColor:function(){return this.$vuetify.theme.dark?"rgb(66,66,66)":"rgb(237,237,237)"},themeClasses:function(){var t;return t={},Object(s.a)(t,"theme--".concat(this.$vuetify.theme.dark?"dark":"light"),!0),Object(s.a)(t,this.color,!0),t},eventsDetermine:function(){return this.mobile?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"}},draggable:function(){return this.$store.state.canvas.draggable},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE},zIndex:function(){var t=this;return this.draggable.findIndex((function(e){return e===t._uid}))},color:function(){return this.$store.state.app.color}},watch:{"$store.state.app.window":"recalc",left:function(t){this.$el.style.left=t+"px"},top:function(t){this.$el.style.top=t+"px"}},methods:{dragRemove:function(){this.$store.commit("canvas/dragRemove",this._uid)},dragPush:function(){this.$store.commit("canvas/dragPush",this._uid)},dragSort:function(){this.$store.commit("canvas/dragSort",this._uid)},modeResolver:function(t,e){return{left:2===this.mode?this.left:t,top:1===this.mode?this.top:e}},setCoords:function(t){var e=t.left,n=t.top,o=window.innerHeight-this.$el.clientHeight,r=window.innerWidth-this.$el.clientWidth;this.left=Object(l.rclamp)(e,0,r),this.top=Object(l.rclamp)(n,0,o)},calculateCoords:function(t,e){this.setCoords(this.modeResolver(t-t%this.snap,e-e%this.snap))},recalc:function(){this.calculateCoords(this.$el.offsetLeft,this.$el.offsetTop)},toggleEvents:function(){var t=this.mobile?this.$refs.header:document.documentElement,e=this.eventsDetermine,n=e.move,o=e.end;this.isDown?(t.removeEventListener(n,this.mouseMove),t.removeEventListener(o,this.mouseUp)):(t.addEventListener(n,this.mouseMove,this.mobile),t.addEventListener(o,this.mouseUp,this.mobile)),this.isDown=!this.isDown},mouseUp:function(){this.toggleEvents(),this.storePosition()},mouseMove:function(t){var e=void 0!==t.pageX?t.pageX:t.touches[0].pageX,n=void 0!==t.pageY?t.pageY:t.touches[0].pageY;this.calculateCoords(e-this.offsetX,n-this.offsetY),t.stopPropagation(),t.preventDefault()},mouseDown:function(t){var e=void 0!==t.pageX?t.pageX:t.touches[0].pageX,n=void 0!==t.pageY?t.pageY:t.touches[0].pageY;this.offsetX=e-this.$el.offsetLeft,this.offsetY=n-this.$el.offsetTop,this.toggleEvents(),this.dragSort()},readPosition:function(){var t=this;return Object(a.a)(c.a.mark((function e(){var n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$ls.get("position",{});case 2:return n=e.sent,o={left:300,top:200},e.abrupt("return",n[t.hash]||o);case 5:case"end":return e.stop()}}),e)})))()},storePosition:function(){var t=this;return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$ls.get("position",{});case 2:(n=e.sent)[t.hash]={left:t.left,top:t.top},t.$ls.set("position",n);case 5:case"end":return e.stop()}}),e)})))()},attachHandler:function(){var t=this;this.taskHandle&&Object(u.cancelIdleCallback)(this.taskHandle);var e=this.eventsDetermine.start;this.taskHandle=Object(u.fulfill)((function(){if(t.attempts--,t.$refs.header)return t.$refs.header.addEventListener(e,t.mouseDown),!0}))},onReady:function(t){var e=t.vertical,n=t.horizontal;this.pin=e||n}},beforeDestroy:function(){var t=this.eventsDetermine.start;this.$refs.header&&this.$refs.header.removeEventListener(t,this.mouseDown),this.storePosition(),this.dragRemove()},mounted:function(){var t=this;return Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.recalc(),e.t0=t,e.next=4,t.readPosition();case 4:e.t1=e.sent,e.t0.setCoords.call(e.t0,e.t1),t.$nextTick().then(t.attachHandler),t.dragPush();case 8:case"end":return e.stop()}}),e)})))()}}),f=(n(1109),n(250)),h=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",t._b({staticClass:"window-modal",style:{backgroundColor:t.backgroundColor,zIndex:t.zIndex},on:{mousedown:t.dragSort,contextmenu:function(t){t.preventDefault(),t.stopPropagation()}}},"div",t.$attrs,!1),[e("div",{ref:"header",staticClass:"window-modal__header",class:t.themeClasses},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"drag-dialog__header-controls"},[t.apply?e(o.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("apply")}}},[e(r.a,{attrs:{color:t.iconColor}},[t._v("mdi-check")])],1):t._e(),t._v(" "),t.close?e(o.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[e(r.a,{attrs:{color:t.iconColor}},[t._v("mdi-close")])],1):t._e()],1)]),t._v(" "),e("div",{staticClass:"window-modal__content",class:{pin:t.pin}},[t.scrollable?[e("lazy-helper-scrollbar",{style:{maxHeight:"490px"},on:{ready:t.onReady}},[t._t("default")],2)]:[t._t("default")]],2)])}),[],!1,null,"5cf2d4a6",null);e.default=h.exports},1127:function(t,e,n){"use strict";var o=n(7),r=n(253),a=n(73),s=n(59),i=o.TypeError,c=function(t,e,n,o,u,l,d,f){for(var h,p,v=u,m=0,g=!!d&&s(d,f);m<o;){if(m in n){if(h=g?g(n[m],m,e):n[m],l>0&&r(h))p=a(h),v=c(t,e,h,p,v,l-1)-1;else{if(v>=9007199254740991)throw i("Exceed the acceptable array length");t[v]=h}v++}m++}return v};t.exports=c},1154:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(24),n(67),n(87),n(371),n(367),n(32),n(3),n(34),n(25);function o(t){if(void 0===t)return"rgba(0,0,0,1)";if("string"==typeof t){if(t.match(/rgba?\((.*)\)/))return t;t={r:0,g:0,b:0,a:1}}t.a||(t.a=.001),t.a=Number(t.a.toFixed(3)),t.a>1&&(t.a/=255);var e=Object.values(t);return"rgba(".concat(e.map(parseFloat).reduce((function(t,e){return"".concat(t,",").concat(e)}),"").slice(1),")")}},1155:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(51);var o=n(1211);var r,a,s=(r=o.a,a=r.prototype.constructor.options.methods.genEdit,r.extend({methods:{genEdit:function(){var t,e=this,n=a.call(this);return setTimeout((function(){var o;(t=null===(o=n.elm)||void 0===o?void 0:o.querySelector("input"))&&(t.addEventListener("focus",(function(){e.$bus.$emit("input:focus")})),t.addEventListener("blur",(function(){e.$bus.$emit("input:blur")})))}),7),n}},beforeDestroy:function(){this.$bus.$emit("input:blur")}}))},1168:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(13);n(24),n(67),n(34);function r(t){return void 0===t?{r:0,g:0,b:0,a:1}:"object"===Object(o.a)(t)?"r"in t&&"g"in t&&"b"in t?t:{r:0,g:0,b:0,a:1}:((e=t.match(/rgba?\((.*)\)/)||[]).length&&(e=e[1].split(",").map(parseFloat)),void 0===e[3]&&(e[3]=1),e[3]<=.001&&(e[3]=.001),{r:e[0]||0,g:e[1]||0,b:e[2]||0,a:e[3]});var e}},1621:function(t,e,n){},1797:function(t,e,n){"use strict";n(1621)},1963:function(t,e,n){"use strict";n.r(e);var o=n(1091),r=n(1211),a=n(1071),s=(n(488),n(3),n(58),n(87),n(88),n(14),n(15),n(1155)),i=n(1154),c=n(1168);var u={components:{VColorPicker:s.a},props:{snap:{type:Number,default:5}},computed:{rgba:{set:function(t){this.$store.commit("canvas/setDrawerOption",{fill:Object(i.a)(t),alpha:t.a})},get:function(){return Object(c.a)(this.color)}},color:function(){return this.$store.state.canvas.drawerOptions.fill},canvas:function(){return this.$parent.canvas}},data:function(){return{canceleled:!1}},methods:{copy:function(){var t=this;n.e(96).then(n.bind(null,1549)).then((function(e){var n,o,r,a,s;return(0,e.writeText)((n=t.rgba,o=n.r,r=n.g,a=n.b,s=n.a,s=Math.round(255*s).toString(16).padStart(2,"0").toUpperCase(),"#"+(o=(+o).toString(16).padStart(2,"0").toUpperCase())+(r=(+r).toString(16).padStart(2,"0").toUpperCase())+(a=(+a).toString(16).padStart(2,"0").toUpperCase())+s))})).then((function(){return t.$bus.$emit("snack",{content:"graph.copied",color:"success"})})).catch((function(){return t.$bus.$emit("snack",{content:"common.error",color:"error"})}))},make:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.canceled||(this.canceled=!0,this.$parent.fillModeToggle(null,t),e&&this.$emit("tool:cancel"))}},beforeDestroy:function(){this.make(!1,!1)},mounted:function(){this.$parent.fillModeToggle(this.canvas.getActiveObject())}},l=u,d=(n(1797),n(250)),f=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("graph-drag",{staticClass:"drag-fill",attrs:{hash:"fill",title:t.$t("graph.fill"),apply:!0,close:!0,snap:t.snap},on:{close:function(e){return t.make(!1)},apply:function(e){return t.make(!0)}}},[e("div",{staticClass:"fill-pane"},[e(a.a,{staticClass:"color-dialog__body"},[e(r.a,{attrs:{"canvas-height":"130px",width:"200px","dot-size":"10",mode:"hexa","hide-mode-switch":"",flat:""},model:{value:t.rgba,callback:function(e){t.rgba=e},expression:"rgba"}}),t._v(" "),e(o.a,{staticClass:"color-copy",attrs:{text:""},on:{click:function(e){return e.stopPropagation(),t.copy.apply(null,arguments)}}},[e("span",{staticClass:"mdi mdi-content-copy"})])],1)],1)])}),[],!1,null,"5140421b",null);e.default=f.exports;installComponents(f,{GraphDrag:n(1110).default})}}]);