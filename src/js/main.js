const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 48em)');
const topNavMenu = document.querySelector('.topnav__menu');
const body = document.querySelector('body');
const copyYear = document.querySelector('#year');
const currentYear = new Date().getFullYear();

copyYear.textContent = currentYear;

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenu.removeAttribute('style');
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', '');
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    topNavMenu.setAttribute('inert', '');
    topNavMenu.style.transition = 'none';
  } else {
    // is tablet/desktop
    closeMobileMenu();
    topNavMenu.removeAttribute('inert');
  }
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupTopNav(e);
});