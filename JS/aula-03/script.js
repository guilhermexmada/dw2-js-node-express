// criando uma classe
class Carro{ // nomes de classes devem iniciar em maiúscula 
    // atributos utilizam método 'construtor'
    constructor(marca,modelo,ano){
        // this representa a instância (objeto) e o valor atribuído refere-se aos parâmetros preenchidos na inicialização do objeto
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // métodos
    buzinar(){
        return "Beep! Beep!";
    }
}

// objeto TORO
const toro = new Carro('Fiat','Black','2022');
document.write(`Carro Toro | ${toro.marca} | ${toro.modelo} | ${toro.ano} | ${toro.buzinar()} `);

document.write("<br>");

// objeto STRADA sem inicialização
const strada = new Carro();
strada.marca = "Fiat";
strada.modelo = "Coal";
strada.ano = "2025";
document.write(`Carro Strada | ${strada.marca} | ${strada.modelo} | ${strada.ano} | ${strada.buzinar()} `);

// adicionando propriedades/métodos extras a um objeto 
strada.motor = "V2";
strada.turbo = () => "Vrummm!!!";