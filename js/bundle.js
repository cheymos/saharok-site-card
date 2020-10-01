// Preloader -------------------------------------------------------
window.onload = removePreloader;

function removePreloader() {
  var preloader = document.querySelector('#preloader');
  var preloaderEl = document.querySelector('#preloader__el');
  setInterval(function () {
    preloaderEl.classList.add('preloader__el--hide');
  }, 3000);
  setInterval(function () {
    preloader.classList.add('preloader--hide');
  }, 3800);
  setInterval(function () {
    preloader.remove();
  }, 4500);
} // --------------------------------------------------------------------