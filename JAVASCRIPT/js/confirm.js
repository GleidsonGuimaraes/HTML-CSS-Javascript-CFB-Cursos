// O confirm exibe um texto e dois botões que retornam true ou false

let confirmar = confirm("Você deseja continuar?");

if(confirmar){
  document.write("Seja bem vindo!");
}else{
  alert("Você presica aceitar os termos!");
}