const feedBackImg = (elementPai, elementLargRef, dots) => {
  elementPai.addEventListener('scroll', () => { //1
    const posicaoScroll = elementPai.scrollLeft;
    const  activeIndex = Math.round(posicaoScroll / elementLargRef);
    
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[activeIndex]) { 
      dots[activeIndex].classList.add('active');
    }
  });
}

export { feedBackImg };

/*
  1 - esse evento e disparado quando um elemento tem a barra de 
      rolagem, ou seja overflow-auto, x ou y. Quando aquela barra se movimenta.
*/