import { pegaElemento } from "./ultils.js";
const container = pegaElemento('[data-pc]');
const bnts = pegaElemento('.botoes', 2);
let posicao = 0;

const passarImg = (list, index) => {
  container.scrollTo({
    left: list[index].offsetLeft, //1
    behavior: "smooth"
  });
};

bnts.forEach(bnt => {
   bnt.addEventListener('click', () => {
     let listImgs = pegaElemento('[data-pc] div[data-pessoal]:not(.hidden), [data-pc] div[data-trabalho]:not(.hidden)', 2); 

     if (listImgs.length > 1) {
       if (bnt.dataset.ide === "prox") {
         posicao = (posicao + 1) % listImgs.length;
         passarImg(listImgs, posicao);
       } else {
         posicao = (posicao - 1 + listImgs.length) % listImgs.length;
         passarImg(listImgs, posicao);
       };
     };
   });
});
