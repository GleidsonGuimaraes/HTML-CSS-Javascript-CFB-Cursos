let max = 5;
let min = 1;
let fi = min;
let transicao = true;
let tmr;

// pre-carregamento de imagens para melhorar o desempenho do site
function preload(){
    let imgs = Array(
        "/HTML/Arquivos/imagens/aula38/f1.png",
        "/HTML/Arquivos/imagens/aula38/f2.png",
        "/HTML/Arquivos/imagens/aula38/f3.png",
        "/HTML/Arquivos/imagens/aula38/f4.png",
        "/HTML/Arquivos/imagens/aula38/f5.png"
    );
    for(let i = 0; i < imgs.length; i++) {
        let preloadImg = new Image();
        preloadImg.src = imgs[i];
    }
}

function iniciaSlider() {
    preload();
    carregaFoto("/HTML/Arquivos/imagens/aula38/f1.png");
    document.getElementById("moldura").addEventListener("transitionend", fimTr);
    tmr = setInterval(trocarFoto, 10000);
}

function trocarFoto() {
    transicao = false;
    fi++;
    if(fi > max) {
        fi = min;
    }
    carregaFoto("/HTML/Arquivos/imagens/aula38/f" + fi + ".png");
}

function fimTr() {
    transicao = true;
}

function carregaFoto(foto) {
    document.getElementById("moldura").style.backgroundImage = "URL("+foto+")";
}

function troca(direcao) {
    clearInterval(tmr);
    if(transicao){
        transicao = false;
        fi += direcao;
        if(fi > max) {
            fi = min;
        } else if(fi < min) {
            fi = max;
        }
        carregaFoto("/HTML/Arquivos/imagens/aula38/f" + fi + ".png");
    }
    tmr = setInterval(trocarFoto, 10000);
}