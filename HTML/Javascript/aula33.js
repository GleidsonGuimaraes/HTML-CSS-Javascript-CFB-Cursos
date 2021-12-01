// document.tipoDoIdentificador("nomeDoElementoHTML").style.propriedadeCSS = "valor";
// document.getElementById("aula").style.background = "#ddd";

function formatar() {
    let opc = 2;

    if(opc === 1){
        document.getElementById("aula").style.background = "#dddd00";
    }
    else if(opc === 2){
        document.getElementById("aula").style.background = "#00dddd";
    }
    else{
        document.getElementById("aula").style.background = "black";
        document.getElementById("aula").style.color = "white";
    }
}