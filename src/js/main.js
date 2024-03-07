// const hamburgerButton = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('menu');
// hamburgerButton.addEventListener('click', toggleNav);

// function toggleNav() {
//   hamburgerButton.classList.toggle('open');
//   menu.classList.toggle('flex')
//   menu.classList.toggle('hidden');
// }

const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

burger.addEventListener('click', () => {
    links.classList.toggle('hidden');
    bar1.classList.toggle('transform');
    bar1.classList.toggle('translate-y-1.5'); 
    bar1.classList.toggle('-rotate-45');
    bar2.classList.toggle('hidden');
    bar3.classList.toggle('transform');
    bar3.classList.toggle('-translate-y-1');        
    bar3.classList.toggle('rotate-45');
});