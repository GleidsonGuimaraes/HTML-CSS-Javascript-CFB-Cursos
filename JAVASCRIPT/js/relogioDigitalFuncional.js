let relDigital = document.getElementById("rel");

function relogio(){
  let data = new Date();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundos = data.getSeconds();

  if(hora < 10){
    hora = "0"+hora;
  }else if(minuto < 10){
    minuto = "0"+minuto;
  }else if(segundos < 10){
    segundos = "0"+segundos;
  }

  relDigital.innerHTML = `${hora}:${minuto}:${segundos}`;
}

relDigital.addEventListener("load", setInterval(relogio, 1000));