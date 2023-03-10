var express = require('express');
var router = express.Router();
const AdministradorRepo = require("../repositorios/administradorRepo")
const Administrador = require("../models/administrador")

/* GET home page. */
router.get('/', async function(req, res, next) {

  const admbanco = Administrador.build({
    Email: "email@ttt.com",
    Nome: 'admsss',
    Senha: 'testesss',
  })

  admbanco.save();

  const admDb = await new AdministradorRepo().BuscaPorId(1);
  console.log("=================")
  console.log(admDb)
  console.log("=================")
  res.render('index', { title: 'Express', adm: admDb });
});

module.exports = router;
