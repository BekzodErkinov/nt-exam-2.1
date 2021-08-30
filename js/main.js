// Selecting DOM elements
const elBody = document.body
const elColorsHolder = document.querySelector('.colors-holder')
const elButtons = document.querySelectorAll('button')

// Events
elButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    switch (e.target.id) {
      case 'blue':
        elBody.style.backgroundColor = '#03A9F4'
        break
      case 'green':
        elBody.style.backgroundColor = '#4CAF50'
        break
      case 'yellow':
        elBody.style.backgroundColor = '#FFEB3B'
        break
      case 'red':
        elBody.style.backgroundColor = '#F44336'
        break
      case 'purple':
        elBody.style.backgroundColor = '#673AB7'
        break
      default:
        elBody.style.backgroundColor = '#333'
    }
  })
})

// Show Color picker
window.addEventListener('keydown', e => {
  if (e.key === 'Shift') {
    elColorsHolder.classList.add('show')
  }
})

// Hide Color picker
window.addEventListener('keyup', e => {
  elColorsHolder.classList.remove('show')
})