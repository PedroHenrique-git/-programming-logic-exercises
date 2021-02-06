/*
    Considerando a tabela abaixo…

    total de eleitores = 1000
    válidos            = 800
    votos brancos      = 150
    nulos              = 50
    Faça uma classe com 3 métodos que calculam…

    o percentual do votos válidos em relação ao total de eleitores,
    o percentual de brancos em relação ao total de eleitores
    o percentual de nulos em relação ao total de eleitores.
    Dica: “em relação ao total” significa que você deve dividir,
    por exemplo, “nulos” pelo total de eleitores, válidos pelo total de eleitores, etc…

    Utilize programação orientada a objetos.
*/

class Votos {
  constructor(public totalVotes: number, public validos: number, public brancos: number, public nulos: number) {}

  percentualValidos(): number { return this.validos / this.totalVotes; }

  percentualBrancos(): number { return this.brancos / this.totalVotes; }

  percentualNulos(): number { return this.nulos / this.totalVotes; }
}

const votos = new Votos(1000, 800, 150, 50);
console.log(votos.percentualValidos(), votos.percentualBrancos(), votos.percentualNulos());
