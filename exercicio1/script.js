// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Crie três objetos que vão representar frutas do sacolão. 
//Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array 
//**com três objetos**

const sacolao = []

const fruta1 = {
    nome1: "abacaxi",
    preco1: 2.45,
    disponibilidade1: true
}

const fruta2 = {
    nome: "laranja",
    preco: 1.45,
    disponibilidade: true
}

const fruta3 = {
    nome: "goiaba",
    preco: 1.15,
    disponibilidade: false
}


sacolao.push(fruta1, fruta2, fruta3)
console.log("A compra no sacolão será de: ", sacolao)