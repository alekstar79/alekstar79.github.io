(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1132:function(e,t,n){!function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function n(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)r[o]=a[i];return r}function r(e,n){var r,o,a=(r={current:0,next:function(){return++this.current}},o={},{add:function(e,t){var n=null!=t?t:r.next();return o[n]=e,n},resolve:function(e,t,n){var r=o[e];r&&(n(t)?r.resolve(t):r.reject(t),o[e]=null)}});return n((function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var t=e.detail.data,n=t.request_id,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["request_id"]);n&&a.resolve(n,r,(function(e){return!("error_type"in e)}))}})),function(n,r){return void 0===r&&(r={}),new Promise((function(o,i){var s=a.add({resolve:o,reject:i},r.request_id);e(n,t(t({},r),{request_id:s}))}))}}var o,a,i,s,p,u="undefined"!=typeof window,c=Boolean(u&&window.AndroidBridge),l=Boolean(u&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),d=Boolean(u&&window.ReactNativeWebView&&"function"==typeof window.ReactNativeWebView.postMessage),f=u&&!c&&!l,b=f&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),v=f?"message":"VKWebAppEvent",A=n(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppCreateHash","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppGetConfig","VKWebAppGetLaunchParams","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppCheckNativeAds","VKWebAppShowNativeAds","VKWebAppRetargetingPixel","VKWebAppConversionHit","VKWebAppShowSubscriptionBox","VKWebAppCheckSurvey","VKWebAppShowSurvey","VKWebAppScrollTop","VKWebAppScrollTopStart","VKWebAppScrollTopStop"],f&&!b?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowInstallPushBox","VKWebAppGetFriends","VKWebAppShowCommunityWidgetPreviewBox"]:["VKWebAppShowImages"]),m=u?window.AndroidBridge:void 0,w=l?window.webkit.messageHandlers:void 0,h=f?parent:void 0;(o=e.EAdsFormats||(e.EAdsFormats={})).REWARD="reward",o.INTERSTITIAL="interstitial",(a=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA="camera",a.LOCATION="location",a.PHOTO="photo",(i=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU="ru",i.UK="uk",i.UA="ua",i.EN="en",i.BE="be",i.KZ="kz",i.PT="pt",i.ES="es",(s=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN="admin",s.EDITOR="editor",s.MEMBER="member",s.MODER="moder",s.NONE="none",(p=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB="desktop_web",p.MOBILE_WEB="mobile_web",p.MOBILE_ANDROID="mobile_android",p.MOBILE_ANDROID_MESSENGER="mobile_android_messenger",p.MOBILE_IPHONE="mobile_iphone",p.MOBILE_IPHONE_MESSENGER="mobile_iphone_messenger",p.MOBILE_IPAD="mobile_ipad";var W=function(e){var t=void 0,o=[];function a(e){o.push(e)}function i(){return l||c}function s(){return f&&window.parent!==window}function p(){return i()||s()}function u(e){if(l||c)return n(o).map((function(t){return t.call(null,e)}));var r=null==e?void 0:e.data;if(f&&r){if(d&&"string"==typeof r)try{r=JSON.parse(r)}catch(r){}var a=r.type,i=r.data,s=r.frameId;a&&("SetSupportedHandlers"!==a?"VKWebAppSettings"!==a?n(o).map((function(e){return e({detail:{type:a,data:i}})})):t=s:i.supportedHandlers)}}d&&/(android)/i.test(navigator.userAgent)?document.addEventListener(v,u):"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(v,u);var b=r((function(n,r){m&&m[n]?m[n](JSON.stringify(r)):w&&w[n]&&"function"==typeof w[n].postMessage?w[n].postMessage(r):d?window.ReactNativeWebView.postMessage(JSON.stringify({handler:n,params:r})):h&&"function"==typeof h.postMessage&&h.postMessage({handler:n,params:r,type:"vk-connect",webFrameId:t,connectVersion:e},"*")}),a);return{send:b,sendPromise:b,subscribe:a,unsubscribe:function(e){var t=o.indexOf(e);-1<t&&o.splice(t,1)},supports:function(e){return c?!(!m||"function"!=typeof m[e]):l?!(!w||!w[e]||"function"!=typeof w[e].postMessage):f&&-1<A.indexOf(e)},isWebView:i,isIframe:s,isEmbedded:p,isStandalone:function(){return!p()}}}("2.7.2");e.applyMiddleware=function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.includes(void 0)||n.includes(null)?e.apply(void 0,n.filter((function(e){return"function"==typeof e}))):function(e){if(0===n.length)return e;var r,o={subscribe:e.subscribe,send:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.send.apply(e,t)}};return r=n.filter((function(e){return"function"==typeof e})).map((function(e){return e(o)})).reduce((function(e,t){return function(n){return e(t(n))}}))(e.send),t(t({},e),{send:r})}},e.default=W,Object.defineProperty(e,"__esModule",{value:!0})}(t)},1137:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(28),o=n(252);var a=n(178);function i(e){var t="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return Object(a.a)(e,arguments,Object(r.a)(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Object(o.a)(i,e)},i(e)}},1146:function(e,t,n){n(6)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},1149:function(e,t,n){var r=n(6),o=n(44),a=n(179);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){a(t,e,n)}),{AS_ENTRIES:!0}),t}})},1599:function(e,t,n){},1777:function(e,t,n){"use strict";n(1599)},1943:function(e,t,n){"use strict";n.r(t);var r=n(1069),o=n(1070),a=(n(34),{mixins:[n(1140).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:[]}},methods:{view:function(e){this.$bus.$emit("view",{idx:e,frame:this.images.map((function(e){return{url:e,src:e}})),edit:!1})}}}),i=(n(1777),n(250)),s=Object(i.a)(a,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"pane scroller",class:"theme--".concat(e.$vuetify.theme.dark?"dark":"light")},[t(r.a,{staticClass:"pane__topic",class:{fullscreen:e.fullscreen,mobile:e.mobile}},[t("h2",{staticClass:"pane__topic-title mb-5"},[e._v("Блок меню редактирование.")]),e._v(" "),t("ul",{staticClass:"features-list with-marks"},[t("li",{staticClass:"state-feature"},[t("i",{staticClass:"feature-dashed"},[e._v("ОТМЕНИТЬ [Ctrl + Z]")]),e._v(" - отменяет последнее действие\n      ")]),e._v(" "),t("li",{staticClass:"state-feature"},[t("i",{staticClass:"feature-dashed"},[e._v("ВЕРНУТЬ [Ctrl + Y]")]),e._v(" - возвращает отмененное действие\n      ")]),e._v(" "),t("li",{staticClass:"state-feature"},[t("i",{staticClass:"feature-dashed"},[e._v("ВЫРЕЗАТЬ")]),e._v(" - вырезает, выделенный объект из холста, сохраняя его в буфере\n      ")]),e._v(" "),t("li",{staticClass:"state-feature"},[t("i",{staticClass:"feature-dashed"},[e._v("КОПИРОВАТЬ")]),e._v(" - копирует объект в буфер\n      ")]),e._v(" "),t("li",{staticClass:"state-feature"},[t("i",{staticClass:"feature-dashed"},[e._v("ВСТАВИТЬ")]),e._v(" - вставляет в холст объект из буфера\n      ")]),e._v(" "),t("li",{staticClass:"state-feature"},[t("i",{staticClass:"feature-dashed"},[e._v("ВЫДЕЛИТЬ ВСЕ")]),e._v(" - выделяет все объекты на холсте\n      ")]),e._v(" "),t("li",{staticClass:"state-feature"},[t("i",{staticClass:"feature-dashed"},[e._v("СНЯТЬ ВЫДЕЛЕНИЕ")]),e._v(" - сбрасывает выделение\n      ")])]),e._v(" "),t("div",{staticClass:"clearfix"}),e._v(" "),t("p",{staticClass:"pane__topic-closing"},[e._v("\n      Справочное руководство может быть обновлено, уточнено и дополнено.\n    ")])])],1)}),[],!1,null,"4fff7af1",null);t.default=s.exports}}]);