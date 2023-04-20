/* eslint-disable eqeqeq */
import { mediaFactory } from '../factories/media.js'
import { sorted } from '../utils/sortMedia.js'
import { lightbox } from '../utils/lightBox.js'

async function getMedia () {
  const url = new URL(window.location.href)
  const id = url.searchParams.get('id')

  const photographerData = await fetch('./data/photographers.json').then(
    (response) => response.json()
  )
  photographerData.photographers = photographerData.photographers.filter(

    (photographer) => photographer.id == id
  )[0]
  photographerData.media = photographerData.media.filter(

    (media) => media.photographerId == id
  )
  return photographerData
}

export async function displayDataMedia (media) {
  const photographersMediaSection = document.querySelector(
    '.photographer-media-section'
  )

  media.forEach((media) => {
    const photographerMediaModel = mediaFactory(media)
    const userMediaDOM = photographerMediaModel.getUserPhotoDOM()
    photographersMediaSection.appendChild(userMediaDOM)
  })
}

async function displayDataPhotographer (photographer) {
  const photographerSection = document.querySelector('.photograph-header')
  const photographerModel = mediaFactory(photographer)
  const userCardDOM = photographerModel.getUserInfoDOM()
  photographerSection.appendChild(userCardDOM)
}

export function totalLike () {
  const like = document.getElementsByClassName('number-of-like')
  const totalOfLike = document.createElement('h5')
  const priceAndLikes = document.querySelector('.likes-and-price')
  const likeAndIcon = document.createElement('span')
  const iconHeart = document.createElement('i')
  totalOfLike.setAttribute('id', 'totalOfLike')

  iconHeart.classList.add('fa-solid')
  iconHeart.classList.add('fa-heart')
  iconHeart.style.color = 'black'
  let totalLikes = 0

  for (let i = 0; i < like.length; i++) {
    totalLikes += parseInt(like[i].innerText)
  }

  totalOfLike.textContent = totalLikes
  likeAndIcon.appendChild(iconHeart)
  likeAndIcon.appendChild(totalOfLike)

  priceAndLikes.appendChild(likeAndIcon)
}

export function liked () {
  const iconHeartList = document.querySelectorAll('.heart')
  const totalOfLike = document.getElementById('totalOfLike')

  iconHeartList.forEach((likeIcon) => {
    likeIcon.addEventListener('click', (e) => {
      const like = e.currentTarget.closest('.like-and-icon').querySelector('.number-of-like')

      if (likeIcon.classList.contains('isLiked')) {
        like.innerHTML = parseInt(like.innerText) - 1
        likeIcon.style.color = '#901C1C'
        totalOfLike.innerText = parseInt(totalOfLike.innerText) - 1
        likeIcon.classList.remove('isLiked')
      } else {
        like.innerText = parseInt(like.innerText) + 1
        likeIcon.style.color = '#db8876'
        totalOfLike.innerHTML = parseInt(totalOfLike.innerText) + 1
        likeIcon.classList.add('isLiked')
      }
    })
  })
}

async function init () {
  // Récupère les datas des photographes
  const { media } = await getMedia()
  const { photographers } = await getMedia()
  displayDataMedia(media)
  displayDataPhotographer(photographers)
  sorted(media)
  totalLike()
  liked()
  lightbox()
}

init()
