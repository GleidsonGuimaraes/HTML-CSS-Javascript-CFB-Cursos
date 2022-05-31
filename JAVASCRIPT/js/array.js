let cor = [];
let adicionandoCores;

while(cor.length < 6){
  adicionandoCores = prompt("Digite o nome de uma cor:");
  cor.push(adicionandoCores); // O método push() insere elementos no final do vetor
}

document.write(cor, "<br>");

if(cor.length > 5){
  let exibindoCores = prompt("Digite um número de 0 a 5:");
  document.write(`A cor escolhida foi: ${cor[exibindoCores]}`);
}

// O método pop() elimina o último elemento do vetor
// O método shift() elimina o primeiro elemento do vetor
// O método unshift() adiciona um elemento no início do vetor
/*
 O método splice(índice, qt de itens) permite remover um ou mais elementos a partir de um
 determinado índice
*/
// O método indexOf() permite pesquisar se um determinado elemento está presente no nosso array
// O método sort() ordena os elementos do array
// O método reverse() inverte a ordem dos elementos do array
// O método concat() concatena dois ou mais arrays em um só