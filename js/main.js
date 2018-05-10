const hamburgerMenu = document.querySelector('#hamburger')
const offCanvasMenu = document.querySelector('#drawer')
const body = document.querySelector('body')
const header = document.querySelector('#slide-header')

hamburgerMenu.addEventListener('click', function (e) {
  offCanvasMenu.classList.toggle('open')
  header.classList.toggle('slide')
  e.stopPropagation()
})

body.addEventListener('click', function () {
  offCanvasMenu.classList.remove('open')
  header.classList.remove('slide')
})
