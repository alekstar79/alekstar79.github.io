import { useMorph } from './js/morph.js'

useMorph(
  document.querySelector('.morph-wrapper'),
  [
    './img/dog1.jpg',
    './img/dog2.jpg',
    './img/dog3.jpg',
    './img/dog4.jpg',
    './img/dog5.jpg',
  ],
  {
    pointCount: 21000,
    pointRadius: 3,
    autoPlay: true,
    loop: true,

    backgroundColor: 'transparent',

    canvasStyle: {
      maxWidth: '640px',
      maxHeight: '500px'
    }
  }
)
