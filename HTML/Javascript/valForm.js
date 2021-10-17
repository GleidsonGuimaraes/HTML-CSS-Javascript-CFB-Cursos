function validar(){
    if(document.cad.fnome.value == ""){
        alert("Campo nome deve ser preenchido.")
        document.cad.fnome.focus()
        return false
    }
    if(document.cad.fsenha.value == ""){
        alert("Campo senha deve ser preenchido.")
        document.cad.fsenha.focus()
        return false
    }
    if(document.cad.ftel.value == ""){
        alert("Campo telefone deve ser preenchido.")
        document.cad.ftel.focus()
        return false
    }
}

function mudaCor(obj, tipo){
    //Entrada onFocus
    if(tipo == 1){
        obj.style.backgroundColor="#afffff"
        obj.style.color="#252525"
    }else if(tipo == 2){ //Saída onBlur
        obj.style.backgroundColor="#ffffff"
        obj.style.color="#000000"
    }
}