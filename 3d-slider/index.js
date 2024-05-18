const sliderEl = document.getElementById('slider')
const slider = new Slider(sliderEl)

let timeoutId = 0

function autoSlide()
{
  requestAnimationFrame(() => {
    slider.next()
  })

  timeoutId = setTimeout(autoSlide, 5000)
}

function stopAutoSlide()
{
  timeoutId && clearTimeout(timeoutId)

  this.removeEventListener('touchstart', stopAutoSlide)
  this.removeEventListener('mousemove', stopAutoSlide)
}

sliderEl.addEventListener('mousemove', stopAutoSlide)
sliderEl.addEventListener('touchstart', stopAutoSlide)

timeoutId = setTimeout(autoSlide, 2000)
