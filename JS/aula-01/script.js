//função simples
function showMessage(){
    document.write("<p>Esta mensagem é exibida usando uma função simples</p>");
}
//invocando a função;
showMessage();

//função com parâmetros;
const message = "Janeiro";
const year = 2023;
function userMessage(a){
    document.write("<p>O parâmetro usado na função é: " + a + "</p>"); //concatenação
}
userMessage(message); //argumento

function userMessage2(b){
    document.write(`<p>O parâmetro usado na função é: ${b} </p>`); //template string ou literal string
}

userMessage2(year); //argumento


// variáveis podem ser declaradas de 3 formas diferentes;
// VAR: melhor evitar, pois é um modo antigo de declarar variáveis e é global, podendo causar problemas de escopo/segurança;
var nome = "João";
var nome = "Maria";
// LET: modo de variável local, ou seja, acessível apenas dentro do escopo onde foi declarada - utilize quando for necessário reatribuir o valor da variável;
// declaração != atribuição;
let idade = 30;
// CONST: variável constante, ou seja, não pode ser alterada após a declaração (não pode ser reatribuídam, mas sempre deve ser inicializado na declaração); 
const cidade = "São Paulo";
//const cidade = "Registro"; 