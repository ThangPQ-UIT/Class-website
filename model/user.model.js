var mongoose = require('mongoose');

//Schema để khai báo những field có trong database, có thể làm sạch dữ liệu, validate dữ liệu
var userSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	phone: String,
	avatar: String
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;