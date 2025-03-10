export function lightbox () {
  const lightbox = document.querySelector('#lightbox')
  const lightboxImg = document.querySelector('#lightbox-img')
  const lightboxVid = document.querySelector('#lightbox-video')
  const closeBtn = document.querySelector('.close-btn')
  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')
  const images = document.querySelectorAll('.photo')
  const videos = document.querySelectorAll('.video')

  let index = 0
  let isLightboxOpen = false

  function showMedia () {
    const media = index < images.length ? images[index] : videos[index - images.length]
    if (media.tagName === 'IMG') {
      lightboxImg.src = media.src
      lightboxVid.style.display = 'none'
      lightboxImg.setAttribute('alt', 'Photo')
      lightboxImg.style.display = 'inline'
    } else if (media.tagName === 'VIDEO') {
      lightboxVid.src = media.src
      lightboxImg.style.display = 'none'
      lightboxVid.style.display = 'inline'
    }
    const title = media.getAttribute('title')
    document.querySelector('#lightbox-title').textContent = title
    lightbox.style.display = 'block'
    lightbox.setAttribute('aria-hidden', 'false')
    lightbox.setAttribute('alt', title)
    isLightboxOpen = true
  }

  function prevMedia () {
    if (isLightboxOpen) {
      index--
      if (index < 0) {
        index = images.length + videos.length - 1
      }
      showMedia()
    }
  }

  function nextMedia () {
    if (isLightboxOpen) {
      index++
      if (index >= images.length + videos.length) {
        index = 0
      }
      showMedia()
    }
  }

  images.forEach((image, i) => {
    image.style.cursor = 'pointer'
    image.addEventListener('click', (e) => {
      index = i
      showMedia()
    })
  })

  videos.forEach((video, i) => {
    video.style.cursor = 'pointer'
    video.addEventListener('click', (e) => {
      index = i + images.length
      showMedia()
    })
  })

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'
    lightboxImg.style.display = 'none'
    lightboxVid.style.display = 'none'
    lightbox.setAttribute('aria-hidden', 'true')
    isLightboxOpen = false
  })

  prevBtn.addEventListener('click', prevMedia)

  nextBtn.addEventListener('click', nextMedia)

  document.addEventListener('keydown', (e) => {
    if (isLightboxOpen) {
      if (e.key === 'ArrowLeft') {
        prevMedia()
      } else if (e.key === 'ArrowRight') {
        nextMedia()
      } else if (e.key === 'Escape') {
        lightbox.style.display = 'none'
        lightboxImg.style.display = 'none'
        lightboxVid.style.display = 'none'
        lightbox.setAttribute('aria-hidden', 'true')
        isLightboxOpen = false
      }
      if (e.key === 'Enter' && isLightboxOpen) {
        if (lightboxVid.style.display === 'inline') {
          if (lightboxVid.paused) {
            lightboxVid.play()
          } else {
            lightboxVid.pause()
          }
        }
      }
    }
  })
}
