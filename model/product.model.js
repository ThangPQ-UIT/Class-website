var mongoose = require('mongoose');

//Schema để khai báo những field có trong database, có thể làm sạch dữ liệu, validate dữ liệu
var userSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Product = mongoose.model('Product', userSchema, 'product');

module.exports = Product;