const containersImg = document.querySelector('[data-galeria]');
const containerImgPc = document.querySelector('[data-pc]');
const iconePraBaix = document.querySelector('[data-icone-aba]');

const monitora = (element, mobile) => {
  let linksSite = element.querySelectorAll('[data-link]');//1

  const eventMouse = (event) => {
    element.addEventListener(event, () => {
      if (mobile) {
        element.classList.toggle('container-img-scroll');
        iconePraBaix.classList.toggle('opacity-0');
      };
      linksSite.forEach(link => link.classList.toggle('opacity-0'));
    });
  };
  
  eventMouse('mouseenter');
  eventMouse('mouseleave');
};

monitora(containersImg, true);
monitora(containerImgPc, false);


/*
  1 - links especificos de cada pai.
*/