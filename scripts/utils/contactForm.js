/* eslint-disable no-unused-vars */
const modal = document.getElementById('contact_modal')

function displayModal () {
  modal.style.display = 'block'
}

function closeModal () {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

function validate () {
  const prenom = document.getElementById('prenom').value
  const nom = document.getElementById('nom').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  // Vérification du prénom
  if (prenom.length < 2 || !/^[a-zA-ZÀ-ÿ]+-?[a-zA-ZÀ-ÿ]*$/.test(prenom)) {
    alert('Le prénom doit contenir au moins 2 caractères, uniquement des lettres.')
  }

  // Vérification du nom
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
