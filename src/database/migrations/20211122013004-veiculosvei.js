'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('veiculo', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      vei_marca: {
        allowNull: false,
        type: Sequelize.STRING(20), //marca do veiculo
      },
      vei_modelo: {
        allowNull: false,
        type: Sequelize.CHAR(20), //modelo do proprietário do veiculo
      },
      vei_cor: {
        allowNull: false,
        type: Sequelize.STRING(15), //cor do modelo do veiculo
      },
      vei_anomodelo: {
        allowNull: false,
        type: Sequelize.STRING(10), //numero da cnh do proprietário do veiculo
      },
      pro_id: { //chave estrangeira da tabela do proprietário do veiculo
        allowNull: false,
        type: Sequelize.INTEGER, 
        foreignKey: true,
        references: { model: 'proprietario', key: 'id'},
        onDelete: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE, //data da criacao da linha
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE, //data da atualizacao da linha
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('veiculo');
  }
};
