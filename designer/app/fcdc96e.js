(window.webpackJsonp=window.webpackJsonp||[]).push([[138,8],{1128:function(t,e,i){},1135:function(t,e,i){"use strict";i(12),i(16),i(19),i(26),i(9),i(27);var n=i(69),o=i(33),s=i(2),r=(i(87),i(1078),i(1079),i(3),i(58),i(43),i(490),i(1128),i(1133)),a=(i(25),i(1166),i(467)),l=i(466);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var h=Object(l.a)(a.a).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var i=e.props,n=parseInt(i.max,10),o=parseInt(i.value,10),s=n?"".concat(o," / ").concat(n):String(i.value);return t("div",{staticClass:"v-counter",class:u({"error--text":n&&o>n},Object(a.b)(e))},s)}}),d=i(1193),f=i(471),p=i(72),v=i(5);var b=i(1111),g=i(1194),m=i(1095),y=i(1080),w=i(1122),O=i(47),x=["title"];function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function j(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var S,I=Object(l.a)(r.a,(S={onVisible:["onResize","tryAutofocus"]},v.default.extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){f.a.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){f.a.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(t,e,i){if(this.isIntersecting=i,i)for(var n=0,o=S.onVisible.length;n<o;n++){var s=this[S.onVisible[n]];"function"!=typeof s?Object(p.c)(S.onVisible[n]+" method is not available on the instance but referenced in intersectable mixin options"):s()}}}})),b.a),k=["color","file","time","date","datetime-local","week","month"];e.a=I.extend().extend({name:"v-text-field",directives:{resize:m.a,ripple:y.a},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return j(j({},r.a.options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var t=g.a.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue:function(){return"function"==typeof this.counterValue?this.counterValue(this.internalValue):Object(o.a)((this.internalValue||"").toString()).length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return r.a.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty:function(){var t;return(null===(t=this.lazyValue)||void 0===t?void 0:t.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||k.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel:function(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue:function(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){this.$attrs.hasOwnProperty("box")&&Object(p.a)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(p.a)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(p.c)("shaped should be used with either filled or outlined",this)},mounted:function(){var t=this;this.$watch((function(){return t.labelValue}),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((function(){t.isBooted=!0,requestAnimationFrame((function(){t.isIntersecting||t.onResize()}))}))},methods:{focus:function(){this.onFocus()},blur:function(t){var e=this;window.requestAnimationFrame((function(){e.$refs.input&&e.$refs.input.blur()}))},clearableCallback:function(){var t=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return t.internalValue=null}))},genAppendSlot:function(){var t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=r.a.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon:function(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter:function(){var t,e,i;if(!this.hasCounter)return null;var n=!0===this.counter?this.attrs$.maxlength:this.counter,o={dark:this.dark,light:this.light,max:n,value:this.computedCounterValue};return null!==(i=null===(e=(t=this.$scopedSlots).counter)||void 0===e?void 0:e.call(t,{props:o}))&&void 0!==i?i:this.$createElement(h,{props:o})},genControl:function(){return r.a.options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(d.a,t,this.$slots.label||this.label)},genLegend:function(){var t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(O.h)(t)}},[e])},genInput:function(){var t=Object.assign({},this.listeners$);delete t.change;var e=this.attrs$,i=(e.title,Object(n.a)(e,x));return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:j(j({},i),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages:function(){if(!this.showDetails)return null;var t=r.a.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__".concat(t),ref:t},this[t])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input){var e=Object(w.a)(this.$el);if(e)return e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))}},onInput:function(t){var e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown:function(t){t.keyCode===O.x.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),r.a.options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),r.a.options.methods.onMouseUp.call(this,t)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){if(!this.autofocus||"undefined"==typeof document||!this.$refs.input)return!1;var t=Object(w.a)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize:function(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},1166:function(t,e,i){},1228:function(t,e,i){},1301:function(t,e,i){},1415:function(t,e,i){"use strict";i(12),i(16),i(19),i(3),i(26),i(9),i(27);var n=i(2),o=(i(87),i(51),i(1228),i(1135)),s=i(466);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var a=Object(s.a)(o.a);e.a=a.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){Object(n.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var i;t?e.calculateInputHeight():null===(i=e.$refs.input)||void 0===i||i.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=o.a.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},1416:function(t,e,i){},1448:function(t,e,i){(function(i){var n,o,s;o=[],n=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,i){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,i)},n.onerror=function(){console.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i&&i.global===i?i:void 0,a=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(t,e,i){var a=r.URL||r.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?s(l):o(l.href)?n(t,e,i):s(l,l.target="_blank")):(l.href=a.createObjectURL(t),setTimeout((function(){a.revokeObjectURL(l.href)}),4e4),setTimeout((function(){s(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,r){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,r),i);else if(o(t))n(t,i,r);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout((function(){s(a)}))}}:function(t,e,i,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,i);var s="application/octet-stream"===t.type,l=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&l||a)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},u.readAsDataURL(t)}else{var h=r.URL||r.webkitURL,d=h.createObjectURL(t);o?o.location=d:location.href=d,o=null,setTimeout((function(){h.revokeObjectURL(d)}),4e4)}});r.saveAs=l.saveAs=l,t.exports=l},void 0===(s="function"==typeof n?n.apply(e,o):n)||(t.exports=s)}).call(this,i(50))},1499:function(t,e,i){"use strict";var n=i(2),o=(i(87),i(1301),i(1126)),s=i(251),r=i(1134),a=i(1102),l=i(1163),c=i(47),u=i(72),h=i(466);e.a=Object(h.a)(s.a,r.a,a.a,l.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=o+e.width/2-i.width/2:(this.left||this.right)&&(s=o+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-i.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(c.h)(this.maxWidth),minWidth:Object(c.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(c.t)(this,"activator",!0)&&Object(u.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===c.x.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n.a)(t,this.contentClass,!0),Object(n.a)(t,"menuable__content__active",this.isActive),Object(n.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},1510:function(t,e,i){"use strict";i(1416)},1683:function(t,e,i){"use strict";i.r(e);var n=i(1091),o=i(1142),s=i(1090),r=i(1093),a=i(1070),l=i(1309),c=i(1556),u=i(1668),h=i(1415),d=i(1499),f=(i(3),i(14),i(15),i(255)),p=i(1448),v=i.n(p),b={props:{b64data:String,b64fake:String},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE},color:function(){return this.$store.state.app.color}},data:function(){return{url:null}},methods:{copy:function(){var t=this;i.e(96).then(i.bind(null,1549)).then((function(e){return(0,e.writeText)(t.b64data)})).then((function(){return t.$bus.$emit("snack",{content:"graph.copied",color:"success"})})).catch((function(){return t.$bus.$emit("snack",{content:"common.error",color:"error"})}))},saveDataURL:function(){var t=Object(f.rndstring)()+".txt";v()(new Blob([this.b64data],{type:"text/plain;charset=utf-8"}),t)}},mounted:function(){var t=this;this.$nextTick().then((function(){t.$refs.textarea.$refs.input.setAttribute("oncopy","return false;"),t.$refs.textarea.$refs.input.setAttribute("tabindex","-1")}))}},g=(i(1510),i(250)),m=Object(g.a)(b,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"dataurl-dialog__card",class:{fullscreen:t.mobile},attrs:{elevation:"0"}},[t.mobile&&t.$store.state.app.vkapp?e(l.a,{attrs:{height:"26px",color:"transparent"}}):t._e(),t._v(" "),t.mobile&&t.$store.state.app.vkapp?[e(a.a,{staticClass:"dataurl-dialog__btn-wrapper",attrs:{"justify-start":""}},[e(n.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[e(r.a,[t._v("mdi-window-close")])],1)],1)]:[e(u.a,{staticClass:"dataurl-dialog__tabs-header",attrs:{color:t.color,height:"60px","hide-slider":"","show-arrows":"",grow:""}},[e(c.a,{attrs:{ripple:!1},on:{click:function(e){return t.$emit("close")}}},[t._v("\n        "+t._s(t.mobile?"<":"")+" BASE64 DATAURL\n      ")])],1)],t._v(" "),e(s.b,{staticClass:"dataurl-dialog__card-pane"},[e(a.a,{staticClass:"pane"},[e(h.a,{ref:"textarea",attrs:{label:"Base64",color:t.color,"hide-details":"","no-resize":"",readonly:"",filled:""},model:{value:t.b64fake,callback:function(e){t.b64fake=e},expression:"b64fake"}}),t._v(" "),e("div",{staticClass:"dataurl__area--tools"},[e(d.a,{attrs:{disabled:t.mobile,top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var o=i.on;return[e(n.a,t._g({attrs:{color:t.color,small:"",icon:""},on:{click:t.copy}},o),[e(r.a,{attrs:{color:t.color}},[t._v("mdi-content-copy")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.$t("graph.clipboard")))])]),t._v(" "),e(d.a,{attrs:{disabled:t.mobile,top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var o=i.on;return[e(n.a,t._g({attrs:{color:t.color,small:"",icon:""},on:{click:t.saveDataURL}},o),[e(r.a,{attrs:{color:t.color}},[t._v("mdi-file-outline")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.$t("graph.save_as_file")))])])],1)],1)],1)],2)}),[],!1,null,"c8a1ad38",null);e.default=m.exports}}]);