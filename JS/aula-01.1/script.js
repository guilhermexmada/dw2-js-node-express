//função anônima
const soma = function(n1, n2){
    return n1 + n2;
}

document.write(`<p>O resultado da soma é ${soma(50,25)}</p>`);

const tipo = typeof(soma);
document.write(`${tipo}`); //mostra o tipo da variável

//arrow function (função anônima mais curta)
const antecessor = x =>{
    return x - 1;
}

document.write(`<p>O antecessor de 10 é ${antecessor(10)}</p>`);

//arrow function com múltiplos parâmetros; precisa dos parênteses
const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`); //eval é uma função nativa que recebe 2 números e 1 operador, retornando o resultado
}

document.write(`<p>O resultado da operação é ${calc(100,"-",1)}</p>`);

//simplificando arrow function com um único retorno
const calculadora = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`); //função com retorno único não precisa de chaves nem de return

document.write(`<p>O resultado da operação é ${calculadora(100,"+",1)}</p>`);

// IIFE - Função Imediata (Imidiately Invoked Function Expression)
//função anônima que é executada na declaração; precisa estar entre parênteses
const iife = (function(){document.write("<em>Estou sendo executada imediatamente!</em>")})();

//IIFE com parâmetros
const loadUser = (function(user){
    document.write(`<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`)
})("Guilherme");
