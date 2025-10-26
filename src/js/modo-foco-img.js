import { pegaElemento } from './ultils.js';
const bnts = pegaElemento('[data-bnt-foco]', 2);

const addClass = (elemento, cls) => {
  elemento.classList.toggle(cls);
};

const focoPc = () => {
  const containerPc = pegaElemento('[data-container="pc"]');
  containerPc.dataset.geralFoco = containerPc.dataset.geralFoco === 'off' ? 'on' : 'off';
  const bntX = containerPc.querySelector('[data-bnt-x]');
  addClass(bntX, 'hidden');
};

/*
const focoMo = () => {
  const containerPc = pegaElemento('[data-container="pc"]');
  const bntX = containerMobile.querySelector('[data-bnt-x]');

  addClass(bntX, 'hidden');
  addClass(containerPc, 'md:block');
  addClass(containerPc, 'hidden');
  
  containerMobile.dataset.posicaoMo = containerMobile.dataset.posicaoMo === 'normal' ? 
  'left' : 'normal';
  
};  
*/

bnts.forEach(bnt => {
  bnt.addEventListener('click', () => {
    console.log('ok')
    if (bnt.dataset.bntFoco === 'pc') focoPc(); //1
    bnt.classList.toggle("bg-[url('../img/icons/notfull.svg')]");
    bnt.classList.toggle("bg-[url('../img/icons/full.svg')]");
  });
});

/*
  1 - o js ignora e transforma em camelCase 
*/
