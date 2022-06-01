let num;

try { //expressão a ser avaliada
  num = prompt("Digite um valor:");
  if(num > 10){// condição para gerar o erro
    throw new Error("Valor inválido. O valor máximo é 10."); // gerando o erro
  }
} catch (error) { //tratando o erro caso seja verdadeiro
  console.log("Erro: " + error.message);
  num = 10;
} finally { // esse método será executado se o erro for true ou false
  document.write("Valor: " + num);
}