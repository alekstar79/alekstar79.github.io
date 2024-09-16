document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.download-btn')
    .addEventListener('click', download)
})

const error = 'something went wrong'
const link = '/doc.pdf'

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
    .catch(() => alert(error))
}
