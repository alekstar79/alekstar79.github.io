(window.webpackJsonp=window.webpackJsonp||[]).push([[212,222],{1086:function(t,e,s){},1101:function(t,e,s){"use strict";s.r(e);s(25);var n=s(2),i={props:{border:{type:String,default:""},slotClasses:{type:String,default:""},dense:{type:Boolean,default:!1}},computed:{borderColor:function(){return this.border||(this.$vuetify.theme.dark?"rgba(255,255,255,.24)":"rgba(0,0,0,.38)")},themeClasses:function(){return"theme--".concat(this.$vuetify.theme.dark?"dark":"light")},classes:function(){return Object(n.a)({"v-input":!0,"v-input--hide-details":!0,"v-input--is-label-active":!0,"v-input--dense":this.dense,"v-text-field":!0,"v-text-field--enclosed":!0,"v-text-field--outlined":!0,"v-select":!0},this.themeClasses,!0)}},watch:{"$store.state.app.window":"measure"},data:function(){return{width:"32px",label:!0}},methods:{measure:function(){var t=0;try{(t=this.$refs.label.clientWidth)>155&&(t=155)}catch(e){}this.label=0!==t,this.width="".concat(t,"px")}},mounted:function(){this.$nextTick().then(this.measure)}},l=(s(1108),s(250)),a=Object(l.a)(i,(function(){var t=this,e=t._self._c;return e("div",t._g(t._b({staticClass:"custom",class:t.classes},"div",t.$attrs,!1),t.$listeners),[e("div",{staticClass:"v-input__control"},[e("div",{staticClass:"v-input__slot"},[e("fieldset",{style:{borderColor:t.borderColor}},[e("legend",{style:{width:t.width}},[e("span")])]),t._v(" "),e("div",{staticClass:"v-select__slot"},[t.label?e("label",{ref:"label",staticClass:"v-label v-label--active",class:t.themeClasses},[t._t("label")],2):t._e(),t._v(" "),e("div",{staticClass:"v-select__selections",class:"".concat(t.themeClasses," ").concat(t.slotClasses)},[t._t("content")],2)])])])])}),[],!1,null,"f740371e",null);e.default=a.exports},1108:function(t,e,s){"use strict";s(1086)},1437:function(t,e,s){},1544:function(t,e,s){"use strict";s(1437)},1699:function(t,e,s){"use strict";s.r(e);var n=s(1071),i=(s(3),s(14),s(15),{components:{VueSlider:function(){return s.e(334).then(s.t.bind(null,1893,7))}},props:{dense:{type:Boolean}},data:function(){return{options:{processStyle:{backgroundColor:"#5181b8"},useKeyboard:!0,clickable:!0,width:"auto",dotSize:10,interval:1,duration:.5,height:4,max:128,min:8}}},computed:{current:{set:function(t){this.$store.commit("canvas/setDrawerOption",{magicThreshold:t})},get:function(){return this.$store.state.canvas.drawerOptions.magicThreshold}}}}),l=(s(1544),s(250)),a=Object(l.a)(i,(function(){var t=this,e=t._self._c;return e(n.a,t._b({staticClass:"magic-thresholds"},"v-flex",t.$attrs,!1),[e("helper-fieldset",{attrs:{dense:t.dense},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n      "+t._s(t.$t("graph.threshold"))+"\n    ")]},proxy:!0},{key:"content",fn:function(){return[e("vue-slider",t._b({attrs:{width:"100%"},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},"vue-slider",t.options,!1))]},proxy:!0}])})],1)}),[],!1,null,"4a06f1a8",null);e.default=a.exports;installComponents(a,{HelperFieldset:s(1101).default})}}]);