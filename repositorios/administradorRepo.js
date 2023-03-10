const Administrador = require('../models/administrador');

class AdministradorRepo {
    async Salvar(adm) {
        await adm.save();
    }

    async BuscaPorEmail(email) {
        return await Administrador.findOne({ where: { Email: email } });
    }

    async Truncate() {
        await Administrador.destroy({ where: {} });
    }

    async Excluir(adm) {
        await adm.destroy();
    }

    async BuscarTodos() {
        return await Administrador.findAll();
    }

    async BuscaPorId(id) {
        return await Administrador.findByPk(id);
    }
}

module.exports = { sequelize, Administrador, AdministradorRepo };
