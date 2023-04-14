export function mediaFactory (data) {
  const {
    id,
    name,
    city,
    country,
    tagline,
    photographerId,
    portrait,
    title,
    image,
    video,
    likes,
    date,
    price
  } = data
  const logo = document.querySelector('.logo')
  const modalName = document.querySelector('.modal-photographer-name')

  logo.style.cursor = 'pointer'
  logo.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
  const picture = `assets/media/${image}`
  const mp4 = `assets/video/${video}`
  const photographerImg = `assets/photographers/${portrait}`

  modalName.innerText = name

  function getUserPhotoDOM () {
    const articlePhotographer = document.createElement('article')
    const titleAndIcon = document.createElement('div')
    const likeAndIcon = document.createElement('span')
    const like = document.createElement('p')
    const articleTitle = document.createElement('p')
    const iconHeart = document.createElement('i')
    like.setAttribute('class', 'number-of-like')
    like.setAttribute('id', 'for-total')
    likeAndIcon.setAttribute('class', 'like-and-icon')
    iconHeart.setAttribute('class', 'heart')
    iconHeart.style.cursor = 'pointer'

    if (picture.split('.')[1] === 'jpg') {
      const img = document.createElement('img')
      img.classList.add('photo')
      img.setAttribute('src', picture)
      img.setAttribute('title', title)
      articlePhotographer.appendChild(img)
    }

    if (mp4.split('.')[1] === 'mp4') {
      const vid = document.createElement('video')
      vid.classList.add('video')
      vid.setAttribute('src', mp4)
      vid.setAttribute('title', title)
      articlePhotographer.appendChild(vid)
    }

    articleTitle.textContent = title
    iconHeart.classList.add('fa-solid')
    iconHeart.classList.add('fa-heart')
    iconHeart.style.color = '#901C1C'
    like.textContent = likes
    likeAndIcon.appendChild(like)
    likeAndIcon.appendChild(iconHeart)
    titleAndIcon.appendChild(articleTitle)
    titleAndIcon.appendChild(likeAndIcon)
    articlePhotographer.appendChild(titleAndIcon)

    return articlePhotographer
  }

  function getUserInfoDOM () {
    const infoPhotographer = document.querySelector('.photograph-header')
    const modalButton = document.querySelector('.contact_button')
    const img = document.createElement('img')
    const info = document.createElement('div')
    const priceAndLikes = document.querySelector('.likes-and-price')
    const prix = document.createElement('p')

    const h2 = document.createElement('h2')
    const h5 = document.createElement('h5')
    const p = document.createElement('p')

    prix.textContent = price + '€/jours '

    h2.textContent = name
    h5.textContent = city + ', ' + country
    p.textContent = tagline

    info.appendChild(h2)
    priceAndLikes.appendChild(prix)
    info.appendChild(h5)
    info.appendChild(p)
    img.setAttribute('src', photographerImg)
    infoPhotographer.insertBefore(info, modalButton)
    infoPhotographer.appendChild(img)

    return infoPhotographer
  }

  return {
    id,
    name,
    city,
    country,
    tagline,
    photographerId,
    portrait,
    title,
    image,
    video,
    likes,
    date,
    price,
    getUserInfoDOM,
    getUserPhotoDOM
  }
}
