import { useMorph } from './js/morph.js'

useMorph(
  document.querySelector('.container'),
  {
    img1: './img/dog.jpg',
    img2: './img/dalmatian.jpg',

    canvasStyle: {
      maxWidth: '640px',
      maxHeight: '640px'
    }
  }
)
