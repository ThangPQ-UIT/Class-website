var express = require('express')
var shortid = require('shortid')

var controller = require('../controller/controller.user')

var router = express.Router()

router.get('', controller.index);

router.get('/create', controller.getCreate);

router.post('/create', controller.postCreate);

router.get('/search', controller.search);

router.get('/:id', controller.find);

module.exports = router;