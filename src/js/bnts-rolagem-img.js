//Colocar isso em outro arquivo.
/*const container = pegaElemento('[data-pc]');
const bnts = pegaElemento('.botoes', 2);
let posicao = 0;

const passarImg = (index) => {
  container.scrollTo({
    left: listImgs[index].offsetLeft, //1
    behavior: "smooth"
  });
};


const MaisUmaImg = () => {
 const isImgs = pegaElemento('[data-pc] div[data-pessoal]:not(.hidden), [data-pc] div[data-trabalho]:not(.hidden)', 2); 

 if (isImgs.length > 1) return true;
 else return false;
};


bnts.forEach(bnt => {
   bnt.addEventListener('click', () => {
     const listImgs = pegaElemento('[data-pc] div[data-pessoal]:not(.hidden), [data-pc] div[data-trabalho]:not(.hidden)', 2);
     if (listImgs.length > 1) {
        console.log('mais de 1')
     }
   })
  
  /*bnt.addEventListener('click', () => {
    if (bnt.dataset.ide === "prox") {
      posicao = (posicao + 1) % listImgs.length; //proximo
      passarImg(posicao);
    } else {
      posicao = (posicao - 1 + listImgs.length) % listImgs.length; // anterior
      passarImg(posicao);
    };
  });
});*/