let arrayDeProdutos = [
  "Mouse", //0
  "Teclado", //1
  "Monitor", //2
  "Notebook", //3
  "WebCam", //4
  "SSD", //5
  "HD Externo", // 6,
];

// function exibeProduto(produto, index) {
//   console.log(`Index: ${index} - Nm. Produto: ${produto}`);
// }

// arrayDeProdutos.forEach(exibeProduto);

// arrayDeProdutos.forEach(function (produto, posicao) {
//   console.log(`Index: ${posicao} - Nm. Produto: ${produto}`);
// });

//Crie um array com os nomes de cinco
//paises que você gostaria de visitar e
//exiba cada nome no console.
const arrayPaises = ["Chile", "Espanha", "Noruega", "Japão", "Canada"];

for (let i = 0; i < arrayPaises.length; i++) {
  console.log(arrayPaises[i]);
}
console.log("\n");
arrayPaises.forEach(function (pais, index) {
  console.log(index);
});

//control + a = seleciona todo o texto
//control + s = salva
//control + c = copia
//control + v = cola
//control + setas (direita e esquerda) = avançam para o final da linha
//control + setas (cima e baixo) = avançam para o inicio ou final do arquivo
//alt + seta (direita ou esquerda) = avança uma palavra
//alt + seta (cima ou baixo) = troca linha de lugar
//shift + seta = selecionar o texto seja em linhas ou letra por letra
//shift + alt + seta (direita ou esquerda) = selecionar uma palavra inteira
//shift + alt + seta (cima ou baixo) = duplicar a linha
//control + j = abre e fecha terminal
//control + k + w = fecha todas as abas
//control + w = fecha a aba ativa (atual)
//control + b = abre/fecha menu lateral
