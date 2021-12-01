'use strict';

const { Model, DataTypes } = require ('sequelize');

class Proprietarios extends Model {
    static init (sequelize) {
        super.init ({
            pro_nome: DataTypes.STRING,
            pro_apelido: DataTypes.STRING,
            pro_sexo: DataTypes.STRING,
            pro_nrocnh: DataTypes.STRING,
            pro_datavalidade: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: 'proprietario'
        });
        return this;
    }
};

Proprietarios.associations = models => {
    Proprietarios.belongsTo(models.Veiculos)
}

module.exports = Proprietarios;