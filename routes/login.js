
var express = require('express')

var controllerLogin = require('../controller/controller.login')

var router = express.Router()

router.get('', controllerLogin.getLogin);

router.post('', controllerLogin.postLogin);
;;;
module.exports= router;//export ten cua variable, function