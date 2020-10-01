// Preloader -------------------------------------------------------

window.onload = removePreloader

function removePreloader() {
  const preloader = document.querySelector('#preloader')
  const preloaderEl = document.querySelector('#preloader__el')

  setInterval(() => {
    preloaderEl.classList.add('preloader__el--hide')
  }, 3000)

  setInterval(() => {
    preloader.classList.add('preloader--hide')
  }, 3800)

  setInterval(() => {
    preloader.remove()
  }, 4500)
}

// --------------------------------------------------------------------