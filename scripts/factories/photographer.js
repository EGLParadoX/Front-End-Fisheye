export function photographerFactory (data) {
  const { name, id, city, country, tagline, price, portrait } = data

  const picture = `assets/photographers/${portrait}`
  const url = 'http://127.0.0.1:5500/Front-End-Fisheye/photographer.html?'

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
    img.setAttribute('alt', name)
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
    return article
  }
  return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}
