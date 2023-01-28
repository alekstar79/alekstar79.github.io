"use strict";

function init() {
  var e = new ymaps.Map("map", {
      center: [55.68, 37.57],
      zoom: 12
    }),
    a = new ymaps.Placemark([55.7, 37.6], {}, {
      iconLayout: "default#image",
      iconImageHref: "../svg/ellipse.svg",
      iconImageSize: [15, 15],
      iconImageOffset: [-3, -3]
    });
  e.geoObjects.add(a);
}
ymaps.ready(init);