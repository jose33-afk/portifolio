const containersImg = document.querySelector('[data-galeria]');

const monitora = (element) => {
  element.addEventListener('mouseenter', () => {
    element.classList.toggle('container-img-scroll');
  });

  element.addEventListener('mouseleave', () => {
    element.classList.toggle('container-img-scroll');
  });
};

monitora(containersImg);


