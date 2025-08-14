var usuario = "Guilherme";

//primeira função
function saudacaoPersonalizada(nome){
    document.write(`<p>Olá, ${nome}! Bem-vindo(a) à Calculadora Universal!</p>`);
}

saudacaoPersonalizada(usuario);

//segunda função
const n1 = 10;
const n2 = 5;
const sinal = "*";

function operacaoMatematica(num1, operador, num2){
    let resultado;
    switch(operador){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Oops! Operador inválido";
    }
    document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${resultado}</p>`);
}

operacaoMatematica(n1, sinal, n2);

//terceira função
const calcularDobro = function(numero){
    return numero * 2;
}

document.write(`<p>O dobro de ${n1} é igual a ${calcularDobro(n1)}</p>`);

//quarta função
const calcularMetade = numero => {
    return numero / 2;
}

document.write(`<p>A metade de ${n2} é igual a ${calcularMetade(n2)}</p>`);

//quinta função
const prontoUso = (function(){
    document.write(`<p>Calculadora Universal pronta para uso!</p>`);
})();

