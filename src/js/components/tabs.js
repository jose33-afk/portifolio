const bntTrabalhoPc = document.querySelector('[data-bnt-pc]');
const bntPessoalPc = document.querySelector('[data-bnt-mo-pc]');
const bntTrabalhoMo = document.querySelector('[data-bnt-mobile]');
const bntPessoalMo =document.querySelector('[data-bnt-mobilep]');

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
   });
};

mostraElement(bntTrabalhoPc, '[data-pc]', '[data-trabalho]');
mostraElement(bntPessoalPc, '[data-pc]', '[data-pessoal]');
mostraElement(bntTrabalhoMo, '[data-galeria]', '[data-trabalho]');
mostraElement(bntPessoalMo, '[data-galeria]', '[data-pessoal]');