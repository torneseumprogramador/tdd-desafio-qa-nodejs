const Administrador = require("../../models/administrador")

describe('Administrador model', () => {
  let administrator

  beforeEach(() => {
    administrator = new Administrador()
    console.log(`==========[aqui]===========`)
  })

  test('should set and get nome', () => {
    const nome = 'John Doe'
    administrator.setNome(nome)
    expect(administrator.getNome()).toBe("JOHN DOE")
  })

  test('should set and get email', () => {
    const email = 'johndoe@example.com'
    administrator.setEmail(email)
    expect(administrator.getEmail()).toBe(email)
  })

  test('should set and get senha', () => {
    const senha = 'senha123'
    administrator.setSenha(senha)
    expect(administrator.getSenha()).toBe(senha)
  })
})