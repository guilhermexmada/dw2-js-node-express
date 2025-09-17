// objetos literais possuem atributos e métodos

// objetos literais não derivam de classes

// declarando e verificando tipo de um objeto
const pessoa = {};
document.write(typeof pessoa);

// declarando um objeto com atributos e métodos
const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando...";
  },
  frear() {
    return "Freando...";
  },
};

// exibindo atributos e executando métodos do objeto
document.write(`<p>Modelo do carro: ${carro.modelo}</p>`);
document.write(`<p>Cor do carro: ${carro.cor}</p>`);
document.write(`<p>${carro.acelerar()}</p>`);
document.write(`<p>${carro.frear()}</p>`);

// novo objeto
const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "Pc moderno com bom desempenho",
};

document.write(
  `<p>O ${produto.nome} da marca ${produto.marca} custa apenas R$ ${produto.preco},00 ! É um ${produto.descricao}.</p>`
);

// criando um array de objetos
const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "Pc moderno com bom desempenho",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Ultra resistente",
  },
];

// iterando o array de objetos com FOREACH
listaProdutos.forEach(item => {
    document.write(`<p>${item.nome} | ${item.marca} | R$ ${item.preco},00 | ${item.descricao}</p>`);
});

// ALT + ENTER = envelopamento de tag
