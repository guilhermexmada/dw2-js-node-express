//  LISTA DE EXERCÍCIOS JAVASCRIPT 02 - EX01

document.write("<h2>Arrays e Objetos: Gerenciamento de Clientes</h2>")

//  criando array de objetos
const listaClientes = [
  {
    nome: "Ken",
    endereco: "Nova Iorque, r. Dourada n. 12",
    cpf: 55555555566,
  },
  {
    nome: "Mario",
    endereco: "Reino dos Cogumelos, r. do Gato n. 50",
    cpf: 54546767910,
  },
  {
    nome: "Lena Oxton",
    endereco: "Londres, r. Big Bang n. 124",
    cpf: 12312312399,
  },
];

//  percorrendo e exibindo array
function exibirLista() {
  document.write("<hr>");
  listaClientes.forEach((cliente) => {
    document.write(`
        <p>${cliente.nome}</p>
        <p>Endereço: ${cliente.endereco}</p>
        <p>CPF: ${cliente.cpf}</p>
        <br>
        `);
  });
}

exibirLista();

//  adicionando novo item ao final
listaClientes.push({
  nome: "Elrond",
  endereco: "Valfenda, r. dos Músicos n. 301",
  cpf: 21010101022,
});

exibirLista();

//  adicionando novo item ao início
listaClientes.unshift({
  nome: "Diego Máximo",
  endereco: "Milão, r. dos Fatecanos n. 15",
  cpf: 21010101022,
});

exibirLista();
