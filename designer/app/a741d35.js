(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1563:function(t,n,s){},1735:function(t,n,s){"use strict";s(1563)},1903:function(t,n,s){"use strict";s.r(n);var e=s(1069),i=s(1093),a=s(1149),c=s(1070),l=(s(34),{mixins:[s(1139).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:["/img/help/covers-templates-01.png"]}},methods:{view:function(t){this.$bus.$emit("view",{idx:t,frame:this.images.map((function(t){return{url:t,src:t}})),edit:!1})}}}),o=(s(1735),s(250)),r=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n(c.a,{staticClass:"pane scroller",class:"theme--".concat(t.$vuetify.theme.dark?"dark":"light")},[n(e.a,{staticClass:"pane__topic",class:{fullscreen:t.fullscreen,mobile:t.mobile}},[n("h2",{staticClass:"pane__topic-title mb-5"},[t._v("Список шаблонов.")]),t._v(" "),n(c.a,{staticClass:"pane__images right"},[n(a.a,{staticClass:"image-01",attrs:{src:t.images[0]},on:{click:function(n){return t.view(0)}}})],1),t._v(" "),n("p",{staticClass:"pane__topic-disclosure"},[t._v("\n      Список шаблонов - это ни что иное как набор готовых обложек для вашей группы! Их можно использовать как есть,\n      можно настраивать под себя (что более логично), как примеры или заготовки. А так же создание обложки с\n      абсолютного нуля, ни кто не отменял. Как и весь интерфейс приложения, мы постарались сделать данный модуль\n      как можно проще. В данном модуле вы можете обозревать визуальное представление обложек, то как они\n      будут смотреться в шапке вашей группы. Все изображения кликабельны (собственно говоря как и во всем приложении),\n      и при клике открываются во встроенном просмотрщике, который позволяет их увеличить, уменьшить, покрутить, отразить\n      включить слайд шоу наконец и отправить понравившийся шаблон в редактор, для работы с ним. Так же в интерфейсе,\n      у каждого шаблона имеется кнопка с выпадающим меню выбора действия - выбрать или редактировать.\n      Выбор, помещает обложку в список ваших обложек, где вы ее и можете сразу увидеть в соответствующем модуле и\n      проводить над ней манипуляции, предусмотренные приложением. Редактировать - позволяет сразу отправить обложку\n      в редактор, без предварительной установки в список ваших сохраненных обложек. Поработать над ней там (в редакторе)\n      и уже оттуда установить в список сохраненных. Кнопка добавить "),n(i.a,{attrs:{dense:""}},[t._v("mdi-plus-circle-outline")]),t._v("\n      в хедере модуля, по задумке должа реализовывать функционал добавления шаблонов непосредственно пользователями,\n      но на данном этапе, находится в стадии обсуждения и принятия решения о целесообразности ее в приложении.\n    ")],1),t._v(" "),n("p",{staticClass:"pane__topic-closing"},[t._v("\n      Справочное руководство может быть обновлено, уточнено и дополнено.\n    ")])],1)],1)}),[],!1,null,"02d66048",null);n.default=r.exports}}]);