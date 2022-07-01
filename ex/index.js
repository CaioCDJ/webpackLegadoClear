//const logger = require('./logger');



// logger.info('Usando o padrao commonJS');

// sem babel 2015
const Pessoa = require('../ex.2/index.js');

const pessoa = new Pessoa('Guilherme');
console.log(pessoa.toString())


// com bable
import Pessoa2 from '../ex.3/index.js'

const pessoa2 = new Pessoa2('Roberta');
console.log(pessoa2.toString())


