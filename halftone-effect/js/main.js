window.addEventListener('load', () => {
  pict2pix.animate({
    image: document.getElementById('hendrix'),
    particleType: 'halftone',
    transitionTime: 10000,
    idleTime: 2000,
    separation: 10,
    color: 'black',
    dotSize: 4
  })
})
