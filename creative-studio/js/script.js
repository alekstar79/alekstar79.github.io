ymaps.ready(function() {
  const yMap = new ymaps.Map('map', {
    center: [55.68, 37.57],
    zoom: 12
  })

  yMap.geoObjects.add(
    new ymaps.Placemark([55.7, 37.6], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../svg/ellipse.svg',
      iconImageSize: [15, 15],
      iconImageOffset: [-3, -3]
    })
  )
})
