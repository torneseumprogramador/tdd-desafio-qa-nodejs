const AdministradorRepo = require('../../../repositorios/administradorRepo');
const Administrador = require("../../../models/administrador")

describe('AdministradorRepo', () => {
  let administradorRepo;

  beforeEach(async () => {
    administradorRepo = new AdministradorRepo();
    await administradorRepo.Truncate();
  });

  test('salvar os dados no banco', async () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);

    // Act
    await administradorRepo.Salvar(adm);
    const admDb = await administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb).toBeDefined();
  });

  test('atualização de dados no banco', async () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);
    await administradorRepo.Salvar(adm);

    // Atualiza o nome do Administrador
    adm.Nome = 'adm atualizado';

    // Act
    await administradorRepo.Salvar(adm);
    const admDb = await administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb.Nome).toEqual('adm atualizado');
  });

  test('exclusão de dados no banco', async () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);
    await administradorRepo.Salvar(adm);

    // Act
    await administradorRepo.Excluir(adm);
    const admDb = await administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb).toBeNull();
  });

  test('busca por objeto inexistente no banco', async () => {
    // Arrange
    const email = 'emailinexistente@teste.com';

    // Act
    const admDb = await administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb).toBeNull();
  });

  test('busca por objeto existente no banco', async () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);
    await administradorRepo.Salvar(adm);

    // Act
    const admDb = await administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb.Email).toEqual(email);
    expect(admDb.Nome).toEqual('adm');
    expect(admDb.Senha).toEqual('teste');
  });

  test('busca por ID existente no banco', async () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);
    await administradorRepo.Salvar(adm);

    // Act
    const admDb = await administradorRepo.BuscaPorEmail(adm.Email);

    // Assert
    expect(admDb.Email).toEqual(email);
    expect(admDb.Nome).toEqual('adm');
    expect(admDb.Senha).toEqual('teste');
  });

  test('busca por todos os objetos no banco', async () => {
    // Act / Assert
    expect(await administradorRepo.BuscarTodos()).toHaveLength(0);

    // Arrange
    const adm1 = criarAdministrador('adm1@teste.com');
    await administradorRepo.Salvar(adm1);

    const adm2 = criarAdministrador('adm2@teste.com');
    await administradorRepo.Salvar(adm2);

    // Act
    const admsDb = await administradorRepo.BuscarTodos();

    // Assert
    expect(admsDb).toHaveLength(2);
  });

  function criarAdministrador(email) {
    return Administrador.build({
      Email: email,
      Nome: 'adm',
      Senha: 'teste',
    });
  }

});
