(window.webpackJsonp=window.webpackJsonp||[]).push([[107,231],{1096:function(e,t,i){"use strict";i(87);var n=i(47),r=i(5);t.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var e={},t=Object(n.h)(this.height),i=Object(n.h)(this.minHeight),r=Object(n.h)(this.minWidth),s=Object(n.h)(this.maxHeight),a=Object(n.h)(this.maxWidth),o=Object(n.h)(this.width);return t&&(e.height=t),i&&(e.minHeight=i),r&&(e.minWidth=r),s&&(e.maxHeight=s),a&&(e.maxWidth=a),o&&(e.width=o),e}}})},1105:function(e,t,i){},1106:function(e,t,i){},1132:function(e,t,i){!function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var s=arguments[t],a=0,o=s.length;a<o;a++,r++)n[r]=s[a];return n}function n(e,i){var n,r,s=(n={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var i=null!=t?t:n.next();return r[i]=e,i},resolve:function(e,t,i){var n=r[e];n&&(i(t)?n.resolve(t):n.reject(t),r[e]=null)}});return i((function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var t=e.detail.data,i=t.request_id,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}(t,["request_id"]);i&&s.resolve(i,n,(function(e){return!("error_type"in e)}))}})),function(i,n){return void 0===n&&(n={}),new Promise((function(r,a){var o=s.add({resolve:r,reject:a},n.request_id);e(i,t(t({},n),{request_id:o}))}))}}var r,s,a,o,c,p="undefined"!=typeof window,l=Boolean(p&&window.AndroidBridge),u=Boolean(p&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),d=Boolean(p&&window.ReactNativeWebView&&"function"==typeof window.ReactNativeWebView.postMessage),h=p&&!l&&!u,m=h&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),f=h?"message":"VKWebAppEvent",g=i(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppCreateHash","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppGetConfig","VKWebAppGetLaunchParams","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppCheckNativeAds","VKWebAppShowNativeAds","VKWebAppRetargetingPixel","VKWebAppConversionHit","VKWebAppShowSubscriptionBox","VKWebAppCheckSurvey","VKWebAppShowSurvey","VKWebAppScrollTop","VKWebAppScrollTopStart","VKWebAppScrollTopStop"],h&&!m?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowInstallPushBox","VKWebAppGetFriends","VKWebAppShowCommunityWidgetPreviewBox"]:["VKWebAppShowImages"]),b=p?window.AndroidBridge:void 0,v=u?window.webkit.messageHandlers:void 0,S=h?parent:void 0;(r=e.EAdsFormats||(e.EAdsFormats={})).REWARD="reward",r.INTERSTITIAL="interstitial",(s=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA="camera",s.LOCATION="location",s.PHOTO="photo",(a=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU="ru",a.UK="uk",a.UA="ua",a.EN="en",a.BE="be",a.KZ="kz",a.PT="pt",a.ES="es",(o=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN="admin",o.EDITOR="editor",o.MEMBER="member",o.MODER="moder",o.NONE="none",(c=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB="desktop_web",c.MOBILE_WEB="mobile_web",c.MOBILE_ANDROID="mobile_android",c.MOBILE_ANDROID_MESSENGER="mobile_android_messenger",c.MOBILE_IPHONE="mobile_iphone",c.MOBILE_IPHONE_MESSENGER="mobile_iphone_messenger",c.MOBILE_IPAD="mobile_ipad";var w=function(e){var t=void 0,r=[];function s(e){r.push(e)}function a(){return u||l}function o(){return h&&window.parent!==window}function c(){return a()||o()}function p(e){if(u||l)return i(r).map((function(t){return t.call(null,e)}));var n=null==e?void 0:e.data;if(h&&n){if(d&&"string"==typeof n)try{n=JSON.parse(n)}catch(n){}var s=n.type,a=n.data,o=n.frameId;s&&("SetSupportedHandlers"!==s?"VKWebAppSettings"!==s?i(r).map((function(e){return e({detail:{type:s,data:a}})})):t=o:a.supportedHandlers)}}d&&/(android)/i.test(navigator.userAgent)?document.addEventListener(f,p):"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(f,p);var m=n((function(i,n){b&&b[i]?b[i](JSON.stringify(n)):v&&v[i]&&"function"==typeof v[i].postMessage?v[i].postMessage(n):d?window.ReactNativeWebView.postMessage(JSON.stringify({handler:i,params:n})):S&&"function"==typeof S.postMessage&&S.postMessage({handler:i,params:n,type:"vk-connect",webFrameId:t,connectVersion:e},"*")}),s);return{send:m,sendPromise:m,subscribe:s,unsubscribe:function(e){var t=r.indexOf(e);-1<t&&r.splice(t,1)},supports:function(e){return l?!(!b||"function"!=typeof b[e]):u?!(!v||!v[e]||"function"!=typeof v[e].postMessage):h&&-1<g.indexOf(e)},isWebView:a,isIframe:o,isEmbedded:c,isStandalone:function(){return!c()}}}("2.7.2");e.applyMiddleware=function e(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];return i.includes(void 0)||i.includes(null)?e.apply(void 0,i.filter((function(e){return"function"==typeof e}))):function(e){if(0===i.length)return e;var n,r={subscribe:e.subscribe,send:function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.send.apply(e,t)}};return n=i.filter((function(e){return"function"==typeof e})).map((function(e){return e(r)})).reduce((function(e,t){return function(i){return e(t(i))}}))(e.send),t(t({},e),{send:n})}},e.default=w,Object.defineProperty(e,"__esModule",{value:!0})}(t)},1137:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(28),r=i(252);var s=i(178);function a(e){var t="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return Object(s.a)(e,arguments,Object(n.a)(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),Object(r.a)(a,e)},a(e)}},1146:function(e,t,i){i(6)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},1149:function(e,t,i){var n=i(6),r=i(44),s=i(179);n({target:"Object",stat:!0},{fromEntries:function(e){var t={};return r(e,(function(e,i){s(t,e,i)}),{AS_ENTRIES:!0}),t}})},1150:function(e,t,i){"use strict";var n=i(13),r=(i(87),i(75),i(472),i(84),i(51),i(1105),i(471)),s=(i(1106),i(1096)),a=i(466),o=i(47),c=Object(a.a)(s.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(o.s)(this))}},render:function(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),p=i(467),l=i(470),u=i(72),d="undefined"!=typeof window&&"IntersectionObserver"in window;t.a=Object(a.a)(c,p.a).extend({name:"v-img",directives:{intersect:r.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push("linear-gradient(".concat(this.gradient,")")),t&&e.push('url("'.concat(t,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(e,t,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var e=this,t=new Image;this.image=t,t.onload=function(){t.decode?t.decode().catch((function(t){Object(u.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(e.normalisedSrc.src)+(t.message?"\nOriginal error: ".concat(t.message):""),e)})).then(e.onLoad):e.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=e.naturalHeight,s=e.naturalWidth;r||s?(t.naturalWidth=s,t.calculatedAspectRatio=s/r):e.complete||!t.isLoading||t.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var e=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(e.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),e},__genPlaceholder:function(){var e=Object(o.s)(this,"placeholder");if(e){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},e)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(e){var t=c.options.render.call(this,e),i=Object(l.a)(t.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,i,t.children)}})},1568:function(e,t,i){},1690:function(e,t,i){"use strict";i.r(t);i(88),i(87);var n={props:{viewBox:{default:"0 0 512 512",type:String},height:{default:20,type:[Number,String]},width:{default:20,type:[Number,String]},fill:{default:"#8f8f8f",type:String},stroke:{default:"none",type:String}}},r=i(250),s=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,height:e.height,width:e.width}},[t("path",{attrs:{fill:e.fill,stroke:e.stroke,d:"M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"}})])}),[],!1,null,null,null);t.default=s.exports},1741:function(e,t,i){"use strict";i(1568)},1910:function(e,t,i){"use strict";i.r(t);var n=i(1069),r=i(1150),s=i(1070),a=(i(34),{mixins:[i(1140).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:["/img/help/core-connections-01.png","/img/help/core-connections-02.png"]}},methods:{view:function(e){this.$bus.$emit("view",{idx:e,frame:this.images.map((function(e){return{url:e,src:e}})),edit:!1})}}}),o=(i(1741),i(250)),c=Object(o.a)(a,(function(){var e=this,t=e._self._c;return t(s.a,{staticClass:"pane scroller",class:"theme--".concat(e.$vuetify.theme.dark?"dark":"light")},[t(n.a,{staticClass:"pane__topic",class:{fullscreen:e.fullscreen,mobile:e.mobile}},[t("h2",{staticClass:"pane__topic-title mb-5"},[e._v("Подключение группы")]),e._v(" "),t("p",{staticClass:"pane__topic-definition"},[e._v("\n      Менеджер подключений осуществляет непосредственное подключение того или иного модуля (чатбот, обложки) к\n      группе пользователя.\n    ")]),e._v(" "),t(s.a,{staticClass:"pane__images justify-flex pc2"},[t(r.a,{staticClass:"image-01",attrs:{src:e.images[0]},on:{click:function(t){return e.view(0)}}}),e._v(" "),t(r.a,{staticClass:"image-02",attrs:{src:e.images[1]},on:{click:function(t){return e.view(1)}}})],1),e._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[e._v("\n      Начальный экран модуля содержит список групп пользователя. При переходе в определенную группу, раскрывается\n      список, созданных пользователем сущностей (диалогов для чатбота или обложек), соответствующих данному\n      модулю. Выбор возможен только одной сущности. Принцип следующий - сущность (диалог, обложку) можно подключить\n      к нескольким группам, в свою очередь, к одной группе, возможно подклучение только одной сущности. В хедере\n      окна предусмотрена кнопка выхода назад, в предыдущее окно "),t("helper-return",{attrs:{fill:"#999"}}),e._v(".\n    ")],1),e._v(" "),t("div",{staticClass:"clearfix"}),e._v(" "),t("p",{staticClass:"pane__topic-closing"},[e._v("\n      Справочное руководство может быть обновлено, уточнено и дополнено.\n    ")])],1)],1)}),[],!1,null,"2ef4d662",null);t.default=c.exports;installComponents(c,{HelperReturn:i(1690).default})}}]);