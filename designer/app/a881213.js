(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1077:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(2),s=i(1080);function o(t,e,i){return Object(s.a)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(n.a)({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}o("itemGroup")},1089:function(t,e,i){"use strict";var n=i(13),s=(i(3),i(51),i(1123));function o(){return!0}function a(t,e,i){if(!t||!1===r(t,i))return!1;var o=Object(s.a)(e);if("undefined"!=typeof ShadowRoot&&o instanceof ShadowRoot&&o.host===t.target)return!1;var a=("object"===Object(n.a)(i.value)&&i.value.include||function(){return[]})();return a.push(e),!a.some((function(e){return e.contains(t.target)}))}function r(t,e){return("object"===Object(n.a)(e.value)&&e.value.closeConditional||o)(t)}function u(t,e){var i=Object(s.a)(t);e(document),"undefined"!=typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}var c={inserted:function(t,e,i){var n=function(i){return function(t,e,i){var n="function"==typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&a(t,e,i)&&setTimeout((function(){r(t,i)&&n&&n(t)}),0)}(i,t,e)},s=function(i){t._clickOutside.lastMousedownWasOutside=a(i,t,e)};u(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",s,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:n,onMousedown:s}},unbind:function(t,e,i){t._clickOutside&&(u(t,(function(e){var n;if(e&&(null===(n=t._clickOutside)||void 0===n?void 0:n[i.context._uid])){var s=t._clickOutside[i.context._uid],o=s.onClick,a=s.onMousedown;e.removeEventListener("click",o,!0),e.removeEventListener("mousedown",a,!0)}})),delete t._clickOutside[i.context._uid])}};e.a=c},1095:function(t,e,i){"use strict";var n={inserted:function(t,e,i){var n=e.value,s=e.options||{passive:!0};window.addEventListener("resize",n,s),t._onResize=Object(t._onResize),t._onResize[i.context._uid]={callback:n,options:s},e.modifiers&&e.modifiers.quiet||n()},unbind:function(t,e,i){var n;if(null===(n=t._onResize)||void 0===n?void 0:n[i.context._uid]){var s=t._onResize[i.context._uid],o=s.callback,a=s.options;window.removeEventListener("resize",o,a),delete t._onResize[i.context._uid]}}};e.a=n},1099:function(t,e,i){"use strict";i(51);var n=i(5);e.a=n.default.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},1107:function(t,e,i){"use strict";i(12),i(16),i(19),i(26),i(9),i(27);var n=i(33),s=i(2),o=(i(87),i(101),i(3),i(52),i(14),i(25),i(140),i(51),i(43),i(57),i(1116),i(1165)),a=i(1127),r=i(1135),u=i(1102),c=i(1164),l=i(1099),h=i(1118),d=i(467),f=i(1089),v=i(1095),p=i(466),m=i(72),g=i(47),O=i(473);function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var x=Object(p.a)(u.a,r.a,l.a,h.a,d.a,c.a);e.a=x.extend({name:"v-menu",directives:{ClickOutside:f.a,Resize:v.a},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(g.h)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){return(this.auto?"200px":Object(g.h)(this.maxHeight))||"0"},calculatedMaxWidth:function(){return Object(g.h)(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(g.h)(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(g.h)(Math.min(e,t))||"0"},calculatedTop:function(){return(this.auto?Object(g.h)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop())||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted");var n=this.$refs.content.scrollTop,s=this.$refs.content.clientHeight;n>i.offsetTop-8?Object(O.b)(i.offsetTop-i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):n+s<i.offsetTop+i.clientHeight+8&&Object(O.b)(i.offsetTop-s+2*i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m.e)("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==g.x.tab){if(t.keyCode===g.x.down)this.nextTile();else if(t.keyCode===g.x.up)this.prevTile();else if(t.keyCode===g.x.end)this.lastTile();else if(t.keyCode===g.x.home)this.firstTile();else{if(t.keyCode!==g.x.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=a.a.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?y(y({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=c.a.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(n.a)(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:y(y({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:y(y(y({},this.rootThemeClasses),this.roundedClasses),{},Object(s.a)({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){e.target.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){var i;(null===(i=e.$refs.content)||void 0===i?void 0:i.contains(t.relatedTarget))||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===g.x.esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[g.x.up,g.x.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this;return t("div",{staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]},[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(o.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},1115:function(t,e,i){"use strict";var n=i(5),s=i(47);e.a=n.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:s.k}}})},1116:function(t,e,i){},1130:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i(12),i(16),i(26),i(27);var n=i(2),s=(i(87),i(19),i(3),i(94),i(9),i(32),i(101),i(83),i(1145),i(1115)),o=i(1113),a=i(467),r=i(466),u=i(72);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var l=Object(r.a)(s.a,o.a,a.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.valueComparator(t.internalValue,e)};var e=this.internalValue;return Array.isArray(e)?function(i){return e.some((function(e){return t.valueComparator(e,i)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(u.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return void 0===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(i)<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=this,i=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),n=i.findIndex((function(i){return e.valueComparator(i,t)}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},1145:function(t,e,i){},1165:function(t,e,i){"use strict";i(101),i(3);var n=i(467);e.a=n.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})}}]);