const Administrador = require("../../models/administrador");

describe('Administrador', () => {
  it('Deve ter as propriedades "Nome", "Email" e "Senha"', () => {
    const admin = Administrador.build({
      Nome: 'Administrador',
      Email: 'admin@test.com',
      Senha: '123456',
    });

    expect(admin.Nome).toBe('Administrador');
    expect(admin.Email).toBe('admin@test.com');
    expect(admin.Senha).toBe('123456');
  });


  it('A propriedade "Nome" não deve ser nula', async () => {
    const admin = Administrador.build({
      Nome: null,
      Email: 'admin@test.com',
      Senha: '123456',
    });

    await expect(admin.validate()).rejects.toThrow();
  });


  it('A propriedade "Email" não deve ser nula', async () => {
    const admin = Administrador.build({
      Nome: 'Administrador',
      Email: null,
      Senha: '123456',
    });

    await expect(admin.validate()).rejects.toThrow();
  });
  
  it('A propriedade "Senha" não deve ser nula', async () => {
    const admin = Administrador.build({
      Nome: 'Administrador',
      Email: 'admin@test.com',
      Senha: null,
    });

    await expect(admin.validate()).rejects.toThrow();
  });

});
