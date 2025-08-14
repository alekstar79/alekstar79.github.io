for (let i = 1; i < 1000; i++) {
  const container = document.createElement('div')
  const element1 = document.createElement('p')
  const element2 = document.createElement('p')

  element1.textContent = `${i}px`
  element2.textContent = `${i/16}rem`

  element2.addEventListener('click', async () => {
    await navigator.clipboard.writeText(`${i/16}rem`)
  })

  container.appendChild(element1)
  container.appendChild(element2)
  document.body.appendChild(container)
}
