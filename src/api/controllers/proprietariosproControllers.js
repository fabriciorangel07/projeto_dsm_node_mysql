const Proprietarios = require ('../models/proprietarioproModels');

module.exports = {
    async index (require, resposta) {
        const proprietarios = await Proprietarios.findAll();
        return resposta.json (proprietarios);
    },

    async store (req, res) {
        const { pro_nome, pro_apelido, pro_sexo, pro_nrocnh, pro_datavalidade } = req_body;
        const proprietarios = await Proprietarios.create ({ pro_nome, pro_apelido, pro_sexo, pro_nrocnh, pro_datavalidade })
        return res.status (200).send({
            status: 1,
            message: "Proprietário cadastrado com sucesso!",
            user
        })
    }
}