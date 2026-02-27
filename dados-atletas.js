class atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nomeDoAtleta = nome;
        this.idadeDoAtleta = idade;
        this.pesoDoAtleta = peso;
        this.alturaDoAtleta = altura;
        this.notasDoAtleta = notas;
    }

    calculaCategoria(){
        if (this.idadeDoAtleta >= 9 && this.idadeDoAtleta <= 11 ){
            return "Infantil"
        } else if (this.idadeDoAtleta >=12 && this.idadeDoAtleta <= 13){
            return "Juvenil"
        } else if (this.idadeDoAtleta >= 14 && this.idadeDoAtleta <= 15 ){
            return "Intermediário"
        } else if (this.idadeDoAtleta >= 16 && this.idadeDoAtleta <= 30 ){
            return "Adulto"
        } else {
            return "Sem categoria" 
        }
    }

    calculaIMC(){
        return this.pesoDoAtleta/(this.alturaDoAtleta * this.alturaDoAtleta)
    }

    calculaMediaValida(){
        let notasOrdenadas = this.notasDoAtleta.sort(function(a, b){
            return a - b;
        })

        let notasComputadas = notasOrdenadas.slice(1,4);

        let soma = 0
        notasComputadas.forEach(function(nota){
            soma = soma + nota;
        });

        return soma / notasComputadas.length;
    }

    obtemNomeAtleta(){
        return this.nomeDoAtleta
    }

    obtemIdadeAtleta(){
        return this.idadeDoAtleta
    }

    obtemPesoAtleta(){
        return this.pesoDoAtleta
    }

    obtemNotasAtleta(){
        return this.notasDoAtleta
    }

    obtemCategoria(){
        return this.calculaCategoria()
    }

    obtemIMC(){
        return this.calculaIMC()
    }

    obtemMediaValida(){
        return this.calculaMediaValida()
    }
}

const atletas = [
  new atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]),
  new atleta("Fernando Puntel", 15, 75, 1.75, [8, 10, 10, 7, 9.33]),
  new atleta("Daiane Jelinsky", 11, 62, 1.60, [7, 10, 9.5, 9.5, 8]),
  new atleta("Bruno Castro", 45, 85, 1.88, [10, 10, 10, 9, 9.5])
];

atletas.forEach(function(atletaIndividual){
console.log("----------------------------")
    console.log(`Nome: ${atletaIndividual.obtemNomeAtleta()}`);
console.log(`Idade: ${atletaIndividual.obtemIdadeAtleta()}`);
console.log(`Peso: ${atletaIndividual.obtemPesoAtleta()}`);
console.log(`Altura: ${atletaIndividual.alturaDoAtleta}`);
console.log(`Notas: ${atletaIndividual.obtemNotasAtleta()}`);
console.log(`Categoria: ${atletaIndividual.obtemCategoria()}`);
console.log(`IMC: ${atletaIndividual.obtemIMC()}`);
console.log(`Média Válida: ${atletaIndividual.obtemMediaValida()}`);
})
console.log("----------------------------")
