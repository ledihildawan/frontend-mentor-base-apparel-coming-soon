const heroForm = document.forms.heroForm
const inputMessage = heroForm.querySelector('.hero__input-message')
const inputEmail = heroForm.email

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const showError = (input, message) => {
  input.classList.add('error')
  inputMessage.classList.add('show')
  inputMessage.textContent = message
}

const hideError = (input) => {
  setTimeout(() => {
    input.classList.remove('error')
    inputMessage.classList.remove('show')
    inputMessage.textContent = ''
  }, 2000)
}

const showSuccess = () => {
  inputEmail.value = ''
  inputMessage.classList.add('show')
  inputMessage.style.color = 'hsl(0, 6%, 24%)'
  inputMessage.textContent = 'Email has been submited.'

  hideError(inputEmail)
}

window.addEventListener('DOMContentLoaded', () => {
  heroForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (inputEmail.value.trim() === '') {
      showError(inputEmail, 'Email is required.')
      hideError(inputEmail)
      return
    }

    if (!emailPattern.test(inputEmail.value)) {
      showError(inputEmail, 'Please provide a valid email.')
      hideError(inputEmail)
      return
    }

    showSuccess()
  })
})