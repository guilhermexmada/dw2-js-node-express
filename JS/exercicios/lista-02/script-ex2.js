//  LISTA DE EXERCÍCIOS JAVASCRIPT 02 - EX02

document.write("<h2>Classes: Fábrica de Heróis</h2>");

//  criando classe 
class Heroi{
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    correr(){
        return "Correndo " + this.velocidade + " m/s!";
    }
    andar(){
        return "Apenas caminhando...";
    }
    atacar(){
        return "Golpeou causando " + this.forca + " de dano!";
    }
    defender(){
        return "Defendeu-se! Está com " + this.vida + " de vida...";
    }
}

//  instanciando objetos
let homemAranha = new Heroi("Homem-Aranha",100,20,15);
let superman = new Heroi("Super-Homem",500,100,50);
let batman = new Heroi("Batman",150,10,20);

//  adicionando novos atributos/métodos
homemAranha.teia = 0;
homemAranha.sentidoAranha = () => "Cuidado! Perigo por perto!";
superman.podeVoar = 1;
superman.visaoCalor = () => "Queimando tudo pela frente!";
batman.esconder = 1;
batman.investigar = () => "Investigando uma cena de crime...";

//  validando
document.write(`${homemAranha.nome} : ${homemAranha.correr()}. ${homemAranha.sentidoAranha()} <br>`);
document.write(`${superman.nome} : ${superman.atacar()}. ${superman.defender()} <br>`);
document.write(`${batman.nome} : ${batman.andar()}. ${batman.investigar()} <br>`);





