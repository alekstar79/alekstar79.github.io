(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1605:function(s,i,t){},1782:function(s,i,t){"use strict";t(1605)},1948:function(s,i,t){"use strict";t.r(i);var a=t(1069),e=t(1093),n=t(1149),c=t(1070),l=(t(34),{mixins:[t(1139).c],props:{fullscreen:{type:Boolean,required:!0}},computed:{mobile:function(){return!!(this.$BROWSER||{}).IS_MOBILE}},watch:{fullscreen:function(){this.smooth.scrollTo(null,0)}},data:function(){return{images:["/designer/img/help/graph-right-01.png","/designer/img/help/graph-right-02.png","/designer/img/help/graph-right-03.png","/designer/img/help/graph-right-04.png","/designer/img/help/graph-right-05.png","/designer/img/help/graph-right-06.png","/designer/img/help/graph-right-07.png","/designer/img/help/graph-right-08.png"]}},methods:{view:function(s){this.$bus.$emit("view",{idx:s,frame:this.images.map((function(s){return{url:s,src:s}})),edit:!1})}}}),r=(t(1782),t(250)),_=Object(r.a)(l,(function(){var s=this,i=s._self._c;return i(c.a,{staticClass:"pane scroller",class:"theme--".concat(s.$vuetify.theme.dark?"dark":"light")},[i(a.a,{staticClass:"pane__topic",class:{fullscreen:s.fullscreen,mobile:s.mobile}},[i("h2",{staticClass:"pane__topic-title mb-5"},[s._v("Правая панель инструментов.")]),s._v(" "),i(n.a,{staticClass:"pane__images image-01 right",attrs:{src:s.images[0]},on:{click:function(i){return s.view(0)}}}),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[i(e.a,{attrs:{dense:""}},[s._v("mdi-magic-wand")]),s._v(" Волшебная палочка - инструмент нечеткий выбор (Magic Wand)\n      предназначен для выбора областей текущего слоя на основе сходства цветов. Интерфейс панели управления,\n      содержит:\n    ")],1),s._v(" "),i("ul",{staticClass:"features-list with-marks dense"},[i("li",[s._v("слайдер уровня порога заполнения")]),s._v(" "),i("li",[s._v("палитра выбора цвета заливки")]),s._v(" "),i("li",[s._v("переключатель режимов обработки")])]),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Уровень или порог заполнения - определяет величину насколько далеко будет распространяться выделение,\n      аналогично тому, как работает Fuzzy Select (Magic Wand) во всех известных графических редакторах.\n      Выделение начинается в точке, где вы нажимаете, и распространяется наружу до тех пор, пока цвет\n      или альфа-значение не станут “слишком разными”. Палитра заливки, определяет каким цветом будет\n      залита выделенная область, применительно только к режиму заливки. Переключатель режимов, в свою\n      очередь, как раз определяет, какое действие необходимо совершить, над выделенной областью -\n      залить, вырезать, копировать.\n    ")]),s._v(" "),i("div",{staticClass:"clearfix"}),s._v(" "),i(n.a,{staticClass:"pane__images image-02 right",attrs:{src:s.images[1]},on:{click:function(i){return s.view(1)}}}),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[i(e.a,{attrs:{dense:""}},[s._v("mdi-desaturate")]),s._v(" Обесцвечивание - инструмент преобразования цветов активного слоя\n      в соответствующие оттенки серого. Интерфейс панели управления, содержит:\n    ")],1),s._v(" "),i("ul",{staticClass:"features-list with-marks dense"},[i("li",[s._v("слайдер толщины кисти")])]),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Используя этот инструмент, вы можете удалить цвет из определенной области, преобразовав его в градации серого\n      и оставив при этом остальную часть изображения в цвете.\n    ")]),s._v(" "),i("div",{staticClass:"clearfix"}),s._v(" "),i(n.a,{staticClass:"pane__images image-03 right",attrs:{src:s.images[2]},on:{click:function(i){return s.view(2)}}}),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[i(e.a,{attrs:{dense:""}},[s._v("mdi-sharpen")]),s._v(" Резкость - инструмент повышения резкости. Интерфейс панели управления,\n      содержит:\n    ")],1),s._v(" "),i("ul",{staticClass:"features-list with-marks dense"},[i("li",[s._v("слайдер толщины кисти")]),s._v(" "),i("li",[s._v("слайдер величины усиления резкости")])]),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Процесс повышения резкости осуществляется путем усиления контраста между светлыми и темными пикселями.\n      Этот краевой контраст определяется в пределах соседних пикселей или смежной группы пикселей. Усиление\n      резкости делает края более чёткими за счет увеличения контраста и создает более резкие переходы между\n      светлыми и темными пикселями. Как и предыдуший инструмент, позволяет применять эффект локально.\n    ")]),s._v(" "),i("div",{staticClass:"clearfix"}),s._v(" "),i(n.a,{staticClass:"pane__images image-04 right",attrs:{src:s.images[3]},on:{click:function(i){return s.view(3)}}}),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[i(e.a,{attrs:{dense:""}},[s._v("mdi-blur")]),s._v(" Размытие - инструмент использует кисть для локального размытия изображения.\n      Интерфейс панели управления, содержит:\n    ")],1),s._v(" "),i("ul",{staticClass:"features-list with-marks dense"},[i("li",[s._v("слайдер толщины кисти")]),s._v(" "),i("li",[s._v("слайдер величины размытия")])]),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Размытие может быть полезно, если какой-то элемент вашего изображения выделяется слишком сильно, и вы\n      хотели бы его смягчить. Если вы хотите размыть весь слой или большую его часть, вам, вероятно,\n      будет лучше использовать один из фильтров размытия. Отличительная черта инструмента от аналогичных,\n      в десктопных приложениях - его неинкрементальная суть (работа). Т.е. по мере совершения проходов кистью,\n      эффект не накапливается, а остается на уровне выставленного значения\n    ")]),s._v(" "),i("div",{staticClass:"clearfix"}),s._v(" "),i(n.a,{staticClass:"pane__images image-05 right",attrs:{src:s.images[4]},on:{click:function(i){return s.view(4)}}}),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[i(e.a,{attrs:{dense:""}},[s._v("mdi-bulge")]),s._v(" Линза или выпуклость - инструмент деформации изображения, с целью\n      придания ему локального эффекта выпуклости. Интерфейс панели управления, содержит:\n    ")],1),s._v(" "),i("ul",{staticClass:"features-list with-marks dense"},[i("li",[s._v("слайдер толщины кисти")]),s._v(" "),i("li",[s._v("слайдер величины выпуклости")])]),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[s._v('\n      Данный инструмент, для создания эффекта набухания на целевом объекте, сочетает в себе два эффекта -\n      "преобразование масштаба" и "радиальный спад".\n    ')]),s._v(" "),i("div",{staticClass:"clearfix"}),s._v(" "),i(n.a,{staticClass:"pane__images image-06 right",attrs:{src:s.images[5]},on:{click:function(i){return s.view(5)}}}),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[i(e.a,{attrs:{dense:""}},[s._v("mdi-clone")]),s._v(" Клонирование - инструмент, использующий кисть, для копирования пикселей\n      изображения слоя. Интерфейс панели управления, содержит:\n    ")],1),s._v(" "),i("ul",{staticClass:"features-list with-marks dense"},[i("li",[s._v("слайдер толщины кисти")])]),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[s._v('\n      Инструмент имеет множество применений: одно из самых важных-это устранение проблемных областей\n      на изображении, "закрашивая" их пиксельными данными из других областей. Эта техника требует времени\n      для изучения, но в руках опытного пользователя она очень мощна. Еще одно важное применение - рисовать\n      узорчатые линии или кривые.\n    ')]),s._v(" "),i("div",{staticClass:"clearfix"}),s._v(" "),i(n.a,{staticClass:"pane__images image-07 right",attrs:{src:s.images[6]},on:{click:function(i){return s.view(6)}}}),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[i(e.a,{attrs:{dense:""}},[s._v("mdi-fill-color")]),s._v(" Заливка - инструмент заливки, выбранного объекта или его области\n      сплошным цветом. Интерфейс панели управления, содержит:\n    ")],1),s._v(" "),i("ul",{staticClass:"features-list with-marks dense"},[i("li",[s._v("палитру выбора цвета заливки")])]),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Для обработки применяется алгоритм заливки потоком (flood fill), который определяет область, связанную\n      c начальным пикселем (начальная точка распространения заливки), по цветовому атрибуту. Рекурсивно,\n      обходя соседние пиксели и тестируя значение цвета на вхождение в диапазон пороговых величин.\n    ")]),s._v(" "),i("div",{staticClass:"clearfix"}),s._v(" "),i(n.a,{staticClass:"pane__images image-08 right",attrs:{src:s.images[7]},on:{click:function(i){return s.view(7)}}}),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[i(e.a,{attrs:{dense:""}},[s._v("mdi-eyedropper")]),s._v(" Пипетка - используется для выбора цвета из произвольной точки\n      изображения. Интерфейс панели управления, содержит:\n    ")],1),s._v(" "),i("ul",{staticClass:"features-list with-marks dense"},[i("li",[s._v("цветовую палитру")])]),s._v(" "),i("p",{staticClass:"pane__topic-disclosure"},[s._v("\n      Используются цвета только видимых слоёв.\n    ")]),s._v(" "),i("div",{staticClass:"clearfix"}),s._v(" "),i("p",{staticClass:"pane__topic-closing"},[s._v("\n      Справочное руководство может быть обновлено, уточнено и дополнено.\n    ")])],1)],1)}),[],!1,null,"7db14d92",null);i.default=_.exports}}]);