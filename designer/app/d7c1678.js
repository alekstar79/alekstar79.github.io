(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1088:function(t,e,n){"use strict";var o=n(13),r=(n(3),n(51),n(1122));function i(){return!0}function a(t,e,n){if(!t||!1===s(t,n))return!1;var i=Object(r.a)(e);if("undefined"!=typeof ShadowRoot&&i instanceof ShadowRoot&&i.host===t.target)return!1;var a=("object"===Object(o.a)(n.value)&&n.value.include||function(){return[]})();return a.push(e),!a.some((function(e){return e.contains(t.target)}))}function s(t,e){return("object"===Object(o.a)(e.value)&&e.value.closeConditional||i)(t)}function c(t,e){var n=Object(r.a)(t);e(document),"undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}var u={inserted:function(t,e,n){var o=function(n){return function(t,e,n){var o="function"==typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&a(t,e,n)&&setTimeout((function(){s(t,n)&&o&&o(t)}),0)}(n,t,e)},r=function(n){t._clickOutside.lastMousedownWasOutside=a(n,t,e)};c(t,(function(t){t.addEventListener("click",o,!0),t.addEventListener("mousedown",r,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:o,onMousedown:r}},unbind:function(t,e,n){t._clickOutside&&(c(t,(function(e){var o;if(e&&(null===(o=t._clickOutside)||void 0===o?void 0:o[n.context._uid])){var r=t._clickOutside[n.context._uid],i=r.onClick,a=r.onMousedown;e.removeEventListener("click",i,!0),e.removeEventListener("mousedown",a,!0)}})),delete t._clickOutside[n.context._uid])}};e.a=u},1131:function(t,e,n){!function(t){"use strict";var e=function(){return(e=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function n(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,r++)o[r]=i[a];return o}function o(t,n){var o,r,i=(o={current:0,next:function(){return++this.current}},r={},{add:function(t,e){var n=null!=e?e:o.next();return r[n]=t,n},resolve:function(t,e,n){var o=r[t];o&&(n(e)?o.resolve(e):o.reject(e),r[t]=null)}});return n((function(t){if(t.detail&&t.detail.data&&"object"==typeof t.detail.data&&"request_id"in t.detail.data){var e=t.detail.data,n=e.request_id,o=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(e,["request_id"]);n&&i.resolve(n,o,(function(t){return!("error_type"in t)}))}})),function(n,o){return void 0===o&&(o={}),new Promise((function(r,a){var s=i.add({resolve:r,reject:a},o.request_id);t(n,e(e({},o),{request_id:s}))}))}}var r,i,a,s,c,u="undefined"!=typeof window,l=Boolean(u&&window.AndroidBridge),p=Boolean(u&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),d=Boolean(u&&window.ReactNativeWebView&&"function"==typeof window.ReactNativeWebView.postMessage),f=u&&!l&&!p,h=f&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),b=f?"message":"VKWebAppEvent",v=n(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppCreateHash","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppGetConfig","VKWebAppGetLaunchParams","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppCheckNativeAds","VKWebAppShowNativeAds","VKWebAppRetargetingPixel","VKWebAppConversionHit","VKWebAppShowSubscriptionBox","VKWebAppCheckSurvey","VKWebAppShowSurvey","VKWebAppScrollTop","VKWebAppScrollTopStart","VKWebAppScrollTopStop"],f&&!h?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowInstallPushBox","VKWebAppGetFriends","VKWebAppShowCommunityWidgetPreviewBox"]:["VKWebAppShowImages"]),g=u?window.AndroidBridge:void 0,m=p?window.webkit.messageHandlers:void 0,y=f?parent:void 0;(r=t.EAdsFormats||(t.EAdsFormats={})).REWARD="reward",r.INTERSTITIAL="interstitial",(i=t.EGrantedPermission||(t.EGrantedPermission={})).CAMERA="camera",i.LOCATION="location",i.PHOTO="photo",(a=t.EGetLaunchParamsResponseLanguages||(t.EGetLaunchParamsResponseLanguages={})).RU="ru",a.UK="uk",a.UA="ua",a.EN="en",a.BE="be",a.KZ="kz",a.PT="pt",a.ES="es",(s=t.EGetLaunchParamsResponseGroupRole||(t.EGetLaunchParamsResponseGroupRole={})).ADMIN="admin",s.EDITOR="editor",s.MEMBER="member",s.MODER="moder",s.NONE="none",(c=t.EGetLaunchParamsResponsePlatforms||(t.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB="desktop_web",c.MOBILE_WEB="mobile_web",c.MOBILE_ANDROID="mobile_android",c.MOBILE_ANDROID_MESSENGER="mobile_android_messenger",c.MOBILE_IPHONE="mobile_iphone",c.MOBILE_IPHONE_MESSENGER="mobile_iphone_messenger",c.MOBILE_IPAD="mobile_ipad";var O=function(t){var e=void 0,r=[];function i(t){r.push(t)}function a(){return p||l}function s(){return f&&window.parent!==window}function c(){return a()||s()}function u(t){if(p||l)return n(r).map((function(e){return e.call(null,t)}));var o=null==t?void 0:t.data;if(f&&o){if(d&&"string"==typeof o)try{o=JSON.parse(o)}catch(o){}var i=o.type,a=o.data,s=o.frameId;i&&("SetSupportedHandlers"!==i?"VKWebAppSettings"!==i?n(r).map((function(t){return t({detail:{type:i,data:a}})})):e=s:a.supportedHandlers)}}d&&/(android)/i.test(navigator.userAgent)?document.addEventListener(b,u):"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(b,u);var h=o((function(n,o){g&&g[n]?g[n](JSON.stringify(o)):m&&m[n]&&"function"==typeof m[n].postMessage?m[n].postMessage(o):d?window.ReactNativeWebView.postMessage(JSON.stringify({handler:n,params:o})):y&&"function"==typeof y.postMessage&&y.postMessage({handler:n,params:o,type:"vk-connect",webFrameId:e,connectVersion:t},"*")}),i);return{send:h,sendPromise:h,subscribe:i,unsubscribe:function(t){var e=r.indexOf(t);-1<e&&r.splice(e,1)},supports:function(t){return l?!(!g||"function"!=typeof g[t]):p?!(!m||!m[t]||"function"!=typeof m[t].postMessage):f&&-1<v.indexOf(t)},isWebView:a,isIframe:s,isEmbedded:c,isStandalone:function(){return!c()}}}("2.7.2");t.applyMiddleware=function t(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.includes(void 0)||n.includes(null)?t.apply(void 0,n.filter((function(t){return"function"==typeof t}))):function(t){if(0===n.length)return t;var o,r={subscribe:t.subscribe,send:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.send.apply(t,e)}};return o=n.filter((function(t){return"function"==typeof t})).map((function(t){return t(r)})).reduce((function(t,e){return function(n){return t(e(n))}}))(t.send),e(e({},t),{send:o})}},t.default=O,Object.defineProperty(t,"__esModule",{value:!0})}(e)},1136:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(28),r=n(252);var i=n(178);function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,a)}function a(){return Object(i.a)(t,arguments,Object(o.a)(this).constructor)}return a.prototype=Object.create(t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Object(r.a)(a,t)},a(t)}},1145:function(t,e,n){n(6)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},1148:function(t,e,n){var o=n(6),r=n(44),i=n(179);o({target:"Object",stat:!0},{fromEntries:function(t){var e={};return r(t,(function(t,n){i(e,t,n)}),{AS_ENTRIES:!0}),e}})},1207:function(t,e,n){"use strict";var o=n(5);e.a=o.default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},1422:function(t,e,n){},1518:function(t,e,n){},1519:function(t,e,n){},1522:function(t,e,n){"use strict";n(16),n(19),n(26),n(27);var o=n(2),r=(n(3),n(43),n(57),n(25),n(12),n(24),n(53),n(474),n(14),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(15),n(9),n(695),n(5)),i=n(470),a=n(47);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=["sm","md","lg","xl"],l=["start","end","center"];function p(t,e){return u.reduce((function(n,o){return n[t+Object(a.F)(o)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=p("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},b=p("justify",(function(){return{type:String,default:null,validator:h}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=p("alignContent",(function(){return{type:String,default:null,validator:v}})),m={align:Object.keys(f),justify:Object.keys(b),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function O(t,e,n){var o=y[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var w=new Map;e.a=r.default.extend({name:"v-row",functional:!0,props:c(c(c({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:h}},b),{},{alignContent:{type:String,default:null,validator:v}},g),render:function(t,e){var n=e.props,r=e.data,a=e.children,s="";for(var c in n)s+=String(n[c]);var u=w.get(s);return u||function(){var t,e;for(e in u=[],m)m[e].forEach((function(t){var o=n[t],r=O(e,t,o);r&&u.push(r)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),w.set(s,u)}(),t(n.tag,Object(i.a)(r,{staticClass:"row",class:u}),a)}})},1523:function(t,e,n){"use strict";n(16),n(19),n(26),n(27);var o=n(2),r=(n(3),n(87),n(12),n(24),n(53),n(474),n(14),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(15),n(43),n(9),n(84),n(695),n(5)),i=n(470),a=n(47);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=["sm","md","lg","xl"],l=u.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),p=u.reduce((function(t,e){return t["offset"+Object(a.F)(e)]={type:[String,Number],default:null},t}),{}),d=u.reduce((function(t,e){return t["order"+Object(a.F)(e)]={type:[String,Number],default:null},t}),{}),f={col:Object.keys(l),offset:Object.keys(p),order:Object.keys(d)};function h(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var b=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:c(c(c(c({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},p),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,a=e.children,s=(e.parent,"");for(var c in n)s+=String(n[c]);var u=b.get(s);return u||function(){var t,e;for(e in u=[],f)f[e].forEach((function(t){var o=n[t],r=h(e,t,o);r&&u.push(r)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),b.set(s,u)}(),t(n.tag,Object(i.a)(r,{class:u}),a)}})},1559:function(t,e,n){"use strict";n(12),n(16),n(19),n(3),n(26),n(9),n(27);var o=n(2),r=(n(43),n(1422),n(1076)),i=n(1073),a=n(1072),s=n(469),c=n(467),u=n(1207),l=n(466),p=n(72);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=Object(l.a)(r.a,s.a,u.a).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((t=this.setBackgroundColor(this.computedColor,t)).class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(i.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=f(f({},r.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(t=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,t));return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},1718:function(t,e,n){"use strict";n(1518);var o=n(1208);e.a=o.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,n=t.top,o=t.right,r=t.footer,i=t.insetFooter,a=t.bottom,s=t.left;return{paddingTop:"".concat(n+e,"px"),paddingRight:"".concat(o,"px"),paddingBottom:"".concat(r+i+a,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},1719:function(t,e,n){"use strict";var o=n(2),r=(n(87),n(43),n(51),n(1519),n(1074)),i=n(251),a=n(467),s=n(469),c=n(1087),u=n(466),l=n(47),p=n(72);e.a=Object(u.a)(r.a,i.a,s.a,Object(c.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:a.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,o=t.footer,r=t.insetFooter,i=t.left,a=t.right,s=t.top;return{paddingBottom:Object(l.h)(n+o+r),paddingLeft:Object(l.h)(i),paddingRight:Object(l.h)(a),paddingTop:Object(l.h)(e+s)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(p.e)("auto-height",this),0==this.timeout&&Object(p.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l.s)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l.s)(this)])},genWrapper:function(){var t=this,e=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})}}]);