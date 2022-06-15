let jog, vel, dx, dy, px, py, anima, doc, botao1, botao2, vF;

vel = 0.4;
dx = 1;
dy = 0;
px = 0;
py = 0;

jog = document.getElementById("jogador");
doc = document.getElementById("documento");
  doc.style.width = "100%";
botao1 = document.getElementById("bt1");
botao2 = document.getElementById("bt2");

botao1.addEventListener("click",iniciar);
botao2.addEventListener("click",parar);
jog.addEventListener("click", ()=>{
  if(vF){
    parar();
  }else{
    iniciar();
  }
});

function iniciar(){
  if(vF == true){
    removeEventListener(botao1);
  }
  game();
  vF = true;
}

function parar(){
  let pararAnimacao = cancelAnimationFrame(anima);
  vF = false;
}

function game(){
  px += dx*vel;
  // py += dy*vel;
  jog.style.left = px + "%";
  // jog.style.top = py + "px";
  
  if(px >= 87){
    dx = -1;
  }else if(px <= 0){
    dx =  1;
  }

  anima = requestAnimationFrame(game);
}

window.addEventListener("load", iniciar);