import { pegaElemento } from "../ultils.js";
import { feedBackImg } from "./dots.js";
const bntTrabalhoPc = document.querySelector('[data-bnt-pc]');
const bntPessoalPc = document.querySelector('[data-bnt-mo-pc]');
const bntTrabalhoMo = document.querySelector('[data-bnt-mobile]');
const bntPessoalMo =document.querySelector('[data-bnt-mobilep]');

//Dots.
const containerDivImg = pegaElemento('[data-pc]');
const refereLargDiv = containerDivImg.querySelector('div').clientWidth;

const quantiImg = () => {
  const listForDots = pegaElemento('[data-pc] div[data-pessoal]:not(.hidden), [data-pc] div[data-trabalho]:not(.hidden)', 2);
  let quantImgAtivas = listForDots.length;
  addDots(quantImgAtivas);
};

const addDots = (quantidadeImgs) => {
  const containerDots = pegaElemento('.dots-container');
  containerDots.innerHTML = ""; //limpar.

  for (let c = 0; c < quantidadeImgs; c++) {
      containerDots.innerHTML += `
        <span class="dot"></span>
      `
  };

  let listDots = Array.from(containerDots.querySelectorAll('span'));
  if (listDots[0]) listDots[0].classList.add('active'); //primeira bolinha.
  feedBackImg(containerDivImg, refereLargDiv, listDots);
};


//Tabs, começa aqui.
quantiImg(); //primeira interacao(carregar dots do trabalho).
const mostraElement = (element, selec, trabalhoOup) => {
   element.addEventListener('click', () => {
     const elementPai = document.querySelector(selec);
     const listaImg = elementPai.querySelectorAll(trabalhoOup);
     const listaGeral = elementPai.querySelectorAll('[data-trabalho], [data-pessoal]');

     listaGeral.forEach(img => {
       img.classList.add('hidden');
     })

     listaImg.forEach(img => {
        img.classList.remove('hidden');
     });

     quantiImg() //Atualizar quantidade imgs.
   });
};

mostraElement(bntTrabalhoPc, '[data-pc]', '[data-trabalho]');
mostraElement(bntPessoalPc, '[data-pc]', '[data-pessoal]');
mostraElement(bntTrabalhoMo, '[data-galeria]', '[data-trabalho]');
mostraElement(bntPessoalMo, '[data-galeria]', '[data-pessoal]');