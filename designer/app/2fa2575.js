(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1604:function(s,t,i){},1781:function(s,t,i){"use strict";i(1604)},1947:function(s,t,i){"use strict";i.r(t);var a=i(1069),e=i(1093),n=i(1149),l=i(1070),_=(i(34),{mixins:[i(1139).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:["/designer/img/help/graph-left-01.png","/designer/img/help/graph-left-02.png","/designer/img/help/graph-left-03.png","/designer/img/help/graph-left-04.png"]}},methods:{view:function(s){this.$bus.$emit("view",{idx:s,frame:this.images.map((function(s){return{url:s,src:s}})),edit:!1})}}}),c=(i(1781),i(250)),r=Object(c.a)(_,(function(){var s=this,t=s._self._c;return t(l.a,{staticClass:"pane scroller",class:"theme--".concat(s.$vuetify.theme.dark?"dark":"light")},[t(a.a,{staticClass:"pane__topic",class:{fullscreen:s.fullscreen,mobile:s.mobile}},[t("h2",{staticClass:"pane__topic-title mb-5"},[s._v("Левая панель инструментов.")]),s._v(" "),t(n.a,{staticClass:"pane__images image-01 right",attrs:{src:s.images[0]},on:{click:function(t){return s.view(0)}}}),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[t(e.a,{attrs:{dense:""}},[s._v("mdi-brush")]),s._v(" Рисование - инструмент свободного пера. Интерфейс панели управления,\n      содержит:\n    ")],1),s._v(" "),t("ul",{staticClass:"features-list with-marks dense"},[t("li",[s._v("селект, для выбора типа пера (карандаш, круг, спрей, паттерн)")]),s._v(" "),t("li",[s._v("слайдер установки толщины пера")]),s._v(" "),t("li",[s._v("палитра выбора цвета пера")])]),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Отрисовка графики, осуществляется перемещением курсора мыши по холсту, с зажатой левой кнопкой мыши.\n      По завершении и нажатии кнопки применить "),t(e.a,{attrs:{dense:""}},[s._v("mdi-check")]),s._v(", вся вновь отрисованная\n      графика помещается в новый слой.\n    ")],1),s._v(" "),t("div",{staticClass:"clearfix"}),s._v(" "),t(n.a,{staticClass:"pane__images image-02 right",attrs:{src:s.images[1]},on:{click:function(t){return s.view(1)}}}),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[t(e.a,{attrs:{dense:""}},[s._v("mdi-shape")]),s._v(" Фигура - инструмент отрисовки геометрических фигур. В интерфейсе\n      панели управления содержится:\n    ")],1),s._v(" "),t("ul",{staticClass:"features-list with-marks dense"},[t("li",[s._v("переключатель выбора геометрии фигуры (линия, прямоугольник, треугольник, эллипс)")]),s._v(" "),t("li",[s._v("селект выбора типа линии (сплошная, точечная, пунктирная)")]),s._v(" "),t("li",[s._v("селект установки толщины линии")]),s._v(" "),t("li",[s._v("палитра цвета обводки")]),s._v(" "),t("li",[s._v("палитра цвета заливки")])]),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Отрисовка фигур, аналогично предыдущему инструменту, осуществляется перемещением курсора мыши по холсту,\n      с зажатой левой кнопкой мыши. По завершении перемещения и освобождении левой кнопки, созданная фигура,\n      сразу помещается в новый слой. Можно продолжать создавать фигуры далее, изменять настройки, либо\n      закрыть панель - инструмент деактивируется. Все созданные фигуры будут находиться в отдельных слоях.\n    ")]),s._v(" "),t("div",{staticClass:"clearfix"}),s._v(" "),t(n.a,{staticClass:"pane__images image-03 right",attrs:{src:s.images[2]},on:{click:function(t){return s.view(2)}}}),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[t(e.a,{attrs:{dense:""}},[s._v("mdi-text")]),s._v(" Текст - инструмент набора текста. Интерфейс панели управления,\n      содержит:\n    ")],1),s._v(" "),t("ul",{staticClass:"features-list with-marks dense"},[t("li",[s._v("селект выбора шрифта")]),s._v(" "),t("li",[s._v("палитру выбора цвета заливки")]),s._v(" "),t("li",[s._v("палитру выбора цвета обводки")]),s._v(" "),t("li",[s._v("слайдер установки толщины обводки")])]),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[s._v('\n      Вставка текстового слоя в холст, осуществляется по принципу предыдущих инструментов. При этом,\n      текстовое содержимое слоя - шаблонная фраза "TAP AND TYPE", что в адаптивном переводе\n      означает - коснись и печатай, передавая тем самым, принцип редактирования созданного слоя.\n      Для редактирования текста, необходимо просто кликнуть по тексту, после чего появится курсор и\n      программа будет ожидать пользовательского ввода. По завершении набора (редактирования), достаточно\n      просто кликнуть в свободном месте рабочей области. Остальные параметры, такие как размер шрифта,\n      межсимвольный размер, высота строки, выравнивание и т.д., доступны в панели настроек текста,\n      открывающуюся по клику на шестеренку в поле данного текста.\n    ')]),s._v(" "),t("div",{staticClass:"clearfix"}),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[t(e.a,{attrs:{dense:""}},[s._v("mdi-reflect-vertical")]),s._v(" Вертикальное зеркало - отражает выбранный объект по вертикали.\n      Не имеет панели настроек.\n    ")],1),s._v(" "),t("div",{staticClass:"clearfix"}),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[t(e.a,{attrs:{dense:""}},[s._v("mdi-reflect-horizontal")]),s._v(" Горизонтальное зеркало - отражает выбранный объект по горизонтали.\n      Не имеет панели настроек.\n    ")],1),s._v(" "),t("div",{staticClass:"clearfix"}),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[t(e.a,{attrs:{dense:""}},[s._v("mdi-rotate-right")]),s._v(" Поворот - осуществляет поворот, выделенного объекта, на 45°.\n      В случае отсутствия выделения, поворачивает все объекты холста, за исключением объектов,\n      не подверженных повороту (такие как виджеты). Не имеет панели настроек.\n    ")],1),s._v(" "),t("div",{staticClass:"clearfix"}),s._v(" "),t(n.a,{staticClass:"pane__images image-04 right",attrs:{src:s.images[3]},on:{click:function(t){return s.view(3)}}}),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[t(e.a,{attrs:{dense:""}},[s._v("mdi-eraser")]),s._v(" Ластик, применяет эффект ластика к выбранному объекту. Интерфейс\n      панели управления, содержит:\n    ")],1),s._v(" "),t("ul",{staticClass:"features-list with-marks dense"},[t("li",[s._v("слайдер толщины ластика")]),s._v(" "),t("li",[s._v("слайдер прозрачности")]),s._v(" "),t("li",[s._v("слайдер размытия")])]),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Обозначенные параметры, призваны регулировать плавность эффекта (перехода от прозрачного к непрозрачному)\n    ")]),s._v(" "),t("div",{staticClass:"clearfix"}),s._v(" "),t("p",{staticClass:"pane__topic-disclosure"},[t(e.a,{attrs:{dense:""}},[s._v("mdi-crop")]),s._v(" Обрезка - инструмент обрезки выбранного изображения.\n      Не имеет панели настроек, при активации, начинает ожидать манипуляций мышью.\n      Необходимо просто зажать левую кнопку мыши и начать выделять прямоугольную область.\n    ")],1),s._v(" "),t("div",{staticClass:"clearfix"}),s._v(" "),t("p",{staticClass:"pane__topic-closing"},[s._v("\n      Справочное руководство может быть обновлено, уточнено и дополнено.\n    ")])],1)],1)}),[],!1,null,"246d7110",null);t.default=r.exports}}]);