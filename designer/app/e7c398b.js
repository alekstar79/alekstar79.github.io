(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1081:function(t,e,n){"use strict";var o=n(6),s=n(1128),r=n(74),a=n(73),i=n(96),c=n(370);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=r(this),n=a(e),o=c(e,0);return o.length=s(o,e,e,n,0,void 0===t?1:i(t)),o}})},1082:function(t,e,n){n(177)("flat")},1087:function(t,e,n){},1109:function(t,e,n){},1110:function(t,e,n){"use strict";n(1087)},1111:function(t,e,n){"use strict";n.r(e);var o=n(1092),s=n(1093),r=n(1),a=n(2),i=n(0),c=n.n(i),u=(n(87),n(83),n(68)),l=n(35),h=(n(1109),{props:{title:{required:!0,type:String},hash:{required:!0,type:String},close:{type:Boolean,default:!1},apply:{type:Boolean,default:!1},iconColor:{type:String,default:"#fff"},scrollable:{type:Boolean,default:!1},mode:{type:Number,default:0},snap:{type:Number,default:5}},data:function(){return{isDown:!1,smooth:null,offsetX:null,offsetY:null,left:null,top:null,taskHandle:0,attempts:10,pin:!1}},computed:{backgroundColor:function(){return this.$vuetify.theme.dark?"rgb(66,66,66)":"rgb(237,237,237)"},themeClasses:function(){var t;return t={},Object(a.a)(t,"theme--".concat(this.$vuetify.theme.dark?"dark":"light"),!0),Object(a.a)(t,this.color,!0),t},eventsDetermine:function(){return this.mobile?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"}},draggable:function(){return this.$store.state.canvas.draggable},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE},zIndex:function(){var t=this;return this.draggable.findIndex((function(e){return e===t._uid}))},color:function(){return this.$store.state.app.color}},watch:{"$store.state.app.window":"recalc",left:function(t){this.$el.style.left=t+"px"},top:function(t){this.$el.style.top=t+"px"}},methods:{dragRemove:function(){this.$store.commit("canvas/dragRemove",this._uid)},dragPush:function(){this.$store.commit("canvas/dragPush",this._uid)},dragSort:function(){this.$store.commit("canvas/dragSort",this._uid)},modeResolver:function(t,e){return{left:2===this.mode?this.left:t,top:1===this.mode?this.top:e}},setCoords:function(t){var e=t.left,n=t.top,o=window.innerHeight-this.$el.clientHeight,s=window.innerWidth-this.$el.clientWidth;this.left=Object(l.rclamp)(e,0,s),this.top=Object(l.rclamp)(n,0,o)},calculateCoords:function(t,e){this.setCoords(this.modeResolver(t-t%this.snap,e-e%this.snap))},recalc:function(){this.calculateCoords(this.$el.offsetLeft,this.$el.offsetTop)},toggleEvents:function(){var t=this.mobile?this.$refs.header:document.documentElement,e=this.eventsDetermine,n=e.move,o=e.end;this.isDown?(t.removeEventListener(n,this.mouseMove),t.removeEventListener(o,this.mouseUp)):(t.addEventListener(n,this.mouseMove,this.mobile),t.addEventListener(o,this.mouseUp,this.mobile)),this.isDown=!this.isDown},mouseUp:function(){this.toggleEvents(),this.storePosition()},mouseMove:function(t){var e=void 0!==t.pageX?t.pageX:t.touches[0].pageX,n=void 0!==t.pageY?t.pageY:t.touches[0].pageY;this.calculateCoords(e-this.offsetX,n-this.offsetY),t.stopPropagation(),t.preventDefault()},mouseDown:function(t){var e=void 0!==t.pageX?t.pageX:t.touches[0].pageX,n=void 0!==t.pageY?t.pageY:t.touches[0].pageY;this.offsetX=e-this.$el.offsetLeft,this.offsetY=n-this.$el.offsetTop,this.toggleEvents(),this.dragSort()},readPosition:function(){var t=this;return Object(r.a)(c.a.mark((function e(){var n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$ls.get("position",{});case 2:return n=e.sent,o={left:300,top:200},e.abrupt("return",n[t.hash]||o);case 5:case"end":return e.stop()}}),e)})))()},storePosition:function(){var t=this;return Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$ls.get("position",{});case 2:(n=e.sent)[t.hash]={left:t.left,top:t.top},t.$ls.set("position",n);case 5:case"end":return e.stop()}}),e)})))()},attachHandler:function(){var t=this;this.taskHandle&&Object(u.cancelIdleCallback)(this.taskHandle);var e=this.eventsDetermine.start;this.taskHandle=Object(u.fulfill)((function(){if(t.attempts--,t.$refs.header)return t.$refs.header.addEventListener(e,t.mouseDown),!0}))},onReady:function(t){var e=t.vertical,n=t.horizontal;this.pin=e||n}},beforeDestroy:function(){var t=this.eventsDetermine.start;this.$refs.header&&this.$refs.header.removeEventListener(t,this.mouseDown),this.storePosition(),this.dragRemove()},mounted:function(){var t=this;return Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.recalc(),e.t0=t,e.next=4,t.readPosition();case 4:e.t1=e.sent,e.t0.setCoords.call(e.t0,e.t1),t.$nextTick().then(t.attachHandler),t.dragPush();case 8:case"end":return e.stop()}}),e)})))()}}),f=(n(1110),n(250)),d=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",t._b({staticClass:"window-modal",style:{backgroundColor:t.backgroundColor,zIndex:t.zIndex},on:{mousedown:t.dragSort,contextmenu:function(t){t.preventDefault(),t.stopPropagation()}}},"div",t.$attrs,!1),[e("div",{ref:"header",staticClass:"window-modal__header",class:t.themeClasses},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"drag-dialog__header-controls"},[t.apply?e(o.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("apply")}}},[e(s.a,{attrs:{color:t.iconColor}},[t._v("mdi-check")])],1):t._e(),t._v(" "),t.close?e(o.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[e(s.a,{attrs:{color:t.iconColor}},[t._v("mdi-close")])],1):t._e()],1)]),t._v(" "),e("div",{staticClass:"window-modal__content",class:{pin:t.pin}},[t.scrollable?[e("lazy-helper-scrollbar",{style:{maxHeight:"490px"},on:{ready:t.onReady}},[t._t("default")],2)]:[t._t("default")]],2)])}),[],!1,null,"5cf2d4a6",null);e.default=d.exports},1128:function(t,e,n){"use strict";var o=n(7),s=n(253),r=n(73),a=n(59),i=o.TypeError,c=function(t,e,n,o,u,l,h,f){for(var d,p,v=u,m=0,g=!!h&&a(h,f);m<o;){if(m in n){if(d=g?g(n[m],m,e):n[m],l>0&&s(d))p=r(d),v=c(t,e,d,p,v,l-1)-1;else{if(v>=9007199254740991)throw i("Exceed the acceptable array length");t[v]=d}v++}m++}return v};t.exports=c},1156:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(51);var o=n(1211);var s,r,a=(s=o.a,r=s.prototype.constructor.options.methods.genEdit,s.extend({methods:{genEdit:function(){var t,e=this,n=r.call(this);return setTimeout((function(){var o;(t=null===(o=n.elm)||void 0===o?void 0:o.querySelector("input"))&&(t.addEventListener("focus",(function(){e.$bus.$emit("input:focus")})),t.addEventListener("blur",(function(){e.$bus.$emit("input:blur")})))}),7),n}},beforeDestroy:function(){this.$bus.$emit("input:blur")}}))},1638:function(t,e,n){},1821:function(t,e,n){"use strict";n(1638)},1981:function(t,e,n){"use strict";n.r(e);var o=n(1092),s=n(1211),r=n(1071),a=(n(87),n(3),n(14),n(15),n(1156)),i=n(4),c={components:{VColorPicker:a.a},props:{snap:{type:Number,default:5}},computed:{hex:{get:function(){return this.temp||this.current.color},set:function(t){this.current.color=t}},canvas:function(){return this.$parent.canvas||{}}},data:function(){return{currentCursor:"crosshair",defaultCursor:null,canceled:!1,show:!1,active:null,temp:null,current:{color:"#ffffff"}}},watch:{"$parent.onCanvas":function(t){t||(this.temp=null)},current:{deep:!0,handler:function(t){var e=this;this.$parent.colorToAlpha(t,this.active).then((function(){Object(i.lock)(e.canvas)}))}}},methods:{copy:function(){var t=this;n.e(96).then(n.bind(null,1548)).then((function(e){return(0,e.writeText)(t.hex)})).then((function(){return t.$bus.$emit("snack",{content:"graph.copied",color:"success"})})).catch((function(){return t.$bus.$emit("snack",{content:"common.error",color:"error"})}))},onMouseDown:function(t){var e=this,n=t.pointer;t.e.shiftKey||(this.canvas.defaultCursor=this.currentCursor,this.testColor(n).then((function(t){e.temp=t,e.hex=t})))},onMouseMove:function(t){var e=this,n=t.pointer;t.e.shiftKey||(this.canvas.defaultCursor=this.currentCursor,this.testColor(n).then((function(t){e.temp=t})))},onMouseUp:function(){this.canvas.defaultCursor=this.currentCursor},testColor:function(t){var e=this,n=t.x,o=t.y;return n|=0,o|=0,new Promise((function(t){var s=e.canvas.contextContainer.getImageData(n,o,1,1);t(Object(i.rgbToHex)(s.data[0],s.data[1],s.data[2]))}))},make:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.canceled||(this.canceled=!0,this.canvas.defaultCursor=this.defaultCursor,this.canvas.selection=!0,t||this.$parent.restoreCanvas(),e&&this.$emit("tool:cancel"),this.$parent.lockEventsSet=!1,this.$parent.restoreEvents([]),t&&this.canvas.trigger("programmatic"),this.canvas.off({"mouse:down":this.onMouseDown,"mouse:move":this.onMouseMove,"mouse:up":this.onMouseUp}),Object(i.unlock)(this.canvas))}},beforeDestroy:function(){this.make(!1,!1)},mounted:function(){this.active=this.$parent.getActives(),this.defaultCursor=this.canvas.defaultCursor,this.canvas.defaultCursor=this.currentCursor,this.canvas.selection=!1,this.$parent.leaveEvents([]),this.$parent.lockEventsSet=!0,this.canvas.on({"mouse:down":this.onMouseDown,"mouse:move":this.onMouseMove,"mouse:up":this.onMouseUp}),Object(i.lock)(this.canvas)}},u=c,l=(n(1821),n(250)),h=Object(l.a)(u,(function(){var t=this,e=t._self._c;return e("graph-drag",{staticClass:"drag-alpha",attrs:{hash:"to-alpha",title:t.$t("graph.toalpha"),apply:!0,close:!0,snap:t.snap},on:{close:function(e){return t.make(!1)},apply:function(e){return t.make(!0)}}},[e("div",{staticClass:"alpha-pane"},[e(r.a,{staticClass:"color-dialog__body"},[e(s.a,{attrs:{"canvas-height":"130px",width:"200px","dot-size":"10",mode:"hexa","hide-mode-switch":"",flat:""},model:{value:t.hex,callback:function(e){t.hex=e},expression:"hex"}}),t._v(" "),e(o.a,{staticClass:"color-copy",attrs:{text:""},on:{click:function(e){return e.stopPropagation(),t.copy.apply(null,arguments)}}},[e("span",{staticClass:"mdi mdi-content-copy"})])],1)],1)])}),[],!1,null,"06734aae",null);e.default=h.exports;installComponents(h,{GraphDrag:n(1111).default})}}]);