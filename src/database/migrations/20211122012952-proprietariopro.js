'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('proprietario', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      pro_nome: {
        allowNull: false,
        type: Sequelize.STRING(20), //nome do proprietário do veiculo
      },
      pro_apelido: {
        allowNull: false,
        type: Sequelize.STRING(10), //apelido do proprietário do veiculo
      },
      pro_sexo: {
        allowNull: false,
        type: Sequelize.CHAR(1), //nome do proprietário do veiculo
      },
      pro_nrocnh: {
        allowNull: false,
        type: Sequelize.STRING(10), //numero da cnh do proprietário do veiculo
      },
      pro_datavalidade: {
        allowNull: false,
        type: Sequelize.DATE, //data de validade da cnh do proprietário do veiculo
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE, //data da criacao da linha
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE, //data da atualizacao da linha
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('proprietario');
  },
};