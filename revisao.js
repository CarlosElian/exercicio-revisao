// var numero = parseInt(prompt('Digite um numero'));

// function parOuImpar(numero){
//     return (numero % 2 != 0) ? 'Numero é Impar' : 'Numero é Par';
// }
//     alert(parOuImpar(numero));

var num1 = parseInt(prompt('Digite o primeiro numero'));
var num2 = parseInt(prompt('Digite o Segundo numero'));

function maiorMenor(x, y){
    if(isNaN(x)){
        num1 = 0;
    }if(isNaN(y)){
        num2 = 0;
    }
    return (num1 < num2) ? `O ${num1} é o numero menor.` : `O ${num2} é o maior`;
}
    alert(maiorMenor(num1, num2));
