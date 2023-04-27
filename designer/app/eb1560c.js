(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1567:function(t,s,a){},1739:function(t,s,a){"use strict";a(1567)},1907:function(t,s,a){"use strict";a.r(s);var n=a(1069),i=a(1093),e=a(1149),c=a(1070),l=(a(34),{mixins:[a(1139).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:["/img/help/chatbot-dialogs-01.png","/img/help/chatbot-dialogs-02.png","/img/help/chatbot-dialogs-03.png","/img/help/chatbot-dialogs-04.png","/img/help/chatbot-dialogs-05.png","/img/help/chatbot-dialogs-06.png","/img/help/chatbot-dialogs-07.png"]}},methods:{view:function(t){this.$bus.$emit("view",{idx:t,frame:this.images.map((function(t){return{url:t,src:t}})),edit:!1})}}}),r=(a(1739),a(250)),_=Object(r.a)(l,(function(){var t=this,s=t._self._c;return s(c.a,{staticClass:"pane scroller",class:"theme--".concat(t.$vuetify.theme.dark?"dark":"light")},[s(n.a,{staticClass:"pane__topic",class:{fullscreen:t.fullscreen,mobile:t.mobile}},[s("h2",{staticClass:"pane__topic-title mb-5"},[t._v("Редактор диалогов чатбота.")]),t._v(" "),s("p",{staticClass:"pane__topic-definition"},[t._v("\n            Редактор диалогов - программный модуль, предоставляющий возможность, спроектировать цепочку развития диалога\n            с конечным пользователем (далее собеседник). Диалог, в концепции редактора, представляет собой древовидную\n            структуру вопросов и ответов, реализующую всевозможные альтернативы развития диалога с собеседником,\n            определяемые создателем диалога.\n        ")]),t._v(" "),s(c.a,{staticClass:"pane__images right",attrs:{column:""}},[s(e.a,{staticClass:"image-01",attrs:{src:t.images[0]},on:{click:function(s){return t.view(0)}}}),t._v(" "),s(e.a,{staticClass:"image-02",attrs:{src:t.images[1]},on:{click:function(s){return t.view(1)}}})],1),t._v(" "),s("p",{staticClass:"pane__topic-disclosure"},[t._v("\n            Начальный экран редактора - это список, всех созданных пользователем диалогов. Диалоги не имеют жестой привязки\n            и могут быть подключены к любой группе пользователя из списка подключений. Название диалога в списке, может\n            быть задано и отредактировано в смысловом контексте и предпочтениями пользователя, простым кликом по названию и\n            последующим набором требуемого. Каждый пункт (диалог) в списке имеет следующие элементы управления,\n            представленные соответствующими иконками:\n        ")]),t._v(" "),s("ul",{staticClass:"features-list"},[s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-pencil")]),t._v(" редактировать ")],1),t._v(" "),s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-content-copy")]),t._v(" копировать ")],1),t._v(" "),s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-trash-can-outline")]),t._v(" удалить ")],1)]),t._v(" "),s("p",{staticClass:"pane__topic-disclosure"},[t._v("\n            Удаление и копирование, выполняют соответствующие операции, применительно к диалогу в целом, без вызова\n            дополнительных попап-меню. Но требующих, для подтверждения внесения изменений на сервере, нажатия кнопки\n            сохранить "),s(i.a,{attrs:{dense:""}},[t._v("mdi-content-save")]),t._v(" в шапке (header) окна модуля или отмены действия,\n            путем нажатия кнопки релоад "),s(i.a,{attrs:{dense:""}},[t._v("mdi-sync")]),t._v(" (sync).\n        ")],1),t._v(" "),s("p",{staticClass:"pane__topic-disclosure"},[t._v("\n            Редактирование диалога переключает основное окно редактора в режим редактирования структуры. Если это вновь созданный\n            и еще пустой диалог, то в окне редактирования отображается уведомление о том, что реплики не настроены и\n            под ним кнопка добавления первой реплики. Реплика, в терминологии приложения - это атомарное звено вопрос -> ответ.\n            Если происходит редактирование уже существующего диалога, то соответственно в окне редактирования отображается\n            иерархическая структура цепочки реплик данного диалога. Которые в свою очередь, имеют аналогичные списку,\n            элементы управления (редактировать, копировать, удалить) с тем же функционалом, но применительно к конкретной\n            ветки диалога. Формирование самой же структуры, осуществляется путем перетаскивания между собой, отдельно созданных\n            реплик (звеньев), а так же перемещение одних внутрь других. Названия ветки диалога формируется автоматически\n            на основании вопросов звена верхнего уровня, в данной ветки диалога.\n        ")]),t._v(" "),s(c.a,{staticClass:"pane__images left",attrs:{"mb-3":"",column:""}},[s(e.a,{staticClass:"image-03",attrs:{src:t.images[2]},on:{click:function(s){return t.view(2)}}}),t._v(" "),s(e.a,{staticClass:"image-04",attrs:{src:t.images[3]},on:{click:function(s){return t.view(3)}}})],1),t._v(" "),s("p",{staticClass:"pane__topic-disclosure"},[t._v("\n            Редактирование отдельного звена, переводит окно редактирования структуры в режим редактирования звена. В этом\n            окне отображается два поля ввода, переключатели режимов обработки введенных данных, над соответствующими полями,\n            в виде выпадающих списков, а также блок вложений (attachments) внизу, если таковые определены в данном звене.\n            Верхнее поле для ввода вопроса, может обрабатываться в режиме точного совпадения или в режиме - содержит одно\n            из ключевых слов. Ввод слов, фраз, предложений, осуществляется непосредственным набором на клавиатуре. Поле\n            ответа, обрабатывается в режимах случайного ответа или по условию. Имеет смысл только при условии нескольких\n            вариантов ответа. Ввод ответа производится путем нажатия кнопки добавить "),s(i.a,{attrs:{dense:""}},[t._v("mdi-plus-circle-outline")]),t._v(",\n            после чего открывается всплывающее окно редактирования ответа. Данное окно содержит текстовую область, для\n            ввода собствено текста ответа, а также инструменты редактирования:\n        ")],1),t._v(" "),s("ul",{staticClass:"features-list reply-edit"},[s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-keyboard-outline")]),t._v(" клавиатуры бота ")],1),t._v(" "),s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-paperclip")]),t._v(" вложения ")],1),t._v(" "),s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-code-braces")]),t._v(" добавление переменных ")],1),t._v(" "),s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-emoticon-happy-outline")]),t._v(" эмотиконы ")],1)]),t._v(" "),s("p",{staticClass:"pane__topic-disclosure"},[t._v('\n            Отдельным блоком идут фильтры, которые используются в режиме ответа "по условию". Что позволяет осуществлять алгоритму,\n            выбор различных вариантов ответа в зависимости от категории собеседника, которая в свою очередь и определяется\n            этими фильтрами. Установка фильтров производится в этом же окне, во вкладке фильтры\n            '),s(i.a,{attrs:{dense:""}},[t._v("mdi-filter-outline")]),t._v(". Вложения могут прикреплятся как на уровне звена, так и на уровне\n            любого из вариантов ответов, приоритет в таком случае отдается конкретному варианту ответа. Если в ответе,\n            вложения не определены, прикрепляются те что определены для реплики в целом. Не определены для реплики - не\n            прикрепляется ничего. Вложения формируются из медиафайлов групп(ы) - фото, видео и документы. Т.е. возможно\n            прикреплять любые файлы из всего доступного пользователю списка групп. Окно редактирования клавиатуры, предоставляет\n            следующие инструменты:\n        ")],1),t._v(" "),s("ul",{staticClass:"features-list keyboard-tools"},[s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-pencil")]),t._v(" редактировать ")],1),t._v(" "),s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-content-copy")]),t._v(" сохранить ")],1),t._v(" "),s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-playlist-plus")]),t._v(" добавить ряд ")],1),t._v(" "),s("li",[s(i.a,{attrs:{dense:""}},[t._v("mdi-view-grid-plus")]),t._v(" добавить кнопку ")],1)]),t._v(" "),s("p",{staticClass:"pane__topic-disclosure"},[t._v("\n            Положение кнопок определяется перетаскиванием последних в поле редактирования. Назначение цвета, лэйбла\n            и команды каждой индивидуальной кнопки, задается в отдельном диалоговом окне, по нажатию на значок\n            редактирования на соответствующей кнопке. Обработка команды прописывается пользователем самостоятельно,\n            в логике бота. Как и вложения, клавиатура определятся как для реплики в целом, так и индивидуально,\n            для каждого ответа с той же приоритетностью, но в отличии от вложений, может быть определена дефолтная\n            клавиатура для всего диалога в целом. Назначается в общих настройках диалога "),s(i.a,{attrs:{dense:""}},[t._v("mdi-cog")]),t._v(".\n            Там же возможно указать список ответов по умолчанию, используемых в случаях таких фраз собеседника, соответствие\n            которым не удалось определить.\n        ")],1),t._v(" "),s(c.a,{staticClass:"pane__images justify-flex pc3",attrs:{column:""}},[s(e.a,{staticClass:"image-05",attrs:{src:t.images[4]},on:{click:function(s){return t.view(4)}}}),t._v(" "),s(e.a,{staticClass:"image-06",attrs:{src:t.images[5]},on:{click:function(s){return t.view(5)}}}),t._v(" "),s(e.a,{staticClass:"image-07",attrs:{src:t.images[6]},on:{click:function(s){return t.view(6)}}})],1),t._v(" "),s("div",{staticClass:"clearfix"}),t._v(" "),s("p",{staticClass:"pane__topic-closing"},[t._v("\n            Справочное руководство может быть обновлено, уточнено и дополнено.\n        ")])],1)],1)}),[],!1,null,"36401764",null);s.default=_.exports}}]);