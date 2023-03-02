module.exports = class Administrador{
    setNome(_nome){
        this.nome = _nome
    }
    getNome(){
        return this.nome.toUpperCase()
    }

    setEmail(_email){
        this.email = _email
    }
    getEmail(){
        return this.email
    }

    setSenha(_senha){
        this.senha = _senha
    }
    getSenha(){
        return this.senha
    }

    setConfirmacaoSenha(_csenha){
        this.csenha = _csenha
    }

    validarSenha(){
        return this.senha === this.csenha
    }
}

