(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1072:function(t,e,n){"use strict";var i=n(1093);e.a=i.a},1073:function(t,e,n){"use strict";n(1074);var i=n(5);e.a=i.default.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},1074:function(t,e,n){"use strict";var i=n(6),r=n(367);i({target:"String",proto:!0,forced:n(368)("small")},{small:function(){return r(this,"small","","")}})},1080:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(2),r=(n(25),n(5)),s=n(72);function o(t,e){return function(){return Object(s.c)("The ".concat(t," component must be used inside a ").concat(e))}}function a(t,e,n){var s=e&&n?{register:o(e,n),unregister:o(e,n)}:null;return r.default.extend({name:"registrable-inject",inject:Object(i.a)({},t,{default:s})})}},1084:function(t,e,n){},1093:function(t,e,n){"use strict";n(12),n(16),n(19),n(26),n(9),n(27);var i,r=n(2),s=(n(1074),n(3),n(43),n(57),n(24),n(87),n(140),n(101),n(32),n(1084),n(1088)),o=n(251),a=n(1073),l=n(467),c=n(47),u=n(5),d=n(466);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(i||(i={}));var p=Object(d.a)(s.a,o.a,a.a,l.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c.C)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c.y)(t).find((function(e){return t[e]}));return e&&i[e]||Object(c.h)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:f({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=f(f({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=f(f({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),r="material-icons",s=t.indexOf("-"),o=s<=-1;o?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(r=t.slice(0,s))&&(r=""),i.class[r]=!0,i.class[t]=!o;var a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=u.default.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,i=e.children,r="";return n.domProps&&(r=n.domProps.textContent||n.domProps.innerHTML||r,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,r?[r]:i)}})},1097:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p}));n(25);var i=n(470);function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(i))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var s="transition".concat(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,i=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,i=e.top,r=e.left,s=e.width,o=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=i||"",t.style.left=r||"",t.style.width=s||"",t.style.height=o||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(s,Object(i.a)(n.data,o),n.children)}}}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",Object(i.a)(r.data,{props:{name:t},on:e}),r.children)}}}var a=n(2),l=n(47),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",i="offset".concat(Object(l.F)(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(a.a)({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var s="".concat(e[i],"px");e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave:function(t){t._initialStyle=Object(a.a)({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[i],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},u=(s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition")),d=s("scale-transition"),h=(s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),f=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c())),p=o("expand-x-transition",c("",!0))},1113:function(t,e,n){"use strict";var i=n(2),r=n(5);var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(i.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(i.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=s},1123:function(t,e,n){"use strict";function i(t){if("function"!=typeof t.getRootNode){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,"a",(function(){return i}))},1258:function(t,e,n){},1395:function(t,e,n){"use strict";n(1258)},1459:function(t,e,n){"use strict";n.r(e);var i=n(1093),r=n(1119),s=n(1098),o=n(1094),a=n(1107),l=(n(12),n(16),n(19),n(3),n(26),n(9),n(27),n(2));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={props:["canvas"],computed:{guidesList:function(){return this.$store.state.canvas.guidesList},gridList:function(){return this.$store.state.canvas.gridList},controls:function(){return this.$store.state.canvas.controls},themeClasses:function(){var t,e=this.$vuetify.theme,n=this.color;return t={},Object(l.a)(t,e.dark?"theme--dark":"theme--lignt",!0),Object(l.a)(t,n,!0),t},color:function(){return this.$store.state.app.color},list:function(){return[{text:this.controls.guides?"Hide guides":"Show guides",hotkey:"Ctrl + Alt + G",alias:"guides",disabled:!this.guidesList.length},{text:"Clear guides",hotkey:"Ctrl + Alt + D",alias:"clear",disabled:!this.guidesList.length},{text:"Open guides",hotkey:"Ctrl + Alt + O",alias:"open",disabled:!this.gridList.length},{text:"Save guides",hotkey:"Ctrl + Alt + M",alias:"save",disabled:!this.guidesList.length},{text:"Snap to",hotkey:"Ctrl + Alt + C",alias:"snap",disabled:!1},{text:this.grid?"Hide grid":"Show grid",hotkey:"Ctrl + Alt + L",alias:"grid",disabled:!1}]}},watch:{canvas:function(t){t&&t.on("grid:toggle",this.onToggle)}},data:function(){return{grid:!1}},methods:{updateControls:function(t){this.$store.commit("canvas/set",{controls:u(u({},this.controls),t)})},clearGuidesList:function(){this.$store.commit("canvas/set",{guidesList:[]})},handlerReload:function(){this.canvas&&(this.canvas.off("grid:toggle",this.onToggle),this.canvas.on("grid:toggle",this.onToggle)),this.grid=!1},onToggle:function(){this.grid=(this.canvas||{}).showGrid},choice:function(t){if(!t.disabled){var e=this.controls,n=e.guides,i=e.open,r=e.save,s=e.snap,o=e.info,a=this.grid;switch(t.alias){case"guides":this.updateControls({guides:!n});break;case"open":this.updateControls({open:!i,save:!1,snap:!1});break;case"save":this.updateControls({save:!r,open:!1,snap:!1});break;case"snap":this.updateControls({snap:!s,open:!1,save:!1});break;case"grid":this.updateControls({grid:!a});break;case"info":this.updateControls({info:!o});break;case"clear":this.clearGuidesList()}}}},mounted:function(){var t=this;this.$bus.$on("canvas:reload",(function(){t.canvas&&t.handlerReload()}))}},h=(n(1395),n(250)),f=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rg-menu-wrapper unselectable track",class:t.themeClasses},[e(a.a,{attrs:{"content-class":"rulers-menu",transition:"slide-x-transition","close-on-content-click":"","close-on-click":"","max-width":"210px","min-width":"210px",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[e(i.a,t._g({attrs:{dense:""}},r),[t._v("\n        mdi-menu\n      ")])]}}])},[t._v(" "),e(r.a,{key:t.grid,attrs:{dense:""}},t._l(t.list,(function(n,i){return e(s.a,{key:i,attrs:{disabled:n.disabled},on:{click:function(e){return e.stopPropagation(),t.choice(n)}}},[e(o.b,{staticClass:"unselectable"},[e("span",{staticClass:"menu-title"},[t._v("\n            "+t._s(n.text)+"\n          ")]),t._v(" "),e("span",{staticClass:"menu-hotkey"},[t._v("\n            "+t._s(n.hotkey)+"\n          ")])])],1)})),1)],1)],1)}),[],!1,null,"7555c2fa",null);e.default=f.exports}}]);