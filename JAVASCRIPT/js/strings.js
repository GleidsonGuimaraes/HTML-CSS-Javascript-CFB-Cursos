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
*
* O método search mostra a posição da primeira ocorrência do elemento indicado.
* O modificador i funciona com o método search.
*
* O método replace recebe uma string e modifica por outra.
* Os modificadores i e g funcionam com o método replace. O g modifica todas as ocorrências encontradas na string.
*
* O método charAt retorna o caracter que ele encontrar na posição indicada dentro do método.
* 
* O método charCodeAt retorna o código do caracter encontrado na posição indicada no método.
*
* O método fromCharCode retorna o caracter referente ao código passado no método.
*
* O método concat faz a concatenação(junção) de uma ou mais strings.
*/
let texto = document.getElementById("txt").innerHTML;
let texto1 = ` Aulas 46 e 47 do curso de javascript.`;
let res = texto.match(/[od^e]/ig);
let res1 = texto.search(/curso/i);
let res2 = texto.replace(/ aula 46 do curso de javascript./ig," ");
let res3 = texto.charAt(11);
let res4 = texto.charCodeAt(11);
let res5 = res2.concat(texto1);

document.write(`Resultado do método match: ${res} : ${res.length}<br>`);
document.write(`Resultado do método search: ${res1}<br>`);
document.write(`Resultado do método replace: ${res2}<br>`);
document.write(`Resultado do método charAt: ${res3}<br>`);
document.write(`Resultado do método charCodeAt: ${res4}<br>`);
document.write(`Resultado do método fromCharCode: ${String.fromCharCode(67)}<br>`);
document.write(`Resultado do método concat: ${res5}<br>`);