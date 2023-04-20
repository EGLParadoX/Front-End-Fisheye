export function photographerFactory (data) {
  const { name, id, city, country, tagline, price, portrait } = data

  const picture = `assets/photographers/${portrait}`
  const url = '/Front-End-Fisheye/photographer.html?'

  const searchParams = new URLSearchParams('id=' + id)
  const paramsToString = searchParams.toString()

  function getUserCardDOM () {
    const article = document.createElement('article')
    const a = document.createElement('a')
    a.style.cursor = 'pointer'
    a.addEventListener('click', () => {
      window.location.href = url + paramsToString
    })

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', 'Photo de profil de ' + name)
    img.setAttribute('title', name)
    const h2 = document.createElement('h2')
    const h5 = document.createElement('h5')
    const p = document.createElement('p')
    const prix = document.createElement('p')
    prix.style.color = '#757575'
    prix.style.fontSize = '12px'
    h2.textContent = name
    h5.textContent = city + ', ' + country
    p.textContent = tagline
    prix.textContent = price + '€/jour'
    article.appendChild(a)
    a.appendChild(img)
    a.appendChild(h2)
    article.appendChild(h5)
    article.appendChild(p)
    article.appendChild(prix)
    article.setAttribute('tabindex', '0')
    article.setAttribute('role', 'listitem')

    article.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        const prev = article.previousElementSibling
        if (prev) {
          prev.focus()
        } else {
          const last = article.parentNode.lastElementChild
          last.focus()
        }
      } else if (event.key === 'ArrowDown') {
        const next = article.nextElementSibling
        if (next) {
          next.focus()
        } else {
          const first = article.parentNode.firstElementChild
          first.focus()
        }
      } else if (event.key === 'ArrowLeft') {
        const prev = article.previousElementSibling
        if (prev) {
          prev.focus()
        } else {
          const last = article.parentNode.lastElementChild
          last.focus()
        }
      } else if (event.key === 'ArrowRight') {
        const next = article.nextElementSibling
        if (next) {
          next.focus()
        } else {
          const first = article.parentNode.firstElementChild
          first.focus()
        }
      } else if (event.key === 'Enter') {
        window.location.href = url + paramsToString
      }
    })

    return article
  }
  return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}
