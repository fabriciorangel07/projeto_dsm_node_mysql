const Sequelize = require ('sequelize');
const dbConfig = require ('../config/database.js');

const conexao = new Sequelize (dbConfig);

const Proprietarios = require ('../api/models/proprietarioproModels');
const Veiculos = require ('../api/models/veiculosveiModels');

try {
    conexao.authenticate ();
    console.log ('Conexão iniciada!');
}
catch (error) {
    console.log ('Conexao não iniciada!');
}

Proprietarios.init (conexao);
Veiculos.init (conexao);

module.exports = conexao