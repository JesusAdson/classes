//cada item dentro do array tem uma posicao que chama de index
//um array sempre inicia da posicao 0

let arrayDeProdutos = [
  "Mouse", //0
  "Teclado", //1
  "Monitor", //2
  "Notebook", //3
  "WebCam", //4
  "SSD", //5
  "HD Externo", // 6,
];

//exibir o valor de um item do array através do seu index;
// console.log(arrayDeProdutos[0])

//alterar o valor de um item do array através do seu index;
// console.log(arrayDeProdutos);
// arrayDeProdutos[0] = "Mouse Gamer";
// console.log(arrayDeProdutos);

//o length retorna o tamanho do array
// console.log(arrayDeProdutos.length);

//index
// console.log(arrayDeProdutos[0]);
// console.log(arrayDeProdutos[1]);
// console.log(arrayDeProdutos[2]);
// console.log(arrayDeProdutos[3]);
// console.log(arrayDeProdutos[4]);
// console.log(arrayDeProdutos[5]);
// console.log(arrayDeProdutos[6]);

let tamanhoArrayDeProdutos = arrayDeProdutos.length;
// console.log(tamanhoArrayDeProdutos);
//percorrendo cada item do array utilizando o for
for (let i = 0; i < tamanhoArrayDeProdutos; i++) {
  console.log(arrayDeProdutos[i]);
}
