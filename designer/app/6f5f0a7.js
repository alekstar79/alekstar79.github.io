(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1607:function(t,n,s){},1784:function(t,n,s){"use strict";s(1607)},1950:function(t,n,s){"use strict";s.r(n);var i=s(1069),e=s(1093),a=s(1149),c=s(1070),l=(s(34),{mixins:[s(1139).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:["designer/img/help/graph-widgets-01.png","designer/img/help/graph-widgets-02.png"]}},methods:{view:function(t){this.$bus.$emit("view",{idx:t,frame:this.images.map((function(t){return{url:t,src:t}})),edit:!1})}}}),r=(s(1784),s(250)),o=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n(c.a,{staticClass:"pane scroller",class:"theme--".concat(t.$vuetify.theme.dark?"dark":"light")},[n(i.a,{staticClass:"pane__topic",class:{fullscreen:t.fullscreen,mobile:t.mobile}},[n("h2",{staticClass:"pane__topic-title mb-5"},[t._v("Виджеты.")]),t._v(" "),n("p",{staticClass:"pane__topic-definition"},[t._v("\n      Виджеты представляют из себя не просто графические примитивы, это группа объектов с определенным\n      поведением и внутренней логикой, объединенные уникальным представлением и одной моделью данных.\n      Как правило это иконка виджета и один или несколько текстовых блоков, отражающие ту или иную\n      информацию, соответствующую данному типу виджета. Каждый виджет, предоставляет возможность модификации\n      его размеров, геометрии и позиционирования элементов как в контексте холста, так и относительно друг\n      друга. Позиционирование виджета на холсте, осуществляется аналогично остальным графическим примитивам -\n      обычным перетаскиванием мыши. Позиционирование отдельных компонентов виджета, становится доступно\n      при разгруппировки последних, посредством двойного клика по виджету, а точнее по одному из его\n      компонентов, позицию или размер которого требуется изменить. Хотя, так же поддерживается и переключение\n      между компонентами для модификации, простым выбором мышью ("),n("i",[t._v("left clk")]),t._v("). Как и в остальных\n      графических объектах, в виджетах присутствует меню инструментов, доступное по клику на иконку\n      шестеренки виджета "),n(e.a,{attrs:{dense:""}},[t._v("mdi-cog")]),t._v(" или через менеджер слоев ("),n("i",[t._v("п. Settings")]),t._v("),\n      с набором индивидуальных инструментов, согласно типу виджета.\n    ")],1),t._v(" "),n(c.a,{staticClass:"pane__images justify-flex pc2",attrs:{column:""}},[n(a.a,{staticClass:"image-01",attrs:{src:t.images[0]},on:{click:function(n){return t.view(0)}}}),t._v(" "),n(a.a,{staticClass:"image-02",attrs:{src:t.images[1]},on:{click:function(n){return t.view(1)}}})],1),t._v(" "),n("div",{staticClass:"clearfix"}),t._v(" "),n("p",{staticClass:"pane__topic-closing"},[t._v("\n      Справочное руководство может быть обновлено, уточнено и дополнено.\n    ")])],1)],1)}),[],!1,null,"fe3b9226",null);n.default=o.exports}}]);