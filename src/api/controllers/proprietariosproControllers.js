const Proprietarios = require ('../models/proprietarioproModels');

module.exports = {
    async index (require, resposta) {
        const proprietarios = await Proprietarios.findAll();
        console.log("Retorno Proprietarios: " + proprietarios);
        return resposta.json (proprietarios);
    }
}