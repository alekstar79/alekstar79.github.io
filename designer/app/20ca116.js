(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1583:function(t,s,e){},1761:function(t,s,e){"use strict";e(1583)},1925:function(t,s,e){"use strict";e.r(s);var a=e(1069),i=e(1093),n=e(1150),c=e(1070),r=(e(34),{mixins:[e(1140).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:["/img/help/stream-charts-01.png","/img/help/stream-charts-02.png"]}},methods:{view:function(t){this.$bus.$emit("view",{idx:t,frame:this.images.map((function(t){return{url:t,src:t}})),edit:!1})}}}),l=(e(1761),e(250)),o=Object(l.a)(r,(function(){var t=this,s=t._self._c;return s(c.a,{staticClass:"pane scroller",class:"theme--".concat(t.$vuetify.theme.dark?"dark":"light")},[s(a.a,{staticClass:"pane__topic",class:{fullscreen:t.fullscreen,mobile:t.mobile}},[s("h2",{staticClass:"pane__topic-title mb-5"},[t._v("Графики.")]),t._v(" "),s("p",{staticClass:"pane__topic-definition"},[t._v("\n            Окно графиков модуля стрим - это визуальное представление статистики по тегам. Имеет два режима -\n            график абсолютных показателей (barchart), за весь период сбора статистики, начиная с момента\n            установки фильтра, и график посуточной динамики изменений (linechart) данной выборки тегов.\n            Последний режим, позволяет варьировать временным диапазоном (бегунок под графиком), для более\n            удобного отображения статистики. Чекбоксы в футере окна, позволяют включать или исключать (комбинировать)\n            набор требуемых для отображения тегов, что также, на ряду с time range слайдером, позволяет гибко\n            кастомизировать график. В хедере окна, предусмотрены две кнопки - переключеник графиков\n            "),s(i.a,{attrs:{dense:""}},[t._v("mdi-chart-bar")]),t._v(" и сброс статистики "),s(i.a,{attrs:{dense:""}},[t._v("mdi-sync")])],1),t._v(" "),s(c.a,{staticClass:"pane__images justify-flex pc2"},[s(n.a,{staticClass:"image-01",attrs:{src:t.images[0]},on:{click:function(s){return t.view(0)}}}),t._v(" "),s(n.a,{staticClass:"image-02",attrs:{src:t.images[1]},on:{click:function(s){return t.view(1)}}})],1),t._v(" "),s("div",{staticClass:"clearfix"}),t._v(" "),s("p",{staticClass:"pane__topic-closing"},[t._v("\n            Справочное руководство может быть обновлено, уточнено и дополнено.\n        ")])],1)],1)}),[],!1,null,"0219dd5a",null);s.default=o.exports}}]);