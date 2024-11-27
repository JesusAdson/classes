//forEach - percorre todos os itens do array
//map - percorrer todos os itens do array podendo transformar,
//      porém retorna um novo array
//filter - retornar um novo array
//ARRAY FILTER
const arrayDeNumeros = [1, 2, 3, 4, 5, 6];

// arrayDeNumeros
//   .filter(function (numero) {
//     return numero % 2 === 0;
//   }) // [2, 4, 6]
//   .map(function (numero) {
//     return numero * 2;
//   }) // [4, 8, 12]
//   .forEach(function (numero) {
//     console.log(numero);
//   });

const arrayDeNomes = [
  "Adson",
  "Adivam",
  "Angela",
  "Renan",
  "Patricio",
  "Jhenifer",
];

const arrayDeNomesQueIniciamComA = arrayDeNomes.filter(function (nome) {
  return nome.startsWith("A");
});

// console.table(arrayDeNomesQueIniciamComA);
