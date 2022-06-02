/*
  O querySelectorAll() é um método que retorna elementos do documento que correspondem a uma 
    classe de Css ou a uma tag específica.
*/

// let ps = document.querySelectorAll("p");
// ps[0].innerHTML = "Novo texto";

let elementos = document.querySelectorAll(".titulo");
for(let i=0; i<elementos.length; i++){
  document.write(elementos[i].innerHTML + "<br>");
}