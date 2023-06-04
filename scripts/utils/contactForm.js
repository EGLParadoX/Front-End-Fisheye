/* eslint-disable no-unused-vars */
function displayModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
  modal.setAttribute('aria-hidden', 'false')
  modal.setAttribute('tabindex', '0')
  modal.focus()
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
  modal.setAttribute('aria-hidden', 'true')
  modal.setAttribute('tabindex', '-1')
}
function manageFocus (event) {
  const modal = document.getElementById('contact_modal')
  const focusableElements = modal.querySelectorAll("input, textarea, button, [tabindex='0']")

  const currentFocus = document.activeElement
  const currentIndex = Array.from(focusableElements).indexOf(currentFocus)

  if (event.key === 'Tab') {
    event.preventDefault()

    if (event.shiftKey) {
      const previousIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1
      focusableElements[previousIndex].focus()
    } else {
      const nextIndex = currentIndex === focusableElements.length - 1 ? 0 : currentIndex + 1
      focusableElements[nextIndex].focus()
    }
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()

    const previousIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1
    focusableElements[previousIndex].focus()
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()

    const nextIndex = currentIndex === focusableElements.length - 1 ? 0 : currentIndex + 1
    focusableElements[nextIndex].focus()
  } else if (event.key === 'Escape') {
    closeModal()
  }
}
document.getElementById('contact_modal').addEventListener('keydown', manageFocus)

function validate () {
  const prenom = document.getElementById('prenom').value
  const nom = document.getElementById('nom').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  if (prenom.length < 2 || !/^[a-zA-ZÀ-ÿ]+-?[a-zA-ZÀ-ÿ]*$/.test(prenom)) {
    alert('Le prénom doit contenir au moins 2 caractères, uniquement des lettres.')
  }

  if (nom.length < 2 || !/^[a-zA-ZÀ-ÿ]+-?[a-zA-ZÀ-ÿ]*$/.test(nom)) {
    alert('Le nom doit contenir au moins 2 caractères, uniquement des lettres')
    return false
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("L'adresse e-mail n'est pas valide.")
    return false
  }

  if (message.length < 10) {
    alert('Le message doit contenir au moins 10 caractères.')
    return false
  }

  console.log('Prénom: ' + prenom)
  console.log('Nom: ' + nom)
  console.log('E-mail: ' + email)
  console.log('Message: ' + message)
  return true
}
