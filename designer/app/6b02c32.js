(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1540:function(t,e,i){"use strict";(function(t){i(12),i(16),i(19),i(26),i(9),i(27);var s=i(33),a=i(2),r=(i(25),i(3),i(24),i(51),i(34),i(83),i(32),i(14),i(15),i(258),i(158));function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c="";e.a={props:{close:{type:Boolean,default:!1}},computed:{color:function(){return this.$vuetify.theme.dark?"gray":this.$store.state.app.color},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE},cache:function(){return this.$store.state.canvas.cache}},data:function(){return{key:t.env.PIXABAY_KEY,api:t.env.PIXABAY_API,perform:!1,service:!0,smooth:null,images:[],query:"",total:0,page:0,wrapperHeight:0,panelHeight:0,tileHeight:0,height:0}},watch:{images:"initScroll",query:function(t){""===t&&this.clear()}},methods:{valid:function(t){var e=t.status,i=t.data,s="".concat(this.query,"p").concat(this.page);return e&&200===e?i&&0!==parseInt(i.totalHits)?(void 0===this.cache[s]&&this.$store.commit("canvas/set",{cache:o(o({},this.cache),{},Object(a.a)({},s,i))}),!0):(this.$bus.$emit("snack",{content:"graph.search_not_match",color:"warning"}),!1):(this.$bus.$emit("snack",{content:"graph.error_service",color:"error"}),!1)},fromCache:function(){var t=this.cache,e=this.query,i=this.page;return void 0!==t["".concat(e,"p").concat(i)]&&(this.total=t["".concat(e,"p").concat(i)].totalHits,this.images=[].concat(Object(s.a)(this.images),Object(s.a)(t["".concat(e,"p").concat(i)].hits)),!0)},requestsPreAnalysis:function(t){return!this.perform&&(t?(c="summer",this.page=1,!0):!(this.query!==c&&(c=this.query,this.total=this.page=0,this.images=[],this.measure(),!this.query))&&(++this.page>3&&this.page--,!this.fromCache()))},search:function(){var t=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.requestsPreAnalysis(e)&&(this.perform=!0,this.$axios.get(this.api,{crossDomain:!0,timeout:5e3,params:{q:e?"summer":this.query,per_page:200,page:this.page,key:this.key}}).then((function(i){t.service=!0,t.valid(i)&&!e&&(t.total=i.data.totalHits,t.images=[].concat(Object(s.a)(t.images),Object(s.a)(i.data.hits)),t.measure())})).catch((function(e){var i=e.message;/timeout/.test(i)&&(t.service=!1)})).finally((function(){t.perform=!1})))},measure:function(){var t=this;setTimeout((function(){var e,i;t.wrapperHeight=(null===(e=t.$refs.wrapper)||void 0===e?void 0:e.clientHeight)||0,t.panelHeight=(null===(i=t.$refs.panel)||void 0===i?void 0:i.clientHeight)||0;var s,a=t.wrapperHeight-t.panelHeight;a>=0&&(t.height=a),(s=(t.$refs.tile||[])[0])&&(t.tileHeight=Math.floor(s.clientHeight)||100)}))},clear:function(){this.total=this.page=0,this.images=[]},view:function(t){var e,i=this.images.map((function(t){return{src:t.largeImageURL}})),s=3*Math.ceil(this.smooth.offset.y/this.tileHeight)-3,a=3*Math.ceil(this.panelHeight/this.tileHeight),r=null===(e=i[t])||void 0===e?void 0:e.src;return this.smooth.offset.y>this.tileHeight||(s=0),s>0||(s=0),i[t]?i.length<=a?this.$bus.$emit("view",{idx:i.findIndex((function(t){return t.src===r})),frame:i}):(i=i.slice(s,s+a),void this.$bus.$emit("view",{idx:i.findIndex((function(t){return t.src===r})),frame:i})):this.$bus.$emit("snack",{content:"Internal error",color:"error",raw:!0})},initScroll:function(){var t=this;!this.smooth&&this.$refs.panel&&(this.mobile?(i.e(319).then(i.t.bind(null,1871,7)),i.e(319).then(i.t.bind(null,1872,7)).then((function(t){return t.default||t})).then((function(e){t.smooth=e(t.$refs.panel,{scrollbars:{visibility:t.mobile?"hidden":"auto"},callbacks:{onScroll:t.handleScroll}})})).then(this.measure)):i.e(322).then(i.bind(null,1880)).then((function(t){return t.default||t})).then((function(e){t.smooth=e.init(t.$refs.panel,{damping:t.mobile?.1:1,continuousScrolling:!1}),t.smooth.addListener(t.handleScroll),t.smooth.updatePluginOptions("overscroll",{enable:!1})})).then(this.measure))},handleScroll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.offset,i=void 0===e?this.smooth.scroll().position:e;!i.y||this.height-i.y>.7*this.panelHeight||this.total>this.images.length&&this.search()}},created:function(){this.search("summer",!0),this.search=r.debounce.call(this,this.search,1e3)}}}).call(this,i(38))},1573:function(t,e,i){},1748:function(t,e,i){"use strict";i(1573)},1993:function(t,e,i){"use strict";i.r(e);var s=i(1142),a=i(1093),r=i(1149),n=i(1070),o=i(1135),c=i(2),l=(i(24),i(258),i(1540).a),h=(i(1748),i(250)),u=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pixabay-content fill-height",class:Object(c.a)({mobile:t.mobile},"theme--".concat(t.$vuetify.theme.dark?"dark":"light"),!0)},[e("div",{staticClass:"pixabay pixabay-search",on:{click:function(t){t.stopPropagation()}}},[e(o.a,{staticClass:"graph-ed-search",attrs:{color:t.color,label:t.$t("graph.search"),"hide-details":"",flat:""},on:{change:t.search,input:t.search},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),t.close?e(a.a,{staticClass:"close-btn",on:{click:function(e){return t.$emit("close")}}},[t._v("\n      mdi-close\n    ")]):t._e()],1),t._v(" "),e("div",{ref:"panel",staticClass:"d-flex pixabay-list scroller"},[t.images.length?e(n.a,{ref:"wrapper",staticClass:"pixabay-list__images",attrs:{wrap:""}},t._l(t.images,(function(i,n){return e("div",{key:n,ref:"tile",refInFor:!0,staticClass:"flex pixabay-list__images--item xs6 sm4"},[e(s.a,{attrs:{tile:"",flat:""}},[e(r.a,{attrs:{src:i.previewURL,"aspect-ratio":"1","min-width":"90px"},on:{click:function(e){return t.$emit("choose",i)}}},[e("div",{staticClass:"view-marker",on:{click:function(e){return e.stopPropagation(),t.view(n)}}},[e(a.a,{attrs:{color:"#fff",dense:""}},[t._v("\n                mdi-eye-outline\n              ")])],1)])],1)],1)})),0):e(n.a,{staticClass:"pixabay-list__images empty-list",attrs:{"justify-center":""}},[e(s.a,{attrs:{tile:"",flat:""}},[e("lazy-graph-pixaby"),t._v(" "),t.service?t._e():e("span",[t._v("\n            Service is not available\n        ")])],1)],1)],1)])}),[],!1,null,"3f6d3222",null);e.default=u.exports}}]);