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
*
* O método indexOf retorna a posição do primeiro caracter especificado que foi encontrado na string.
* Caso não encontre nenhum, ele retorna um valor negativo.
* O método lastIndexOf retorna a posição do último caracter encontrado na string.
*
* O método localeCompare retorna se as strings são iguais.
* Se o retorno for igual a 0(zero), elas são iguais, caso contrário, se for diferente de 0 elas são diferentes.
*
* O método slice recorta e retorna a string especificada no método.
* Para especificar os limites do corte, devem ser indicados as posições inicial e final, respectivamente, no método.
*
* O método split recorta um array contendo as strings recortadas de acordo com o caracter especificado.
*
* O método substr é semelhante ao slice, com a diferença que você indica o inicio do corte e quantas posições devem ser cortadas a partir daí.
* O método substr foi descontinuado.
*
* Os métodos toLowerCase e toUpperCase convertem toda a string em minúscula e maiúscula, respectivamente.
*
* O método toString faz a conversão de um valor em string.
* Você pode retornar um número em formato de string como decimal, binário, octadecimal ou hexadecimal. Basta indicar o
* retorno desejado no método sendo eles (), (2), (8) ou (16), respectivamente.
*
* O método trim elimina espaços no início e no fim da cadeia de caracteres.
* O método trim não faz diferença no html, porque ele ignora espaços excessivos.
*
* O caracter especial \(saída ou barra invertida), permite a utilização de outros caracteres na string como "", '', etc.
* O caracter especial \n faz a quebra de linha na string. Esse caracter também não faz diferença no html.
*/
let texto = document.getElementById("txt").innerHTML;
let texto1 = ` Aulas 46 e 47 do curso de javascript.`;
let texto2 =`          Método trim para eliminar espaços no início e no final da string.`;
let num = 1542;
let res = texto.match(/[od^e]/ig);
let res1 = texto.search(/curso/i);
let res2 = texto.replace(/ aula 46 do curso de javascript./ig," ");
let res3 = texto.charAt(11);
let res4 = texto.charCodeAt(11);
let res5 = res2.concat(texto1);
let res6 = texto.indexOf("j");
let res7 = texto.lastIndexOf("j");
let res8 = texto.localeCompare("texto1");
let res9 = texto.slice(3,10);
let res10 = texto.split(" ");
let res11 = texto.substr(4, 6);
let res12 = texto.toLowerCase();
let res13 = texto.toUpperCase();
let res14 = num.toString();
let res15 = texto2.trim();

document.write(`Resultado do método match: ${res} : ${res.length}<br>`);
document.write(`Resultado do método search: ${res1}<br>`);
document.write(`Resultado do método replace: ${res2}<br>`);
document.write(`Resultado do método charAt: ${res3}<br>`);
document.write(`Resultado do método charCodeAt: ${res4}<br>`);
document.write(`Resultado do método fromCharCode: ${String.fromCharCode(67)}<br>`);
document.write(`Resultado do método concat: ${res5}<br>`);
document.write(`Resultado do método indexOf: ${res6}<br>`);
document.write(`Resultado do método lastIndexOf: ${res7}<br>`);
document.write(`Resultado do método localeCompare: ${res8}<br>`);
document.write(`Resultado do método slice: ${res9}<br>`);
document.write(`Resultado do método split: Array completo: ${res10} => Posição 3 do array: ${res10[3]}<br>`);
document.write(`Resultado do método subString: ${res11}<br>`);
document.write(`Resultado do método toLowerCase: ${res12}<br>`);
document.write(`Resultado do método toUpperCase: ${res13}<br>`);
document.write(`Resultado do método toString: ${res14} => ${typeof(res14)} | Retorno binário: ${num.toString(2)}<br>`);
// alert(res15);