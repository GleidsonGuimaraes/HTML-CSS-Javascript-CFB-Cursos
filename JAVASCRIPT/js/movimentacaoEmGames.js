let dx, dy, px, py, velocidade, obj, tempo;

function iniciar(){
  dx = 0;
  dy = 0;
  px = 0;
  py = 0;
  velocidade = 10;
  obj = document.getElementById("dv1");

  document.addEventListener("keydown", teclaDw);
  document.addEventListener("keyup", teclaUp);
  tempo = setInterval(enterFrame,20);
}

function teclaDw(){
  let tecla = event.keyCode;
  if(tecla == 37){
    dx = -1;
  }else if(tecla == 38){
    dy = -1;
  }else if(tecla == 39){
    dx = 1;
  }else if(tecla == 40){
    dy = 1;
  }
}

function teclaUp(){
  let tecla = event.keyCode;
  if(tecla == 37){
    dx = 0;
  }else if(tecla == 38){
    dy = 0;
  }else if(tecla == 39){
    dx = 0;
  }else if(tecla == 40){
    dy = 0;
  }
}

function enterFrame(){
  px += dx*velocidade;
  py += dy*velocidade;
  obj.style.left = `${px}px`;
  obj.style.top = `${py}px`;
}

window.addEventListener("load", iniciar);