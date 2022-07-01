const logger = require('./logger');
const Pessoa = require('../ex.2/index.js');


// logger.info('Usando o padrao commonJS');

const pessoa = new Pessoa('Guilherme');
console.log(pessoa.toString())
