//const logger = require('./logger');


// logger.info('Usando o padrao commonJS');

// ex:2 sem babel 2015
const Pessoa = require('../ex.2/index.js');

const pessoa = new Pessoa('Guilherme');
console.log(pessoa.toString())


//ex:3 com babel
import Pessoa2 from '../ex.3/index.js'

const pessoa2 = new Pessoa2('Roberta');
console.log(pessoa2.toString())

// exercicio 4
const ex = require('../ex.4/index.js')

// react

import 'react'

export default props => (
  <h1>Ola</h1>
)

console.log('Funcionou!')

