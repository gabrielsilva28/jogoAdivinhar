//atv04

//apresentacao
console.log('Boas vindas ao nosso site!');

//cria variavel com o nome e printar
//let nome= "Bob";
//console.log(`Olá, ${nome}!`);

//alerta com nome
let nome = "Bob";
alert(`Olá, ${nome}!`);

//perguntar liguagem, armazena e printar
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem)

//soma de numeros
/*
let valor1 = 4;
let valor2 = 6;
let resultado = valor1+valor2;
console.log(`O valor da soma é ${resultado}`);
*/

//subtracao de numeros
let valor1 = 4;
let valor2 = 6;
let resultado = valor1+valor2;
console.log(`O valor da soma é ${resultado}`);

//maior ou menor de idade
let idade = prompt("Qual sua idade?");
if(idade>=18){
    console.log("Você é maior de idade!");
}
else{
    console.log("Você é menor de idade!");
}

//positivo, negativo e zero
let numero = prompt('Digite um numero');
if (numero == 0){
    console.log('Numero é zero');
}
if (numero > 0){
    console.log('Numero Positivo');
}
else{
    console.log('Numero negativo');
}

//contar de 1 a 10
let contador = 1;

while (contador<11){
    console.log(contador);
    contador++;
}

//aprovado ou reprovado
let nota = 8;
if(nota>=7){
    console.log('Aprovado');
}
else{
    console.log('Reprovado');
}

//gerar numero aleatorio
let valor = prompt("Valor do Numero Maximo:");
let numeroAleatorio1 = parseInt(Math.random()*valor);
console.log(numeroAleatorio1);

//gerar numero aleatorio de 1 a 10
let numeroAleatorio2 = parseInt((Math.random()*10)+1);
console.log(numeroAleatorio2);

//gerar numero aleatorio de 1 a 1000
let numeroAleatorio3 = parseInt((Math.random()*1000)+1);
console.log(numeroAleatorio3);