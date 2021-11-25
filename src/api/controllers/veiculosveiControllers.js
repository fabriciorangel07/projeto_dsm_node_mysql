const Veiculos = require('../models/veiculosveiModels');

module.exports = {
    async index (req, res) {
        const veiculos = await Veiculos.findAll();
        return res.json(veiculos)
    },

    async store (req, res) {
        const { vei_marca, vei_modelo, vei_cor, vei_anomodelo, id } = req.body;
        const veiculos = await Veiculos.create ({ vei_marca, vei_modelo, vei_cor, vei_anomodelo, id });
        return res.status(200).send({
            status: 1,
            message: "Veiculo cadastrado com sucesso!",
            veiculos
        })
    },

    async update (req, res) {
        const { vei_cor } = req.body;
        const { codigo } = req.params;
        await Veiculos.update ({
            vei_cor },
            {where: {
            id: codigo}
        });
        return res.status(200).send ({
            status: 1,
            message: "Veiculo atualizado com sucesso!"
        });
    },

    async delete (req, res) {
        const { codigo } = req.params;
        await Veiculos.destroy({
            where: { id: codigo }
        });
        return res.status(200).send ({
            status: 1,
            message: "Veiculo removido com sucesso!"
        });
    },
}