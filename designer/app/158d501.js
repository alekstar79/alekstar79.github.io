(window.webpackJsonp=window.webpackJsonp||[]).push([[197,141,196,198],{1072:function(t,e,n){"use strict";var i=n(1093);e.a=i.a},1082:function(t,e,n){},1093:function(t,e,n){"use strict";n(12),n(16),n(19),n(26),n(9),n(27);var i,r=n(2),s=(n(1083),n(3),n(43),n(57),n(24),n(87),n(140),n(101),n(32),n(1082),n(1081)),o=n(251),a=n(1075),c=n(467),l=n(47),u=n(5),h=n(466);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(i||(i={}));var p=Object(h.a)(s.a,o.a,a.a,c.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l.C)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l.y)(t).find((function(e){return t[e]}));return e&&i[e]||Object(l.h)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:f({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=f(f({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=f(f({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),r="material-icons",s=t.indexOf("-"),o=s<=-1;o?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(r=t.slice(0,s))&&(r=""),i.class[r]=!0,i.class[t]=!o;var a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=u.default.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,i=e.children,r="";return n.domProps&&(r=n.domProps.textContent||n.domProps.innerHTML||r,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,r?[r]:i)}})},1096:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p}));n(25);var i=n(470);function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(i))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var s="transition".concat(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,i=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,i=e.top,r=e.left,s=e.width,o=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=i||"",t.style.left=r||"",t.style.width=s||"",t.style.height=o||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(s,Object(i.a)(n.data,o),n.children)}}}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",Object(i.a)(r.data,{props:{name:t},on:e}),r.children)}}}var a=n(2),c=n(47),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",i="offset".concat(Object(c.F)(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(a.a)({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var s="".concat(e[i],"px");e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave:function(t){t._initialStyle=Object(a.a)({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[i],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},u=(s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition")),h=s("scale-transition"),d=(s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),f=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",l())),p=o("expand-x-transition",l("",!0))},1112:function(t,e,n){"use strict";var i=n(2),r=n(5);var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(i.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(i.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=s},1122:function(t,e,n){"use strict";function i(t){if("function"!=typeof t.getRootNode){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,"a",(function(){return i}))},1215:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(32),n(29),n(52),n(16),n(62),n(66);var i=n(10),r=n(11);n(3),n(12),n(34),n(140),n(9),n(94),n(373),n(14),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(15),n(182),n(24),n(67);function s(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var a={A:65,b:66,C:67,D:68,E:69,F:70,g:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,r:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,Backspace:8,Tab:9,Enter:13,Shift:16,Ctrl:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,Insert:45,Delete:46,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123},c=function(){function t(e){Object(i.a)(this,t),this.keyCode=e}return Object(r.a)(t,[{key:"equals",value:function(t){var e=t.keyCode;return this.keyCode===e}}],[{key:"fromEvent",value:function(e){return new t(e.keyCode)}},{key:"fromString",value:function(e){var n=e.toUpperCase(),i=null;if(1===e.length)return new t(e.toUpperCase().charCodeAt(0));if(Object.keys(a).some((function(t){return(t===e||t===n)&&(i=a[e]||a[n],!0)})),i)return new t(i);throw new Error("Unknown key name: ".concat(e))}}]),t}(),l=function(){function t(e){var n=this;Object(i.a)(this,t);var r=e.split("+").map((function(t){return t.trim()}));if(this.shift=!1,this.ctrl=!1,this.meta=!1,this.alt=!1,t.fns.forEach((function(t){var e=r.indexOf(t);e>=0&&(r.splice(e,1),n[t]=!0)})),1!==r.length)throw new Error("Invalid keybind source: ".concat(e));this.key=c.fromString(r[0])}return Object(r.a)(t,[{key:"match",value:function(e){var n=this;return!t.fns.some((function(t){return n[t]!==e["".concat(t,"Key")]}))&&this.key.equals(c.fromEvent(e))}}]),t}();l.fns=["alt","shift","ctrl","meta"];var u=Object(r.a)((function t(e,n){Object(i.a)(this,t),this.combination=e,this.handler=n}));var h=function(){function t(){var e=this;Object(i.a)(this,t),["handler","untrack","track","unbind","bind","dispose"].forEach((function(t){e[t]=e[t].bind(e)})),this.keybinds=new Set,this.enable=!1}return Object(r.a)(t,[{key:"handler",value:function(t){if(!t.repeat){var e,n=s(this.keybinds);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(i.combination.match(t)){t.stopImmediatePropagation(),t.preventDefault(),i.handler(t);break}}}catch(r){n.e(r)}finally{n.f()}}}},{key:"on",value:function(t,e){var n=new u(new l(t),e);return this.keybinds.add(n),n}},{key:"bind",value:function(t){var e=this;return t.map((function(t){return e.on(t.keys,t.handler)}))}},{key:"unbind",value:function(t){var e=this;t.forEach((function(t){return e.keybinds.delete(t)}))}},{key:"dispose",value:function(){this.keybinds.clear()}},{key:"track",value:function(){var t,e;this.enable||(t=this.handler,window&&window.addEventListener("keydown",t,e),this.enable=!0)}},{key:"untrack",value:function(){var t,e;t=this.handler,window&&window.removeEventListener("keydown",t,e),this.enable=!1}}],[{key:"instance",get:function(){return t.self||(t.self=new t),t.self}}]),t}();h.self=null},1258:function(t,e,n){},1259:function(t,e,n){},1260:function(t,e,n){},1394:function(t,e,n){},1395:function(t,e,n){"use strict";n(1258)},1396:function(t,e,n){"use strict";n(1259)},1397:function(t,e,n){"use strict";n(1260)},1460:function(t,e,n){"use strict";n.r(e);n(12),n(16),n(19),n(3),n(26),n(9),n(27);var i=n(2),r=(n(87),n(202));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=Math.floor,c=Math.max,l=Math.min;function u(t){return{x:void 0!==t.clientX?t.clientX:t.touches[0].clientX,y:void 0!==t.clientY?t.clientY:t.touches[0].clientY}}var h={props:{type:{required:!0,type:String},snap:{type:[Number,String],default:1},id:{required:!0,type:Number},evt:{default:null},set:{default:null}},data:function(){return{drag:!1,percent:0,pixel:0,display:"none",left:0,top:0}},computed:o(o({},Object(r.b)("canvas",["client","origin","scaled","track"])),{},{eventsDetermine:function(){return this.mobile?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"}},originSize:function(){return"v"===this.type?this.origin.width:this.origin.height},scaledSize:function(){return"v"===this.type?this.scaled.width:this.scaled.height},cursor:function(){return"v"===this.type?"col-resize":"row-resize"},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE},info:function(){var t=this.display,e=this.left,n=this.top;return this.drag&&(t="block"),this.pixel<0&&(t="none"),{display:t,left:e,top:n}}}),watch:{drag:function(t){document.body.style.cursor=t?this.cursor:"auto"},set:function(t){this.setPercent(t).setGuide()}},methods:{addEvents:function(){var t=this.eventsDetermine,e=t.move,n=t.end;document.addEventListener(e,this.mouseMove),document.addEventListener(n,this.mouseUp)},removeEvents:function(){var t=this.eventsDetermine,e=t.move,n=t.end;document.removeEventListener(e,this.mouseMove),document.removeEventListener(n,this.mouseUp)},update:function(t){var e=t.id,n=t.percent,i=t.pixel;i<0&&(n=null,i=null),this.$emit("update:guide",{id:e,percent:n,pixel:i})},setGuide:function(){var t=0,e=0;switch(this.type){case"v":t=this.percent+"%";break;case"h":e=this.percent+"%"}return this.$el.style.left=t,this.$el.style.top=e,this},setInfo:function(t){var e,n,i=t.clientX,r=t.clientY;if("v"===this.type)switch(n=c(l(r,this.scaled.height)-27,2),e=2,!0){case i>this.scaled.width:e=-52;break;case i>this.scaled.width-52:e=this.scaled.width-i-52}if("h"===this.type)switch(e=c(l(i,this.scaled.width)-52,2),n=2,!0){case r>this.scaled.height:n=-27;break;case r>this.scaled.height-27:n=this.scaled.height-r-27}return this.left=e+"px",this.top=n+"px",this.pixel>=0&&(this.display="block"),this},calcPercent:function(t){var e=t.clientX,n=t.clientY,i="v"===this.type?e:n,r=Number(this.snap);return i=c(l(i,this.scaledSize),-30),i/=this.scaled.scale,i=a(i),i-=i%r,this.percent=100*i/this.originSize,this.pixel=i,this},setPercent:function(t){var e=t.percent,n=t.pixel;return this.percent=e,this.pixel=n,this},mouseUp:function(){this.removeEvents(),this.drag=!1,this.update(this)},mouseMove:function(t){var e=u(t),n=e.x,i=e.y;n-=this.client.left+this.track.x,i-=this.client.top+this.track.y,this.calcPercent({clientX:n,clientY:i}).setInfo({clientX:n,clientY:i}).setGuide()},mouseDown:function(t){var e=u(t),n=e.x,i=e.y;this.mouseMove({clientX:n,clientY:i}),this.addEvents(),this.drag=!0},mouseOver:function(){this.display="block"},mouseOut:function(){this.display="none"}},beforeDestroy:function(){document.body.style.cursor="auto",this.display="none",this.removeEvents()},mounted:function(){var t=this.eventsDetermine.start;switch(this.$el.addEventListener(t,this.mouseDown),this.mobile||(this.$el.addEventListener("mouseover",this.mouseOver),this.$el.addEventListener("mouseout",this.mouseOut)),!0){case null!==this.evt:this.mouseDown(this.evt);break;case null!==this.set:this.setPercent(this.set).setGuide()}}},d=(n(1396),n(250)),f=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"guide track",class:t.type},[e("div",{staticClass:"info unselectable track",style:t.info,domProps:{innerHTML:t._s(t.pixel+"px")}})])}),[],!1,null,"6557ad6a",null);e.default=f.exports},1461:function(t,e,n){"use strict";n.r(e);var i=n(1093),r=n(1118),s=n(1097),o=n(1094),a=n(1106),c=(n(12),n(16),n(19),n(3),n(26),n(9),n(27),n(2));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={props:["canvas"],computed:{guidesList:function(){return this.$store.state.canvas.guidesList},gridList:function(){return this.$store.state.canvas.gridList},controls:function(){return this.$store.state.canvas.controls},themeClasses:function(){var t,e=this.$vuetify.theme,n=this.color;return t={},Object(c.a)(t,e.dark?"theme--dark":"theme--lignt",!0),Object(c.a)(t,n,!0),t},color:function(){return this.$store.state.app.color},list:function(){return[{text:this.controls.guides?"Hide guides":"Show guides",hotkey:"Ctrl + Alt + G",alias:"guides",disabled:!this.guidesList.length},{text:"Clear guides",hotkey:"Ctrl + Alt + D",alias:"clear",disabled:!this.guidesList.length},{text:"Open guides",hotkey:"Ctrl + Alt + O",alias:"open",disabled:!this.gridList.length},{text:"Save guides",hotkey:"Ctrl + Alt + M",alias:"save",disabled:!this.guidesList.length},{text:"Snap to",hotkey:"Ctrl + Alt + C",alias:"snap",disabled:!1},{text:this.grid?"Hide grid":"Show grid",hotkey:"Ctrl + Alt + L",alias:"grid",disabled:!1}]}},watch:{canvas:function(t){t&&t.on("grid:toggle",this.onToggle)}},data:function(){return{grid:!1}},methods:{updateControls:function(t){this.$store.commit("canvas/set",{controls:u(u({},this.controls),t)})},clearGuidesList:function(){this.$store.commit("canvas/set",{guidesList:[]})},handlerReload:function(){this.canvas&&(this.canvas.off("grid:toggle",this.onToggle),this.canvas.on("grid:toggle",this.onToggle)),this.grid=!1},onToggle:function(){this.grid=(this.canvas||{}).showGrid},choice:function(t){if(!t.disabled){var e=this.controls,n=e.guides,i=e.open,r=e.save,s=e.snap,o=e.info,a=this.grid;switch(t.alias){case"guides":this.updateControls({guides:!n});break;case"open":this.updateControls({open:!i,save:!1,snap:!1});break;case"save":this.updateControls({save:!r,open:!1,snap:!1});break;case"snap":this.updateControls({snap:!s,open:!1,save:!1});break;case"grid":this.updateControls({grid:!a});break;case"info":this.updateControls({info:!o});break;case"clear":this.clearGuidesList()}}}},mounted:function(){var t=this;this.$bus.$on("canvas:reload",(function(){t.canvas&&t.handlerReload()}))}},d=(n(1397),n(250)),f=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rg-menu-wrapper unselectable track",class:t.themeClasses},[e(a.a,{attrs:{"content-class":"rulers-menu",transition:"slide-x-transition","close-on-content-click":"","close-on-click":"","max-width":"210px","min-width":"210px",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[e(i.a,t._g({attrs:{dense:""}},r),[t._v("\n        mdi-menu\n      ")])]}}])},[t._v(" "),e(r.a,{key:t.grid,attrs:{dense:""}},t._l(t.list,(function(n,i){return e(s.a,{key:i,attrs:{disabled:n.disabled},on:{click:function(e){return e.stopPropagation(),t.choice(n)}}},[e(o.b,{staticClass:"unselectable"},[e("span",{staticClass:"menu-title"},[t._v("\n            "+t._s(n.text)+"\n          ")]),t._v(" "),e("span",{staticClass:"menu-hotkey"},[t._v("\n            "+t._s(n.hotkey)+"\n          ")])])],1)})),1)],1)],1)}),[],!1,null,"7555c2fa",null);e.default=f.exports},1470:function(t,e,n){"use strict";n.r(e);n(12),n(16),n(19),n(3),n(26),n(9),n(27);var i=n(2),r=(n(52),n(14),n(202));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a={props:{type:{required:!0,type:String}},computed:o(o(o({},Object(r.b)("canvas",["origin","scaled"])),Object(r.b)("app",["color"])),{},{eventsDetermine:function(){return this.mobile?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"}},themeClasses:function(){var t;return t={},Object(i.a)(t,"theme--".concat(this.$vuetify.theme.dark?"dark":"light"),!0),Object(i.a)(t,this.color,!0),t},class:function(){return o(Object(i.a)({unselectable:!0,ruler:!0},this.type,!0),this.themeClasses)},step:function(){return this.scaledSize?this.scaledSize/this.count:1},originSize:function(){var t=this.origin||{},e=t.height,n=void 0===e?0:e,i=t.width,r=void 0===i?0:i;return"v"===this.type?n:r},scaledSize:function(){var t=this.scaled||{},e=t.height,n=void 0===e?0:e,i=t.width,r=void 0===i?0:i;return"v"===this.type?n:r},count:function(){return this.originSize?this.originSize/10:1},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}}),methods:{label:function(t){return{l10:t<50,l100:t>=50&&t<500,l1000:t>=500}},createGuide:function(t){var e=function(t){return{x:void 0!==t.clientX?t.clientX:t.touches[0].clientX,y:void 0!==t.clientY?t.clientY:t.touches[0].clientY}}(t),n=e.x,i=e.y;this.$store.commit("canvas/createGuide",{evt:{clientX:n,clientY:i},type:this.type,set:null})}},render:function(t){var e=this,n=this.eventsDetermine.start,r=Math.ceil(this.count),s=r<1e3?r-3:r-5,o=0;return t("div",{on:Object(i.a)({},n,this.createGuide),class:this.class},Array.from({length:r},(function(n,i){var r={style:{}},a=[];return i>0&&(o+=e.step-1),i%10==0?(r.class="milestone",i>0&&a.push(t("span",{class:["label track",e.label(i)]},"v"===e.type||i<=s?10*i:[]))):r.class=i%5==0?"major":"common",r.class+=" track",r.style["h"===e.type?"left":"top"]=o+"px",t("span",r,a)})))}},c=(n(1395),n(250)),l=Object(c.a)(a,undefined,undefined,!1,null,"3c61c144",null);e.default=l.exports},1498:function(t,e,n){"use strict";n(1394)},1674:function(t,e,n){"use strict";n.r(e);var i,r=n(1),s=n(0),o=n.n(s),a=n(163),c=n(37),l=n(1215),u="undefined"!=typeof TouchEvent,h={x:0,y:0},d=!1,f=function(t,e){return new i.Point(t.clientX+.5*(e.clientX-t.clientX),t.clientY+.5*(e.clientY-t.clientY))},p={data:function(){return{bindings:l.a.instance,events:[{event:"click",handler:null}],offmap:[],bg1:a.bg1,bg2:a.bg2}},computed:{guidesList:{set:function(t){this.$store.commit("canvas/set",{guidesList:t})},get:function(){return this.$store.state.canvas.guidesList}},gridList:{set:function(t){this.$store.commit("canvas/set",{gridList:t})},get:function(){return this.$store.state.canvas.gridList}},track:{get:function(){return this.$store.state.canvas.track||{x:0,y:0}},set:function(t){this.$store.commit("canvas/set",{track:t})}},controls:function(){return this.$store.state.canvas.controls},x:function(){return this.$store.state.canvas.xSnap},y:function(){return this.$store.state.canvas.ySnap}},watch:{guidesList:function(t){t.length||this.$store.commit("canvas/set",{gridName:null})}},methods:{onDown:function(t){if(u&&t instanceof TouchEvent){var e=t.targetTouches;e.length>=2&&(t.stopPropagation(),t.preventDefault(),h=f(e[0],e[1]),d=!0)}},onMove:function(t){if(u&&t instanceof TouchEvent){var e=t.targetTouches;if(d){t.stopPropagation(),t.preventDefault();var n=e.length>=2?f(e[0],e[1]):new i.Point(e[0].clientX,e[0].clientY),r=n.subtract(h),s=r.x,o=r.y;h=n,this.track=new i.Point(this.track.x+s,this.track.y+o)}}},onUp:function(t){u&&t instanceof TouchEvent&&(d=!!t.targetTouches.length)},clearGuidesList:function(){this.guidesList=[]},openDialog:function(){this.$store.commit("canvas/toggleOpenDialog")},saveDialog:function(){this.$store.commit("canvas/toggleSaveDialog")},snapDialog:function(){this.$store.commit("canvas/toggleSnapDialog")},toggleGuides:function(){this.$store.commit("canvas/toggleGuides")},toggleGrid:function(){this.$store.commit("canvas/toggleGrid")},toggleInfo:function(){this.$store.commit("canvas/toggleInfo")},updateGuide:function(t){var e=t.id,n=t.percent,i=t.pixel;this.$store.commit("canvas/updateGuide",{id:e,percent:n,pixel:i})}},beforeDestroy:function(){this.bindings.unbind(this.offmap)},beforeMount:function(){return Object(r.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=i,t.t0){t.next=5;break}return t.next=4,c.Fabric.instance;case 4:i=t.sent;case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.offmap=t.bindings.bind([{keys:"ctrl+alt+d",handler:t.clearGuidesList},{keys:"ctrl+alt+g",handler:t.toggleGuides},{keys:"ctrl+alt+l",handler:t.toggleGrid},{keys:"ctrl+alt+c",handler:t.snapDialog},{keys:"ctrl+alt+m",handler:t.saveDialog},{keys:"ctrl+alt+o",handler:t.openDialog}]),e.prev=1,e.next=4,t.$ls.get("image-editor-grids",[]);case 4:t.gridList=e.sent,t.gridList.length&&t.$store.commit("canvas/initGrid"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},v=(n(1498),n(250)),g=Object(v.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rg-overlay",style:{background:"url(".concat(t.$vuetify.theme.dark?t.bg2:t.bg1,") repeat"),left:t.track.x+"px",top:t.track.y+"px"},on:{contextmenu:function(e){return e.preventDefault(),e.stopPropagation(),t.$emit("context",e)},"!touchstart":function(e){return t.onDown.apply(null,arguments)},"!touchmove":function(e){return t.onMove.apply(null,arguments)},"!touchend":function(e){return t.onUp.apply(null,arguments)}}},[t._l(["h","v"],(function(t){return[e("graph-ruler",{key:t,attrs:{type:t}})]})),t._v(" "),t._t("default"),t._v(" "),t._l(t.guidesList,(function(n,i){return[e("graph-guide",{directives:[{name:"show",rawName:"v-show",value:t.controls.guides,expression:"controls.guides"}],key:i,attrs:{snap:"v"===n.type?t.x:t.y,type:n.type,evt:n.evt,set:n.set,id:i},on:{"update:guide":t.updateGuide}})]})),t._v(" "),e("graph-rulers-menu",{attrs:{canvas:t.$parent.canvas}})],2)}),[],!1,null,"f8ceb30a",null);e.default=g.exports;installComponents(g,{GraphRuler:n(1470).default,GraphGuide:n(1460).default,GraphRulersMenu:n(1461).default})}}]);