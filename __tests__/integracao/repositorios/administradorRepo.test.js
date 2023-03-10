const AdministradorRepo = require('../../../repositorios/administradorRepo');

describe('AdministradorRepo', () => {
  let administradorRepo;

  beforeEach(() => {
    administradorRepo = new AdministradorRepo();
    administradorRepo.Truncate();
  });

  test('salvar os dados no banco', () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);

    // Act
    administradorRepo.Salvar(adm);
    const admDb = administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb).toBeDefined();
  });

  test('atualização de dados no banco', () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);
    administradorRepo.Salvar(adm);

    // Atualiza o nome do Administrador
    adm.Nome = 'adm atualizado';

    // Act
    administradorRepo.Salvar(adm);
    const admDb = administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb.Nome).toEqual('adm atualizado');
  });

  test('exclusão de dados no banco', () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);
    administradorRepo.Salvar(adm);

    // Act
    administradorRepo.Excluir(adm);
    const admDb = administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb).toBeNull();
  });

  test('busca por objeto inexistente no banco', () => {
    // Arrange
    const email = 'emailinexistente@teste.com';

    // Act
    const admDb = administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb).toBeNull();
  });

  test('busca por objeto existente no banco', () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);
    administradorRepo.Salvar(adm);

    // Act
    const admDb = administradorRepo.BuscaPorEmail(email);

    // Assert
    expect(admDb.Email).toEqual(email);
    expect(admDb.Nome).toEqual('adm');
    expect(admDb.Senha).toEqual('teste');
  });

  test('busca por ID existente no banco', () => {
    // Arrange
    const email = 'adm@teste.com';
    const adm = criarAdministrador(email);
    administradorRepo.Salvar(adm);

    // Act
    const admDb = administradorRepo.BuscaPorId(adm.Id);

    // Assert
    expect(admDb.Email).toEqual(email);
    expect(admDb.Nome).toEqual('adm');
    expect(admDb.Senha).toEqual('teste');
  });

  test('busca por todos os objetos no banco', () => {
    // Act / Assert
    expect(administradorRepo.BuscarTodos()).toHaveLength(0);

    // Arrange
    const adm1 = criarAdministrador('adm1@teste.com');
    administradorRepo.Salvar(adm1);

    const adm2 = criarAdministrador('adm2@teste.com');
    administradorRepo.Salvar(adm2);

    // Act
    const admsDb = administradorRepo.BuscarTodos();

    // Assert
    expect(admsDb).toHaveLength(2);
  });

  function criarAdministrador(email) {
    return {
      Email: email,
      Nome: 'adm',
      Senha: 'teste',
    };
  }

});
