/*
  O método "event.keyCode" apresentado no curso foi descontinuado.
  Links úteis:
  - https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
  - https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
*/

let dx, dy, px, py, velocidade, obj, tempo;

function iniciar(){
  dx = 0;
  dy = 0;
  px = 0;
  py = 0;
  velocidade = 10;
  obj = document.getElementById("dv1");

  // Substituindo a função teclaDw
  document.addEventListener("keydown", (event)=>{
    if(event.key == "ArrowLeft"){
      dx = -1;
    }else if(event.key == "ArrowUp"){
      dy = -1;
    }else if(event.key == "ArrowRight"){
      dx = 1;
    }else if(event.key == "ArrowDown"){
      dy = 1;
    } 
  });

  // Substituindo a função teclaUp
  document.addEventListener("keyup", (event)=>{
    if(event.key == "ArrowLeft"){
      dx = 0;
    }else if(event.key == "ArrowUp"){
      dy = 0;
    }else if(event.key == "ArrowRight"){
      dx = 0;
    }else if(event.key == "ArrowDown"){
      dy = 0;
    } 
  });

  tempo = setInterval(enterFrame,20);
}

function enterFrame(){
  px += dx*velocidade;
  py += dy*velocidade;
  obj.style.left = `${px}px`;
  obj.style.top = `${py}px`;
}

window.addEventListener("load", iniciar);