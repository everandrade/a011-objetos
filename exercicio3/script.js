const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// Crie uma cópia do objeto, acima, mantendo a estrutura, 
// mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle";
pokemon2.tipo = "Água"

console.log(pokemon2)


// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. 
// Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. 
// Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1.ataque = []
    

pokemon1.ataque.push(
    {
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}
)

console.log(pokemon1)

// c) Na cópia do objeto original, adicione a propriedade **`ataques`
///** a partir do **espalhamento** da propriedade criada para o 
//objeto original;

pokemon2.ataque = [...pokemon1.ataque]

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**,
//  **100 de precisão**, e de tipo **“Grama”**;

pokemon1.ataque.push({Nome: "Folha Navalha", Dano: 45, Precisão: 100,  Tipo: "Grama"})

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**,
//  **100 de precisão**, e do tipo **“Água”**;
pokemon2.ataque.push({Nome: "Jato de água", Dano: 40, Precisão: 100,  Tipo: "Água"})

// f) Imprima os dois objetos no console.

console.log("Pokedex :", pokemon1, pokemon2)
