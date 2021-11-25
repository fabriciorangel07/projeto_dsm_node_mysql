const Proprietarios = require ('../models/proprietarioproModels');

module.exports = {
    async index (req, res) {
        const proprietarios = await Proprietarios.findAll();
        return res.json(proprietarios)
    },
    

    async store (req, res) {    
        const { pro_nome, pro_apelido, pro_sexo, pro_nrocnh, pro_datavalidade } = req.body;
        const proprietarios = await Proprietarios.create ({ pro_nome, pro_apelido, pro_sexo, pro_nrocnh, pro_datavalidade });
        return res.status(200).send({
            status: 1,
            message: "Proprietário cadastrado com sucesso!",
            proprietarios
        })
    }   
}