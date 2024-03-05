const hamburgerButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');
hamburgerButton.addEventListener('click', toggleNav);

function toggleNav() {
  hamburgerButton.classList.toggle('open');
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden');
}