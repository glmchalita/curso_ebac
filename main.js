function Pessoa(nome, sobrenome, cpf) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.cpf = cpf;
}

function Funcionario(nome, sobrenome, cpf, cargo, salario) {
  Pessoa.call(this, nome, sobrenome, cpf);
  this.cargo = cargo;
  let _salario = salario;
}

function Estagiario(nome, sobrenome, cpf) {
  Funcionario.call(this, nome, sobrenome, cpf, "Estagiario", 2000);
}

function Gerente(nome, sobrenome, cpf) {
  Funcionario.call(this, nome, sobrenome, cpf, "Gerente", 5000);
}

const funcionario1 = new Estagiario("Kiara", "Vasquez", "11122233312");
const funcionario2 = new Estagiario("Sofi", "Charlote", "33322211121");
const funcionario3 = new Gerente("Cristal", "Dagua", "22233311132");

console.log(funcionario1, funcionario2, funcionario3);
