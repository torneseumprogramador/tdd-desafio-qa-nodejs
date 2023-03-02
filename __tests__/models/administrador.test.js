const Administrador = require("../../models/administrador")

describe('Administradores', () => {
    test('Testando modelo de administrador com as propriedades basicas', () => {
        const adm = new Administrador();
        adm.setNome("nome Fake")
        adm.setEmail("Email Fake")
        adm.setSenha("Senha Fake")

        expect(adm.getNome()).toBe("NOME FAKE");
        expect(adm.getEmail()).toBe("Email Fake");
        expect(adm.getSenha()).toBe("Senha Fake");
    });

    test('Confirmação de senha', () => {
        const adm = new Administrador();
        adm.setSenha("Senha Fake")
        adm.setConfirmacaoSenha("Senha Fake")

        expect(adm.validarSenha()).toBe(true);
    });

    test('Confirmação de senha digitada diferente', () => {
        const adm = new Administrador();
        adm.setSenha("Senha Fake")
        adm.setConfirmacaoSenha("Senha Fakssse")

        expect(adm.validarSenha()).toBe(false);
    });
});