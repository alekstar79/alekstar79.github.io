(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1132:function(e,n,t){!function(e){"use strict";var n=function(){return(n=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function t(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),r=0;for(n=0;n<t;n++)for(var p=arguments[n],i=0,a=p.length;i<a;i++,r++)o[r]=p[i];return o}function o(e,t){var o,r,p=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,n){var t=null!=n?n:o.next();return r[t]=e,t},resolve:function(e,n,t){var o=r[e];o&&(t(n)?o.resolve(n):o.reject(n),r[e]=null)}});return t((function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var n=e.detail.data,t=n.request_id,o=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(n,["request_id"]);t&&p.resolve(t,o,(function(e){return!("error_type"in e)}))}})),function(t,o){return void 0===o&&(o={}),new Promise((function(r,i){var a=p.add({resolve:r,reject:i},o.request_id);e(t,n(n({},o),{request_id:a}))}))}}var r,p,i,a,s,u="undefined"!=typeof window,c=Boolean(u&&window.AndroidBridge),l=Boolean(u&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),d=Boolean(u&&window.ReactNativeWebView&&"function"==typeof window.ReactNativeWebView.postMessage),f=u&&!c&&!l,b=f&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),v=f?"message":"VKWebAppEvent",A=t(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppCreateHash","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppGetConfig","VKWebAppGetLaunchParams","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppCheckNativeAds","VKWebAppShowNativeAds","VKWebAppRetargetingPixel","VKWebAppConversionHit","VKWebAppShowSubscriptionBox","VKWebAppCheckSurvey","VKWebAppShowSurvey","VKWebAppScrollTop","VKWebAppScrollTopStart","VKWebAppScrollTopStop"],f&&!b?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowInstallPushBox","VKWebAppGetFriends","VKWebAppShowCommunityWidgetPreviewBox"]:["VKWebAppShowImages"]),_=u?window.AndroidBridge:void 0,w=l?window.webkit.messageHandlers:void 0,W=f?parent:void 0;(r=e.EAdsFormats||(e.EAdsFormats={})).REWARD="reward",r.INTERSTITIAL="interstitial",(p=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA="camera",p.LOCATION="location",p.PHOTO="photo",(i=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU="ru",i.UK="uk",i.UA="ua",i.EN="en",i.BE="be",i.KZ="kz",i.PT="pt",i.ES="es",(a=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN="admin",a.EDITOR="editor",a.MEMBER="member",a.MODER="moder",a.NONE="none",(s=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB="desktop_web",s.MOBILE_WEB="mobile_web",s.MOBILE_ANDROID="mobile_android",s.MOBILE_ANDROID_MESSENGER="mobile_android_messenger",s.MOBILE_IPHONE="mobile_iphone",s.MOBILE_IPHONE_MESSENGER="mobile_iphone_messenger",s.MOBILE_IPAD="mobile_ipad";var m=function(e){var n=void 0,r=[];function p(e){r.push(e)}function i(){return l||c}function a(){return f&&window.parent!==window}function s(){return i()||a()}function u(e){if(l||c)return t(r).map((function(n){return n.call(null,e)}));var o=null==e?void 0:e.data;if(f&&o){if(d&&"string"==typeof o)try{o=JSON.parse(o)}catch(o){}var p=o.type,i=o.data,a=o.frameId;p&&("SetSupportedHandlers"!==p?"VKWebAppSettings"!==p?t(r).map((function(e){return e({detail:{type:p,data:i}})})):n=a:i.supportedHandlers)}}d&&/(android)/i.test(navigator.userAgent)?document.addEventListener(v,u):"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(v,u);var b=o((function(t,o){_&&_[t]?_[t](JSON.stringify(o)):w&&w[t]&&"function"==typeof w[t].postMessage?w[t].postMessage(o):d?window.ReactNativeWebView.postMessage(JSON.stringify({handler:t,params:o})):W&&"function"==typeof W.postMessage&&W.postMessage({handler:t,params:o,type:"vk-connect",webFrameId:n,connectVersion:e},"*")}),p);return{send:b,sendPromise:b,subscribe:p,unsubscribe:function(e){var n=r.indexOf(e);-1<n&&r.splice(n,1)},supports:function(e){return c?!(!_||"function"!=typeof _[e]):l?!(!w||!w[e]||"function"!=typeof w[e].postMessage):f&&-1<A.indexOf(e)},isWebView:i,isIframe:a,isEmbedded:s,isStandalone:function(){return!s()}}}("2.7.2");e.applyMiddleware=function e(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return t.includes(void 0)||t.includes(null)?e.apply(void 0,t.filter((function(e){return"function"==typeof e}))):function(e){if(0===t.length)return e;var o,r={subscribe:e.subscribe,send:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.send.apply(e,n)}};return o=t.filter((function(e){return"function"==typeof e})).map((function(e){return e(r)})).reduce((function(e,n){return function(t){return e(n(t))}}))(e.send),n(n({},e),{send:o})}},e.default=m,Object.defineProperty(e,"__esModule",{value:!0})}(n)},1137:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t(28),r=t(252);var p=t(178);function i(e){var n="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,i)}function i(){return Object(p.a)(e,arguments,Object(o.a)(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Object(r.a)(i,e)},i(e)}},1146:function(e,n,t){t(6)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},1149:function(e,n,t){var o=t(6),r=t(44),p=t(179);o({target:"Object",stat:!0},{fromEntries:function(e){var n={};return r(e,(function(e,t){p(n,e,t)}),{AS_ENTRIES:!0}),n}})},1563:function(e,n,t){},1736:function(e,n,t){"use strict";t(1563)},1904:function(e,n,t){"use strict";t.r(n);var o=t(1069),r=t(1070),p={mixins:[t(1140).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}}},i=(t(1736),t(250)),a=Object(i.a)(p,(function(){var e=this,n=e._self._c;return n(r.a,{staticClass:"pane scroller",class:"theme--".concat(e.$vuetify.theme.dark?"dark":"light")},[n(o.a,{staticClass:"pane__topic",class:{fullscreen:e.fullscreen,mobile:e.mobile}},[n("h1",{staticClass:"pane__topic-title mb-5"},[e._v("Пользовательское соглашение")]),e._v(" "),n("p",{staticClass:"pane__topic-definition"},[e._v("\n      Настоящее Пользовательское Соглашение (далее Соглашение) регулирует отношения между владельцем netaggregator.ru\n      (далее Netaggregator или Администрация) с одной стороны и пользователем сайта с другой. Сайт Netaggregator\n      (в дальнейшем Сайт) не является средством массовой информации. Используя сайт, Вы соглашаетесь с условиями\n      данного соглашения. Размещаемая на страницах сайта информация предназначена для свободного ознакомления.\n    ")]),e._v(" "),n("p",[e._v("\n      1. Вся информация предоставляется в исходном виде, без гарантий полноты или своевременности, и без иных\n      явно выраженных или подразумеваемых гарантий. Доступ к сайту, а также использование его содержимого\n      осуществляются исключительно по вашему усмотрению и на ваш риск.\n    ")]),e._v(" "),n("p",[e._v("\n      2. Администрация (владельцы сайта, учредители, агенты, администраторы, модераторы и иные представители)\n      прикладывает все усилия, чтобы обеспечить пользователей точной и достоверной информацией, но в то же время не\n      исключает возможности возникновения ошибок.\n    ")]),e._v(" "),n("p",[e._v("\n      3. Содержимое сайта Netaggregator находится в свободном доступе в сети интернет по адресу netaggregator.ru\n      и предоставляется свободно, по принципу «как есть», без заключения каких-либо договоров между Пользователями,\n      Администрацией, владельцами серверов, на которых он размещён, либо иных (не оговоренных выше) лиц, связанных\n      с сайтом и его сервисами, которые могут стать предметом прямых и/или косвенных претензий.\n    ")]),e._v(" "),n("p",[e._v("\n      4. Администрация не дает каких-либо заверений или гарантий в отношении сайта и его содержимого, в том числе,\n      без ограничения, в отношении своевременности, актуальности, точности, полноты, достоверности, доступности или\n      соответствия для какой-либо конкретной цели сайта и содержимого, в отношении того, что при использовании сайта\n      не возникнет ошибок, оно будет безопасным и бесперебойным, что Администрация будет исправлять какие-либо ошибки,\n      или что на сайте не будет вирусов или иных вредоносных кодов, а так же, что содержимое и сайт не нарушают прав\n      третьих лиц.\n    ")]),e._v(" "),n("p",[e._v("\n      5. Некоторые ссылки на этом сайте ведут к ресурсам, расположенным на сторонних сайтах. Данные ссылки размещены\n      для удобства пользователей и не означают, что Администрация одобряет содержание других сайтов. Кроме этого,\n      Администрация сайта не несет никакой ответственности за доступность этих ресурсов и за их контент. Это заявление\n      относится ко всем ссылкам, представленным на сайте, и материалам всех веб-сайтов, доступных через баннеры\n      и ссылки на веб-сайте по адресу netaggregator.ru.\n    ")]),e._v(" "),n("p",[e._v("\n      6. В обязанности Администрации не входит контроль легальности или нелегальности передаваемой информации\n      (любой, включая, но не ограничиваясь, информацией передаваемой между пользователями, внутренней пересылки\n      информации в виде различных ссылок, текстов или архивов), определение прав собственности или законности передачи,\n      приема или использования этой информации.\n    ")]),e._v(" "),n("p",[e._v("\n      7. Администрация принимает разумные меры для обеспечения точности, актуальности и правомерности содержимого,\n      но она не принимает на себя ответственности за действия лиц или организаций, прямо или иным образом осуществленные\n      на основании информации, имеющейся на сайте или полученной через него, как предоставленной Администрацией,\n      так и третьими лицами.\n    ")]),e._v(" "),n("p",[e._v("\n      8. В соответствии с действующим законодательством, Администрация отказывается от каких-либо заверений и гарантий,\n      предоставление которых может иным образом подразумеваться, и отказывается от ответственности в отношении сайта,\n      содержимого и их использования. Ни при каких обстоятельствах Администрация сайта не будет нести ответственности\n      за какой-либо прямой, непрямой, особый или иной косвенный ущерб в результате любого использования, а равно как\n      и невозможностью использования сайта, содержимого или каких-либо связанных сервисов, даже если администрация\n      будет явно поставлена в известность о возможности такого ущерба.\n    ")]),e._v(" "),n("p",[e._v("\n      9. Сайт может использовать файлы cookies для хранения информации о пользователе, так и общей информации.\n      «Cookies» представляют собой небольшие текстовые файлы, которые могут использоваться сайтом для идентификации\n      посетителей, упрощения доступа и использования посетителем сайта, а также отслеживания сайтом обращений посетителей\n      и сбора общей информации для улучшения содержания. Пользуясь сайтом, вы выражаете свое согласие на\n      использование сайтом cookies.\n    ")]),e._v(" "),n("p",[e._v("\n      10. Администрация оставляет за собой право вносить изменения без уведомления о них пользователей.\n      Также Администрация не несет ответственности за изменение, редактирование или удаление любой информации,\n      добавленной вами на сайт или другие связанные с ним проекты.\n    ")]),e._v(" "),n("p",[e._v("\n      11. Администрация вправе отказать в доступе к сайту любому пользователю, или группе пользователей без объяснения\n      причин своих действий и предварительного уведомления.\n    ")]),e._v(" "),n("p",[e._v("\n      12. Администрация вправе изменять либо удалять ссылки на информацию, графические, звуковые и прочие данные,\n      размещенные пользователями на сайте, без предварительного уведомления и объяснения причин своих действий.\n    ")]),e._v(" "),n("p",[e._v("\n      13. Любые торговые марки, знаки и названия товаров, служб и организаций, права на дизайн, авторские и смежные права,\n      которые упоминаются, используются или цитируются на страницах сайта, принадлежат их законным владельцам и их\n      использование здесь не дает пользователю право на любое другое использование, если не указано иное. Страницы данного\n      сайта никак не связаны с правообладателями, и никто кроме правообладателя не может распоряжаться правами на использование\n      материалов, защищенных авторским правом. Пользователь несет ответственность за использование этих и подобных материалов.\n    ")]),e._v(" "),n("p",[e._v("\n      14. Чтение и распространение информации, размещённой на данном сайте, может являться нарушением\n      законов той страны, в которой вы просматриваете этот сайт.\n    ")]),e._v(" "),n("p",[e._v("\n      15. Пользователь соглашается с тем, что все возможные споры будут разрешаться по нормам российского права.\n    ")]),e._v(" "),n("p",[e._v("\n      16. Бездействие со стороны Администрации в случае нарушения пользователем либо группой пользователей\n      пользовательского соглашения не лишает Администрации права предпринять соответствующие действия в\n      защиту интересов сайта позднее.\n    ")]),e._v(" "),n("p",[e._v("\n      17. Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РФ,\n      в том числе, об авторском праве и смежных правах.\n    ")]),e._v(" "),n("p",[e._v("\n      18. Логотип, компоновка и дизайн страниц на данном сайте защищены авторским правом.\n    ")]),e._v(" "),n("p",[e._v("\n      19. Если в соответствии с действующими законами какие-либо условия будут признаны недействительными,\n      остальные условия остаются в полной силе.\n    ")]),e._v(" "),n("p",[e._v('\n      20. Используя данный сайт, Вы выражаете свое согласие с "Отказом от ответственности", установленными Правилами\n      и принимаете всю ответственность, которая может быть возложена на Вас.\n    ')]),e._v(" "),n("p",[e._v("\n      21. Администрация сайта в любое время вправе внести изменения в Правила, которые вступают в силу с момента публикации.\n      Продолжение пользования Сайтом после внесения изменений означает Ваше автоматическое согласие на соблюдение\n      новых правил.\n    ")]),e._v(" "),n("p",[e._v("Обновлено: 07 Октября 2021 года")])])],1)}),[],!1,null,"71514b2a",null);n.default=a.exports}}]);