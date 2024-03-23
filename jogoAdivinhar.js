//jogo de adivinhacao de numeros

alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 30;
let numeroSecreto = parseInt((Math.random() * numeroMaximo)+1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto){
        break;
    }
    else{
        if (chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}, continue tentando..`);
        }
        else{
            alert(`O numero secreto é maior que ${chute},continue tentando..`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


