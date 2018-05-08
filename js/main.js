const hamburgerMenu = document.querySelector('#hamburger')
const offCanvasMenu = document.querySelector('.nav-bar')
const body = document.querySelector('body')
const header = document.querySelector('.header-inner')

hamburgerMenu.addEventListener('click', function (e) {
  offCanvasMenu.classList.toggle('open')
  header.classList.toggle('slide')
  e.stopPropagation()
})

body.addEventListener('click', function () {
  offCanvasMenu.classList.remove('open')
  header.classList.remove('slide')
})
