//map
//o map ele cria um novo array com base na funcao
//de callback que for passada

const arrayDeNumeros = [1, 2, 3, 4, 5];

const arrayDeNumerosDobrado = arrayDeNumeros.map(function (numero) {
  return numero * 2;
});

// console.table(arrayDeNumeros);
// console.table(arrayDeNumerosDobrado);

const arrayValores = [100, 150, 45, 23, 230];
const desconto = 0.1;

// arrayValores.forEach(function (valor) {
//   const valorComDesconto = valor * (1 - desconto);
//   console.log(
//     `Valor sem desconto: R$${valor} -- Valor com desconto: R$${valorComDesconto} \n`
//   );
// });

const arrayValoresComDesconto = arrayValores.map(function (valor) {
  return valor * (1 - desconto);
});

// console.log(arrayValores);
// console.log(arrayValoresComDesconto);

// Exercício 2: Converter strings em números

// Você tem um array de strings que representam números.
// Use map para convertê-los em números inteiros.
// const stringsNumeros = ["10", "20", "30", "40", "50"];

// const arrNumeros = stringsNumeros.map(function (numeroString) {
//   return parseInt(numeroString);
// });

// console.table(stringsNumeros);
// console.table(arrNumeros);

// Exercício 9: Calcular a idade

// Dado um array de anos de nascimento, use map para
// calcular a idade de cada pessoa considerando o ano atual.
// const anosNascimento = [1990, 1985, 2000, 1995];
// const anoAtual = new Date().getFullYear();

// const arrIdades = anosNascimento.map(function (ano) {
//   return anoAtual - ano;
// });

// console.table(arrIdades);

//filter
// const numeros = [1, 2, 3, 4, 8, 10, 15, 29, 32, 40];

// const numerosDivisiveisPorDois = numeros.map(function (numero) {
//     re
// })

//- array
//forEach
//map
//filter
//slice
//length

//crie uma funcao que recebe um array de dois numeros
// e coloque eles em ordem crescente

let a = 1;

function ordenaCrescente(arrayDeDoisNumeros) {
  let maior = 0;
  let menor = 9999;

  arrayDeDoisNumeros.forEach(function (numero) {
    if (numero < menor) {
      menor = numero;
    }

    if (numero > maior) {
      maior = numero;
    }
  });

  console.log(menor, maior);
}

const arrDoisNumeros = [2, 1];

ordenaCrescente(arrDoisNumeros);
