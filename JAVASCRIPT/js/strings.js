let texto = document.getElementById("txt").innerHTML;

/*
* Método "match" para pesquisar por um determinado elemento na string. 
* Para utilizar os modificadores é necessário indicar a string entre /(barras).
* Temos os modificadores i, g e m, sendo o m, menos comumente utilizado.
* O i faz a pesquisa desconsiderando o padrão case sensitive, não diferenciando letras maiúsculas de minúsculas.
* O g diz ao método para encontrar todas as ocorrências de uma mesma palavra e não somente a primeira como é por padrão.
* O m faz a pesquisa sem armazenar a string em forma de array.
* Utilizando [abc](colchetes) ou [a|b|c], o método faz a pesquisa de vários caracteres de forma separada.
* Pode ser utilizado [^ab](circunflexo) para excluir determinado caracter da pesquisa.
* Pode ser utilizado [a-b](traço) para pesquisar os elementos que estão entre os outros especificados no método.
* As expressões podem ser mescladas [^a-b] para pesquisar todos os caracteres, menos os que estão entre a e b na string.
* Podem ser utilizados metacaracteres. Consulte documentação sobre o método match.
*/
let res = texto.match(/[od^e]/ig);

document.write(`${res} : ${res.length}`);