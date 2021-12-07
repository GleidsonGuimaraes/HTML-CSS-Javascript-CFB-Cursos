// função de pré-carregamento das imagens para melhorar o desempenho do site no carregamento das imagens
function preload(){
    let imgs = Array('/HTML/Arquivos/layout/bHtml2.png', '/HTML/Arquivos/layout/bCss2.png', '/HTML/Arquivos/layout/bJavascript2.png');
    for(let i = 0; i < imgs.length; i++) {
        let preloadImg = new Image();
        preloadImg.src = imgs[i];
    }
}

function trocar(obj, imgTroca) {
    obj.src = imgTroca;
}