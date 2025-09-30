// Manipulação de datas

document.write(`<h3> Manipulando datas: </h3>`);

// Criar uma isntância da classe Date() do Javascript
const dataAtual = new Date();
document.write(dataAtual);

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();
document.write(`<p> Hoje é dia ${dia} do mês ${mes} do ano de ${ano}. </p>`);

const diaSemana = dataAtual.getDay();
document.write(`<p> Da semana é o ${diaSemana} dia. </p>`);

// Adicionando dias, meses e anos á data atual

// Adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p> Daqui a 4 anos será: ${dataAtual.getFullYear()} </p>`);

// Adicionando meses
dataAtual.setMonth(dataAtual.getMonth() + 3 + 1);
document.write(`<p> Daqui a 3 meses será: ${dataAtual.getMonth()} </p> <br>`);

// Formatação de moedas

document.write(`<h3> Formatação de moedas: </h3>`);

// Real
const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL"
});
document.write(`<p> O valor do salário mínimo atual é ${salarioReal}. </p>`);

// Dólar
const salarioDolar = salario.toLocaleString("en", {
  style: "currency",
  currency: "USD"
});
document.write(`<p> O salário em dólar ${salarioDolar}. </p>`);

const salarioConvertidoDolar = salario * 0.176;
document.write(`<p> O valor do salário mínimo convertido para dólar 
  ${salarioConvertidoDolar.toLocaleString("en", {
    style: "currency",
    currency: "USD"
  })}. </p> <br>`);

// currency: EUR -> euro

// Formatação de strings
document.write(`<h3> Formatação de Strings: </h3>`);

const nome = "Camila Machado";
document.write(`<p> Nome: ${nome} </p>`);
document.write(`<p> Nome em minúsculo: ${nome.toLocaleLowerCase()} </p>`);
document.write(`<p> Nome em maiúsculo: ${nome.toLocaleUpperCase()} </p>`);

// Removendo espaços da string
const novoNome = nome.replace(/\s/g, "");

document.write(`<p> Esse nome tem: ${novoNome.length} letras. </p>`);