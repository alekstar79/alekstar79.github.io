(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1624:function(t,e,n){},1807:function(t,e,n){"use strict";n(1624)},1967:function(t,e,n){"use strict";n.r(e);var s=n(1221),i=n(1093),a=n(1119),o=n(1098),c=n(1094),r=n(1107),l=n(2),u=(n(43),n(57),n(29),n(25),n(87),n(83),n(34),n(19),n(3),n(32),n(24),n(1546)),p=n(509),d=n(489),h=n.n(d),f=n(1801),v=n.n(f),m=function(t){return t&&!t.prevent&&"cropzone"!==t.type},y={components:{SlickList:u.SlickList,SlickItem:u.SlickItem,Pass:{render:function(){return this.$scopedSlots.default(this.$attrs)}}},props:{snap:{type:Number,default:5}},filters:{icon:function(t){switch(!0){case"promo-link"===t.type:return"mdi-trash-can-outline";case t.visible:return"mdi-eye-outline";default:return"mdi-eye-off-outline"}},lowercase:function(t){return t.toLowerCase()}},computed:{color:function(){return this.$vuetify.theme.dark?"white":this.$store.state.app.color},mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE},canvas:function(){return this.$parent.canvas||{}},active:function(){return this.$parent.active||[]},hex:function(){return p.a[this.color]}},watch:{"canvas._objects":"listBuilder"},data:function(){return{dialog:!1,tariff:!1,canvasListen:!1,activeIndex:null,name:null,layers:[],dump:[],actions:[{title:"Show/Hide",onClick:this.edit.bind(this)},{title:"Copy",onClick:this.copy.bind(this)},{title:"Remove",onClick:this.remove.bind(this)},{title:"Rename",onClick:this.rename.bind(this)},{title:"Deselect",onClick:this.deselect.bind(this)}]}},methods:{correction:function(){var t=(this.$store.state.app.subscribe||{}).designer;(void 0===t?0:t)<Date.now()/1e3&&this.layers.findIndex((function(t){return"promo-link"===t.type}))<this.layers.length-1&&this.canvas.forcePromo({caller:this,method:"listBuilder"})},listBuilder:function(t){var e=this;t&&h()(t)||(t=this.canvas._objects||[]),this.layers=t.filter(m).map((function(t,n){return t.custom||t.setUnique(),t.custom.name||(t.custom.name=function(t,e){return"promo-link"===t?"promo":"".concat(t," ").concat(e+1)}(t.type,n)),e.$set(e.dump,n,{visible:t.visible}),t})),this.correction(),this.canvasListen||this.onListen()},onListen:function(){"function"==typeof this.canvas.on&&(this.canvas.off("canvas:shaken",this.listBuilder),this.canvas.on("canvas:shaken",this.listBuilder),this.canvasListen=!0)},callbacks:function(t){var e=this.actions.slice(),n="Settings";switch(t.type){case"dynamic-background":e=e.filter((function(t){return!["Copy","Deselect","Rename"].includes(t.title)}));break;case"image":return e;case"promo-link":return[];case"svg-shape":n="Palette";break;case"frame":n="Select"}return e.concat([{onClick:this.settings.bind(this,t),title:n}])},selection:function(t){var e=this,n=(this.$store.state.app.subscribe||{}).designer,s=void 0===n?0:n,i=this.active.slice();return(!s||s<(Date.now()/1e3|0))&&(i=i.filter((function(t,n){return n!==e.layers.length-1}))),i.includes(t)},applyName:function(t){var e=t.name;this.dialog=!1,this.canvas._objects[this.activeIndex].customName(e),this.activeIndex=null,this.name=null},setActive:function(t){var e=t.event,n=t.index,s=t.target;s||(s=this.layers[n]);var i=s,a=i.type,o=i.custom.unique;if("promo-link"!==a&&"curved-controls"!==a){var c=[].concat(this.$parent.active.slice());n=this.canvas._objects.findIndex((function(t){return t.custom.unique===o})),e.ctrlKey?c.push(n):c=[n],this.$parent.active=v()(c),this.$parent.restoreActiveObjects()}},changeList:function(t){var e=t.event,n=t.oldIndex,s=t.newIndex,i=this.canvas._objects[n];i&&"promo-link"!==i.type&&(this.canvas.swap(n,s),this.canvas.requestRenderAll(),this.setActive({event:e,index:s,target:i}))},rename:function(t){var e=t.index;this.canvas._objects[e]&&(this.name=this.canvas._objects[e].custom.name,this.activeIndex=e,this.dialog=!0)},remove:function(t){var e=t.index,n=t.item;this.canvas._objects[e]&&(n||(n=this.canvas._objects[e]),"dynamic-background"===n.type&&n.release(),this.canvas.remove(n),this.canvas.requestRenderAll())},edit:function(t){var e=t.index,n=t.item,s=!n.visible;this.$set(this.dump,e,{visible:s}),n.set({visible:s}),this.canvas.requestRenderAll()},copy:function(t){var e=t.index,n=this.$parent.copier;n.copy((function(){return n.paste(e+1).then(n.clear.bind(n))}),this.canvas._objects[e])},deselect:function(t){var e=t.index;this.$parent.deselect(e)},settings:function(t){var e=this;this.$parent.discardActive((function(){switch(e.$parent.toActive(t),!0){case"dynamic-background"===t.type:t.stopFix=!0,e.$parent.toolInset("graph-popup-dynamic");break;case"curved-text"===t.type:t.stopFix=!0,e.$parent.popupCurved(t);break;case"svg-shape"===t.type:t.stopFix=!0,e.$parent.colorize(t);break;case"qr-code"===t.type:t.stopFix=!0,e.$parent.popupQRCode(t);break;case"c-text"===t.type:t.stopFix=!0,e.$parent.popupText(t);break;case"merge"===t.type:t.stopFix=!0,e.$parent.popupMerge(t);break;case"frame"===t.type:t.stopFix=!0,e.$parent.composite(t);break;case/widget/.test(t.type):t.stopFix=!0,e.$parent.popupWidget(t);break;case"triangle"===t.type:case"ellipse"===t.type:case"line"===t.type:case"rect"===t.type:t.stopFix=!0,e.$parent.popupShape(t)}}))},purshase:function(){this.tariff=!0}},beforeDestroy:function(){"function"==typeof this.canvas.off&&(this.canvas.off("canvas:shaken",this.listBuilder),this.canvasListen=!1)},beforeMount:function(){this.listBuilder(this.canvas._objects)}},b=(n(1807),n(250)),k=Object(b.a)(y,(function(){var t=this,e=t._self._c;return e("lazy-graph-drag",{staticClass:"drag-manager",attrs:{hash:"manager",title:t.$t("graph.layers"),close:!0,snap:t.snap,scrollable:""},on:{close:function(e){return t.$emit("tool:cancel")}}},[t.layers.length?[e("slick-list",{staticClass:"layers-info",attrs:{value:t.layers,helperClass:"layers-info",appendTo:".layers-info",lockToContainerEdges:"",lockOffset:"20%",lockAxis:"y"},on:{"sort-start":t.setActive,"sort-end":t.changeList,input:t.correction}},t._l(t.layers,(function(n,s){return e("slick-item",{key:s,attrs:{disabled:"promo-link"===n.type,index:s}},["curved-controls"!==n.type?e("pass",{attrs:{includes:t.selection(s)},scopedSlots:t._u([{key:"default",fn:function(u){var p,d=u.includes;return[e("lazy-helper-fieldset",{class:(p={},Object(l.a)(p,"".concat(t.color,"--text"),d),Object(l.a)(p,"pt-2",s>0),p),attrs:{borderColor:d?t.hex:"",dense:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"layer-title"},[t._v("\n                  "+t._s(n.custom.name)+"\n                ")]),t._v(" "),e("div",{staticClass:"controls"},["promo-link"!==n.type?[e(r.a,{attrs:{transition:"slide-x-transition","close-on-content-click":!1,"max-width":210,"min-width":210,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on;return[e(i.a,t._g({class:Object(l.a)({},"".concat(t.color,"--text"),d),attrs:{disabled:n.disallow,dense:""}},a),[t._v("\n                          "+t._s(t._f("icon")(n))+"\n                        ")])]}}],null,!0)},[t._v(" "),e(a.a,{attrs:{dense:""}},t._l(t.callbacks(n),(function(i,a){return e(o.a,{key:a,on:{click:function(t){return t.stopPropagation(),i.onClick({index:s,item:n})}}},[e(c.b,[t._v("\n                            "+t._s(i.title)+"\n                          ")])],1)})),1)],1)]:[e(i.a,{class:Object(l.a)({},"".concat(t.color,"--text"),d),attrs:{disabled:n.disallow,dense:""},on:{click:t.purshase}},[t._v("\n                      "+t._s(t._f("icon")(n))+"\n                    ")])]],2)]},proxy:!0}],null,!0)})]}}],null,!0)}):t._e()],1)})),1)]:[e("div",{staticClass:"layers-info"},[e("lazy-helper-fieldset",{attrs:{dense:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"layer-empty"},[t._v("\n            -- "+t._s(t._f("lowercase")(t.$t("graph.empty")))+" --\n          ")])]},proxy:!0}])})],1)],t._v(" "),e(s.a,{attrs:{width:t.mobile?"100%":"540px",fullscreen:t.mobile},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("lazy-graph-rename-dialogue",{attrs:{name:t.name},on:{close:function(e){t.dialog=!1},apply:t.applyName}})],1),t._v(" "),e(s.a,{attrs:{width:t.mobile?"100%":"540px",fullscreen:t.mobile},model:{value:t.tariff,callback:function(e){t.tariff=e},expression:"tariff"}},[e("lazy-graph-tariff-dialogue",{on:{close:function(e){t.tariff=!1}}})],1)],2)}),[],!1,null,"8bd89ef6",null);e.default=k.exports}}]);