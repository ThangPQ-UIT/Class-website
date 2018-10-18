
var db = require('../db')

module.exports.product = function (req, res) {
	res.render('product/product', {
		product: db.get('product').value()
	})
}