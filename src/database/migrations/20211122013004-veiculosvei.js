'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('veiculovei', {
      vei_codigo: {
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
      pro_codigo: {
        allowNull: false,
        type: Sequelize.INTEGER, //chave estrangeira da tabela do proprietário do veiculo
        foreingKey: true,
        references: {
          model: 'proprietariopro',
          key: 'pro_codigo'
        }
      },
    })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('veiculosvei');
  
  }
};
