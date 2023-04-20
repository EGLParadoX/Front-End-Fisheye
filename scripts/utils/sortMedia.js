import { displayDataMedia, liked } from '../pages/photographer.js'
import { lightbox } from './lightBox.js'

export function sorted (media) {
  const selecteur = document.querySelector('.sort')
  const photographerSection = document.querySelector('.photographer-media-section')
  let selectedIndex = 0

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

  selecteur.addEventListener('keydown', function (e) {
    const items = selecteur.options
    const itemCount = items.length

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : itemCount - 1
      selecteur.value = items[selectedIndex].value
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      selectedIndex = selectedIndex < itemCount - 1 ? selectedIndex + 1 : 0
      selecteur.value = items[selectedIndex].value
    }

    if (e.key === 'Enter') {
      e.preventDefault()
      selecteur.dispatchEvent(new Event('change'))
    }
  })
}
