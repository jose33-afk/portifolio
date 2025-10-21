import './components/redes-so.js';
import './components/tabs.js';
import './components/monitor-mouse.js'

//Links mobile
const abreJanelaMob = () => {
  const containerImgMo = document.querySelector('[data-galeria]');
  const linksSite = containerImgMo.querySelectorAll('[data-link]');

  linksSite.forEach(link => {
    link.addEventListener('click', (event) => {
      let isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
   
      if (!isMobile) {
        event.preventDefault(); //1
          const url = link.href;
            
          window.open(
           url,
           '_blank',
           'width=375,height=667,scrollbars=yes,resizable=yes'
          );
        };
    });
  });
 
};

abreJanelaMob()


/*
 1 - Para tirar o comportamento padrao, e o event e os metodos do evento 'click'.
 2 - 'propriedade' in objeto, verifica se a propriedade exite em uma array ou obj 
  const pessoa = {
    nome: 'João',
    idade: 25
  };
  'nome' in pessoa;     // true (existe).
  'length' in [1,2,3];  // true (arrays têm lengt.

 2 - ontouchstart → evento que só existe em dispositivos com tela touch (celular/tablet).
  navigator.maxTouchPoints → número de toques que o device aguenta ao mesmo tempo
  Desktop sem touch = 0
  Celular/tablet = 1 ou mais (geralmente 5 ou 10) 
*/