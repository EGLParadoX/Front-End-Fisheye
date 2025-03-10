import { photographerFactory } from '../factories/photographer.js'

async function getPhotographers () {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

  const response = await fetch('data/photographers.json')

  if (response.ok) {
    const photographers = await response.json()
    return photographers
  } else {
    alert('HTTP-Error : ' + response.status)
  }

  // et bien retourner le tableau photographers seulement une fois récupéré
  return {
    photographers: [getPhotographers]
  }
}

async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init () {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
