let px = 0;
let py = 0;
let obj = document.getElementById("dv1");

function move(){
  let tecla = event.keyCode;

  if(tecla == 37){
    px -= 10;
    obj.style.left = px + "px";
  }else if(tecla == 38){
    py -= 10;
    obj.style.top = py + "px";
  }else if(tecla == 39){
    px += 10;
    obj.style.left = px + "px";
  }else if(tecla == 40){
    py += 10;
    obj.style.top = py + "px";
  }else if(tecla == 13){
    alert("Evento keydown removido.");
    document.removeEventListener("keydown",move);
  }
}

document.addEventListener("keydown", move);

// Solução do desafio para adicionar o evento keydown com outro evento
obj.addEventListener("click", ()=>{
  alert("Evento keydown adicionado.");
  document.addEventListener("keydown", move);
});
