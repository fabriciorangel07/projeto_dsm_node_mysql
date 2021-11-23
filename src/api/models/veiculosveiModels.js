'use strict';

const { Model, DataTypes } = require ('sequelize');

class Veiculos extends Model {
    static init (sequelize) {
        super.init ({
            vei_codido: DataTypes.STRING,
            vei_marca: DataTypes.STRING,
            vei_modelo: DataTypes.STRING,
            vei_cor: DataTypes.STRING,
            vei_anomodelo: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: 'veiculosvei'
        });
    };
};

Veiculos.associations = models => {
    Veiculos.hasOne(models.Proprietarios)
};

module.exports = Veiculos;