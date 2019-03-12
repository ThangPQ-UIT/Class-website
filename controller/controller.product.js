
// var db = require('../db')
var Product = require('../model/product.model');

module.exports.product = function (req, res) {
	// console.log(req.query.page)
	// var begin = (req.query.page -1) * 8 || 1;
	// var end = req.query.page * 8;
	// res.render('product/product', {
	// 	product: db.get('product').value().slice(begin, end)
	// })
	Product.find().then(function(product) {
		res.render('product/product', {
			product: product
		});
	})
}