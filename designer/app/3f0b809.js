(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1589:function(t,s,e){},1767:function(t,s,e){"use strict";e(1589)},1933:function(t,s,e){"use strict";e.r(s);var i=e(1069),n=e(1093),a=e(1150),c=e(1070),l=(e(34),{mixins:[e(1140).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:["/img/help/stream-list-01.png","/img/help/stream-list-02.png","/img/help/stream-list-03.png"]}},methods:{view:function(t){this.$bus.$emit("view",{idx:t,frame:this.images.map((function(t){return{url:t,src:t}})),edit:!1})}}}),r=(e(1767),e(250)),o=Object(r.a)(l,(function(){var t=this,s=t._self._c;return s(c.a,{staticClass:"pane scroller",class:"theme--".concat(t.$vuetify.theme.dark?"dark":"light")},[s(i.a,{staticClass:"pane__topic",class:{fullscreen:t.fullscreen,mobile:t.mobile}},[s("h2",{staticClass:"pane__topic-title mb-5"},[t._v("Стрим монитор.")]),t._v(" "),s(c.a,{staticClass:"pane__images justify-flex right pc2"},[s(a.a,{staticClass:"image-01",attrs:{src:t.images[0]},on:{click:function(s){return t.view(0)}}}),t._v(" "),s(a.a,{staticClass:"image-02",attrs:{src:t.images[1]},on:{click:function(s){return t.view(1)}}})],1),t._v(" "),s("p",{staticClass:"pane__topic-disclosure"},[t._v("\n            Данный модуль, под капотом использует Vk Streaming API. Он позволяет подписаться на определенные\n            ивенты (посты, комментарии) и получать их в режиме реального времени. Главный экран модуля, представляет\n            из себя очередь пришедших событий, соответствующих тематике, выбранных пользователем тегов. Каждый\n            ивент в очереди, можно рассмотреть детально, кликнув по соответствующей кнопке "),s(n.a,{attrs:{dense:""}},[t._v("mdi-eye-outline")]),t._v(",\n            либо добавить в закладки "),s(n.a,{attrs:{dense:""}},[t._v("mdi-playlist-plus")]),t._v(". Окно детального просмотра отображает\n            соответственно всю информацию ивента - содержание поста или комментария, прикрепленные вложения, теги,\n            ссылки. Также в интерфейсе окна предусмотрены кнопки добавления в закладки "),s(n.a,{attrs:{dense:""}},[t._v("mdi-bookmark")]),t._v("\n            и переход к записи "),s(n.a,{attrs:{dense:""}},[t._v("mdi-redo-variant")]),t._v(". В самом содержимом, клик по аватарке, осуществляет\n            переход к владельцу (инициатору) события.\n        ")],1),t._v(" "),s(a.a,{staticClass:"pane__images image-03 left",attrs:{src:t.images[2]},on:{click:function(s){return t.view(2)}}}),t._v(" "),s("p",{staticClass:"pane__topic-disclosure"},[t._v('\n            Окно настройки событий, позволяет ввести произвольные теги (поле фильтр), до 10 штук, которые соответствуют\n            интересующей тематике. Ниже распологается поле ввода "стоп лист", содержимое которого будет указывать\n            программе на ивенты, которые необходимо исключить из общего потока, в содержании которых присутствует\n            указанный контент. Отдельным чекбоксом вынесена обсценная (ненормативная) лексика. Так же в интерфейсе\n            предусмотрено поле ввода URL адреса, на который требуется ретранслировать, приходящие события. Прием и\n            обработка на принимающей стороне, возлагается на пользователя. Статистика по ивентам представлена в\n            отдельном модуле и будет рассмотрена в соответствующем разделе справки.\n        ')]),t._v(" "),s("div",{staticClass:"clearfix"}),t._v(" "),s("p",{staticClass:"pane__topic-closing"},[t._v("\n            Справочное руководство может быть обновлено, уточнено и дополнено.\n        ")])],1)],1)}),[],!1,null,"59f5ecde",null);s.default=o.exports}}]);