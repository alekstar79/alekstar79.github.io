document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('contain')
  const nav = document.getElementById('nav')
  const btns = document.querySelectorAll('.item')

  document.querySelectorAll('.tabs__btn')
    .forEach(tabsBtn => {
      tabsBtn.addEventListener('click', event => {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tab-content')
          .forEach(tabContent => {
            tabContent.classList.remove('tab-content-active')
          })

        document.querySelectorAll('.tabs__btn')
          .forEach(tabContent => {
            tabContent.classList.remove('tabs__btn-active')
          })

        document.querySelector(`[data-target="${path}"]`)
          .classList.add('tab-content-active')

        document.querySelector(`[data-path="${path}"]`)
          .classList.add('tabs__btn-active')
      })
    })

  burger.addEventListener('click', () => {
    burger.classList.toggle('change')
    nav.classList.toggle('open')
  })

  btns.forEach(btn => {
    btn.addEventListener('click', ({ target }) => {
      const item = target.closest('.item')

      if (item.classList.contains('active')) {
        return item.classList.remove('active')
      }

      btns.forEach((child) => {
        child.classList.remove('active')
      })

      item.classList.add('active')
    })
  })

  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})
