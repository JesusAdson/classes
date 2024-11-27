//OBJETOS LITERAIS
const pessoa = {
  nome: "Adson",
  altura: 1.73,
  idade: 23,
  cor: "Preta",
  temGraduacao: true,
  graduacao: {
    nome: "Análise e Desenvolvmento de Sistemas",
    duracao: "3 anos",
  },
  cursos: ["Programação WEB", "Back-end com NodeJS"],
  mostrarInformacoes: function () {
    return `Nome: ${this.nome}\nAltura: ${this.altura}\nIdade: ${this.idade}`;
  },
};

//visualizar - console.log(pessoa.nome);
//alterar valor - pessoa.nome = "Renan";
//adicionar novas chaves - pessoa.profissao = "Desenvolvedor WEB";
console.log(pessoa.mostrarInformacoes());
