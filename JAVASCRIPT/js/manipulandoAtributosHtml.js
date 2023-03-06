const cor = document.getElementById("cores");

function trocarCores(c){
    if(c==1){
        cor.setAttribute("class","c1");
    }else if(c==2){
        cor.setAttribute("class","c2");
    }else if(c==3){
        cor.setAttribute("class","c3");
    }
}

function removerCor(){
    cor.removeAttribute("class");
}

function verificarCor(){
    if(cor.hasAttribute("class")){
        alert("Cor atribuida!");
    }else{
        alert("Sem cor atribuida!");
    }
}