let obj = document.getElementById("dv1");

function msg(){
  alert("CFB Cursos.");
}

function cor1(){
  obj.style.backgroundColor = "#0ff";
}

function cor2(){
  obj.style.backgroundColor = "#f00";
}

function addEventos(){
  // Sintaxe:
  // elemento.comando("evento",função);
  // Os eventos utilizados no addEventListener não possuem o "on..." precedido em sua escrita.
  obj.addEventListener("mouseover", cor1);
  obj.addEventListener("mouseout", cor2);
  obj.addEventListener("click", msg);
}

window.addEventListener("load", addEventos);