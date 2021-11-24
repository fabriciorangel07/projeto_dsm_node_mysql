const Proprietarios = require ('../models/proprietarioproModels');

module.exports = {
    async index (req, res) {
        const proprietarios = await Proprietarios.findAll({ attributes: ['pro_nome'] ,logging: console.log});
        res.send('proprietariopro')
    },

    async store (req, res) {

        const { pro_nome, pro_apelido, pro_sexo, pro_nrocnh, pro_datavalidade } = req.body;
        const proprietarios = await Proprietarios.create ({});
        return res.status(200).send({
            status: 1,
            message: "Proprietário cadastrado com sucesso!",
            user
        })
    }
}