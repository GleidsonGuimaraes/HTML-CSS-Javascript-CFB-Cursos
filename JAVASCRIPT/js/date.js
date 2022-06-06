// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax

let dt = new Date();
let diaSemana = dt.getDay();
let dia = dt.getDate();
let mes = dt.getMonth();
let ano = dt.getFullYear();

const meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro"+"Outubro"+"Novembro"+"Dezembro");
const semana = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");

document.write(semana[diaSemana] + ", " + dia + " de " + meses[mes] + " de " + ano);