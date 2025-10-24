import { pegaElemento } from "../ultils.js";
const bntTrabalhoPc = document.querySelector('[data-bnt-pc]');
const bntPessoalPc = document.querySelector('[data-bnt-mo-pc]');
const bntTrabalhoMo = document.querySelector('[data-bnt-mobile]');
const bntPessoalMo =document.querySelector('[data-bnt-mobilep]');

//Dots parte1.
let quantidadeImgs = 0;

const quantiImg = () => {
  const listForDots = pegaElemento('[data-pc] div[data-pessoal]:not(.hidden), [data-pc] div[data-trabalho]:not(.hidden)', 2);
  quantidadeImgs = listForDots.length;
  addDots(quantidadeImgs);
};

const addDots = (DotsAdicionar) => {
  const containerDots = pegaElemento('.dots-container');
  containerDots.innerHTML = ""; //limpar.

  for (let c = 0; c < quantidadeImgs; c++) {
      containerDots.innerHTML += `
        <span class="dot"></span>
      `
  };
};

//Tabs.
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

     quantiImg() //Att quantidade imgs.
   });
};

mostraElement(bntTrabalhoPc, '[data-pc]', '[data-trabalho]');
mostraElement(bntPessoalPc, '[data-pc]', '[data-pessoal]');
mostraElement(bntTrabalhoMo, '[data-galeria]', '[data-trabalho]');
mostraElement(bntPessoalMo, '[data-galeria]', '[data-pessoal]');