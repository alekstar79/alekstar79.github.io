function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}

window.addEventListener('load', function() {
  if (document.querySelector('.wrapper')) {
    setTimeout(function() {
      document.querySelector('.wrapper').classList.add('_loaded')
    }, 0)
  }
})

const root = document.documentElement
const marqueeContent = document.querySelector('ul.marquee-content')

root.style.setProperty('--marquee-elements', `${marqueeContent.children.length}`)

const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed')

for (let index = 0; index < marqueeElementsDisplayed.length; index++) {
  marqueeContent.appendChild(marqueeContent.children[index].cloneNode(true))
}
