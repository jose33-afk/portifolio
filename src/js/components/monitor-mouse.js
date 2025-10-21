const containersImg = document.querySelector('[data-galeria-mo]');
const containerImgPc = document.querySelector('data-pc');

const monitora = (element, clas, mobile) => {
  const iconePraBaix = element.querySelector('[data-icone-aba]');
  const linkSite = element.querySelectorAll('[data-link]');

  element.addEventListener('mouseenter', () => {
    if (mobile) {
      element.classList.toggle(clas)
      iconePraBaix.classList.toggle('opacity-0');
    };
   
    linkSite.forEach(link => {
      link.classList.toggle('opacity-0');
    });
  });

  element.addEventListener('mouseleave', () => {
    if (mobile) {
      element.classList.toggle(clas)
      iconePraBaix.classList.toggle('opacity-0');
    };
   
    linkSite.forEach(link => {
      link.classList.toggle('opacity-0');
    });
  });
};

//Fazer funcionar pro container de pc...

monitora(containersImg, 'container-img-scroll', true);




