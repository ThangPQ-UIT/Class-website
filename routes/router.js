var express = require('express')
var shortid = require('shortid')

var controller = require('../controller/controller.user')

var router = express.Router()

router.get('', controller.index);

router.get('/create', controller.create);

router.get('/:id', controller.find);

router.post('/create', controller.post)
sssssssssssssssss
module.exports = router;