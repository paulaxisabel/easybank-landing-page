const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.nav__links'),
      overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open')
  menu.classList.toggle('open')
  overlay.classList.toggle('open')
  document.body.classList.toggle('disable-scroll')
})