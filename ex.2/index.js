class Pessoa {
  constructor(nome){

    this.nome = nome;
  }

  toString(){
   console.log(this.nome)
    return `Pessoa: ${this.nome}`;
  }
}

//const pessoa= new Pessoa('Guilherme');
//console.log(pessoa.toString())


module.exports = Pessoa
