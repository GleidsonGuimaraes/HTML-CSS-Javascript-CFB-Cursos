// O setTimeout executa a função somente uma vez após o tempo determinado para a execução
// O setInterval executa a função repetidamente de acordo com o tempo determinado
// Para cancelar o setInterval, utilizamos o clearInterval

let temp;

function mudaCor(){
  let obj = document.getElementById("dv1");
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  obj.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// let temp = setTimeout(mudaCor,2000);
function iniciar(){
  temp = setInterval(mudaCor,1000);
}

function parar(){
  clearInterval(temp);
}

document.getElementById("bt1").addEventListener("click", iniciar);
document.getElementById("bt2").addEventListener("click",parar);
// window.addEventListener("load",mudaCor);