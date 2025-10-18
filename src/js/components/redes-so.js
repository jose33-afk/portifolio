const bntSocial = document.querySelector('[data-bnt-soci]');
const menuSocial = document.querySelector('[data-menu-s]');
const iconeTri = document.querySelector('[data-svg-trian');

bntSocial.addEventListener('click', () => {
  menuSocial.classList.toggle('redes-menu-oculto');
  iconeTri.classList.toggle('rotate-180');
});