document.addEventListener('DOMContentLoaded', init)

const error = 'something went wrong'
const btn = '.download-btn'
const img = '.imgBx'

const path = window.location.pathname.slice(1)
  .replace(/curriculum-vitae\//, '')
  .replace(/\.html/, '') || 'doc'

const link = ({
  doc: 'https://alekstar79.github.io/curriculum-vitae/doc-new.pdf',
  wide: 'https://alekstar79.github.io/curriculum-vitae/wide-new.pdf'
})[path]

function init()
{
  document.querySelector(img).addEventListener('click', toggleAvatar)
  document.querySelector(btn).addEventListener('click', download)
}

function download()
{
  fetch(link)
    .then(resp => resp.status === 200 ? resp.blob() : Promise.reject(error))
    .then(blob => {
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')

      a.style.display = 'none'
      a.download = 'cv.pdf'
      a.href = url

      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })
    .catch(e => alert(e))
}

function toggleAvatar()
{
  this.classList.toggle('imgBx--show')
}
