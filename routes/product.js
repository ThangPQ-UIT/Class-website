
var express = require('express')
var router = express.Router()

var controllerProduct = require('../controller/controller.product')

router.get('', controllerProduct.product);

module.exports= router;//export ten cua variable, function