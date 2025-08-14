//  ARRAYS servem para armazenar uma lista ordenada de diferentes elementos em uma única variável
let lista = [1, 2, 3, 4, 5]; //a posição inicial sempre é 0 (zero)

console.log(lista); //imprime a lista completa no terminal

document.write(`<p>${lista}</p>`);
document.write(typeof(lista)); //arrays são de tipo objeto porque usamos métodos para manipulá-los
 
let produtos = ["Arroz","Feijão","Batata","Macarrão"];
document.write(produtos[1]); //exibindo elementos específicos no array usando índice

//usando o método forEach para percorrer o array inteiro
produtos.forEach(produto => { //forEach recebe uma arrow function como parâmetro que representará cada elemento do array
    document.write(`<p>${produto}</p>`);
});

produtos.forEach((produto,i) => { //forEach com múltiplos parâmetros: i é o índice do elemento atual
    document.write(`<p>${produto} - ${i+1}</p>`); 
});

