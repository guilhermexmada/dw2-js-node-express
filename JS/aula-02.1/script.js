let vetor = ["laranja","maçã","banana"];
document.write(`<p>Nosso vetor: ${vetor}</p>`);

// adicionando item ao vetor | indíces que não existem adicionam elementos, índices que já existem substituem elementos
vetor[3] = "morango";
vetor[0] = "pera"; 
document.write(`<p>Nosso vetor: ${vetor}</p>`);

// método PUSH insere um novo elemento no final do vetor
vetor.push("abacaxi");
document.write(`<p>Nosso vetor: ${vetor}</p>`);

// método UNSHIFT insere um novo elemento no início do vetor
vetor.unshift("laranja");
document.write(`<p>Nosso vetor: ${vetor}</p>`);

// método LENGHT conta o número de elementos do vetor
let numeros = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Nosso novo vetor: ${numeros}</p>`);
document.write(`Nosso novo vetor tem ${numeros.length} elementos`);

// método SORT ordena o vetor | serve para strings | para números, precisa passar parâmetros pois se não se baseará apenas no primeiro algarismo
let numerosCrescente = numeros.sort((a,b) => a - b); // parâmetros para sort numérico : arrow function | (2 identificadores) => verificação se o primeiro é menor que o segundo 
let vetorCrescente = vetor.sort();
document.write(`<p>Nosso novo vetor: ${numerosCrescente}</p>`); 
document.write(`<p>Nosso antigo vetor: ${vetorCrescente}</p>`);  

// ordenando os vetores em ordem DECRESCENTE
let numerosDecrescente = numeros.sort((a,b) => b - a); // arrow function | (2 identificadores) => verificação se o segundo é menor que o primeiro 
document.write(`<p>Nosso novo vetor: ${numerosDecrescente}</p>`); 