const Veiculos = require('../models/veiculosveiModels');

module.exports = {
    async index (req, res) {
        const veiculos = await Veiculos.findAll();
        return res.json(veiculos)
    },

    async store (req, res) {
        const { pro_nome, pro_apelido, pro_sexo, pro_nrocnh, pro_datavalidade } = req.body;
        const veiculos = await Veiculos.create ({ pro_nome, pro_apelido, pro_sexo, pro_nrocnh, pro_datavalidade });
        return res.status(200).send({
            status: 1,
            message: "Proprietário cadastrado com sucesso!",
            veiculos
        })
    }
}