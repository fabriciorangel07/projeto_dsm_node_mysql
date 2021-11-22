const Sequelize = require ('sequelize');
const dbConfig = require ('../config/data   base.js');

const conexao = new Sequelize (dbConfig);

try {
    conexao.authenticate ();
    console.log ('Conexão iniciada!');
}
catch (error) {
    console.log ('Conexao não iniciada!');
}

module.exports = conexao