'use strict';

const { Model, DataTypes } = require ('sequelize');

class Veiculos extends Model {
    static init (sequelize) {
        super.init ({
            vei_marca: DataTypes.STRING,
            vei_modelo: DataTypes.STRING,
            vei_cor: DataTypes.STRING,
            vei_anomodelo: DataTypes.STRING,
            pro_id: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: 'veiculo'
        });

        return this
    };
};

Veiculos.associations = models => {
    Veiculos.hasOne(models.Proprietarios)
};

module.exports = Veiculos;