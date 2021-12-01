function formatar() {

    let tabela = document.getElementById("tb_produtos");
    let numLin = document.getElementsByTagName("tr");

    for(let i=1; i < numLin.length; i++) {
        
        let numCol = numLin[i].getElementsByTagName("td");
        if(numCol[1].firstChild.nodeValue <= 50){
            numLin[i].style.background = "#ffaaaa";
        }
    }

}