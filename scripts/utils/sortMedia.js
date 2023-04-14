import { displayDataMedia, liked } from '../pages/photographer.js'
import { lightbox } from './lightBox.js'

export function sorted (media) {
  const selecteur = document.querySelector('.sort')
  const photographerSection = document.querySelector('.photographer-media-section')

  selecteur.addEventListener('change', function () {
    const value = selecteur.value
    photographerSection.innerHTML = ' '
    let mediaSorted = {}

    if (value === 'popularite') {
      mediaSorted = media.sort((a, b) => b.likes - a.likes)
    }

    if (value === 'date') {
      mediaSorted = media.sort((a, b) => new Date(b.date) - new Date(a.date))
    }

    if (value === 'titre') {
      mediaSorted = media.sort((a, b) => a.title.localeCompare(b.title))
    }

    displayDataMedia(mediaSorted)
    liked()
    lightbox()
  })
}
