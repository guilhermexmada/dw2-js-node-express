
// 01
const data = new Date();
document.write(`<p> Data atual completa: </p>`);
document.write(`<p> ${data} </p> <hr>`);

// 02
let promptValor = prompt(`Digite o valor da sua compra em R$: `);
let verificarValor = Number(promptValor);
let compraInternacional;

if(isNaN(verificarValor) == true){
    document.write(`Valor Inválido!`);
} else{
    compraInternacional = verificarValor;
}

const compraInternacionalDolar = compraInternacional.toLocaleString("en", {
    style: "currency",
    currency: "USD"
});
document.write(`<p> O valor da sua compra é: ${compraInternacionalDolar}. </p>`);

// 03
const conversaoReal = compraInternacional * 5.42;
const compraInternacionalReal = conversaoReal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
});
document.write(`<p> 
    O valor da sua compra em reais,
    na cotação de 2025-09-05 (R$5,42 = $1) é de: ${compraInternacionalReal}. 
    </p> <hr>`);

// 04
const formatarEntrega = new Date(data);
formatarEntrega.setDate(data.getDate() + 12);

const dataEntrega = formatarEntrega.toLocaleDateString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
});

document.write(`<p> Data estimada da entrega : ${dataEntrega} </p>`);
