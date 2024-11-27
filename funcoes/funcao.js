//funcoes
//com parametros
//sem parametros
//com retornos
//sem retornos
const a = 1;
const b = 2;
soma(a, b);

function soma(valor1, valor2) {
  //funcao com parametros e com retorno
  return valor1 + valor2;
}

function dizOi() {
  //funcao sem parametros e sem retorno
  console.log("oi");
}

function apresentacao(nome, idade, altura) {
  //funcao com parametros sem retorno
  console.log(
    `Olá ${nome}, sua idade é de ${idade} anos e vc tem ${altura}m de altura`
  );
}

// dizOi();
// apresentacao("Adson", 23, 1.73);

function nomeIgualARenan(nome) {
  return nome === "Renan" || nome === "renan";
}

function verificarParOuImpar(numero) {
  //funcao com parametro e com retorno
  return numero % 2 === 0;
}

// console.log(verificarParOuImpar(3));
// console.log(verificarParOuImpar(2));

// Crie uma função chamada ehMaiorDeIdade que receba a
// idade de uma pessoa como parâmetro e
// retorne se a pessoa é maior de idade (true) ou menor de idade (false).

function ehMaiorDeIdade(idade) {
  //com paramtetro? com retorno?
  return idade >= 18;
}

function saudacao(nome, funcaoDeCallback) {
  console.log(`Opa ${nome} \n`);
  funcaoDeCallback(nome);
}

function funcaoDeCallback(nome) {
  console.log(`Tchau ${nome}`);
}

saudacao("Adson", funcaoDeCallback);

// console.log(ehMaiorDeIdade(18));
// console.log(ehMaiorDeIdade(17));
