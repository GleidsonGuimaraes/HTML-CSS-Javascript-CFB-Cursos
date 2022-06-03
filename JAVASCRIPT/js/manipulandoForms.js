// O método forms aponta para o formulário e não para suas tags filhas

// Formas de apontar para um formulário
// let fm = document.forms[0].id;
// let fm = document.forms.item(0).id;
// let fm = document.forms.namedItem("curso1").innerHTML;

// O método .elements aponta para os elementos do formulário
// O label não conta como um elemento para o método .elements
let fm = document.forms[0]; //armazenando o formulario
let el = fm.elements; //armazenando os elementos do formulario
//manipulando os elementos do formulario
el[0].style.backgroundColor = "#eee";
el[0].style.borderRadius = "5px";
el[1].style.borderRadius = "5px";

document.write(fm.innerHTML);

document.write("<br>" + document.getElementById("curso1").elements[1].value);