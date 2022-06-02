/*
  O método getElementsByTagName aponta para todo o conjunto de tags que lhe foi passado.
  Por receber um conjunto de tags, esse método funciona como um vetor.
  Utilizando o valor "*", podemos referenciar todas as tags da página(Incluindo a tag raiz e as 
    tags head e seus filhos). Para acessar uma determinada tag, utilizamos seu índice do vetor.
*/
let tagsP = document.getElementsByTagName("p");

tagsP[2].style.color = "#f00";
tagsP[3].style.fontWeight = "bold";
tagsP[1].style.fontSize = "30px";
document.write(tagsP[1].innerHTML);