// var db = require('../db')

var User = require('../model/user.model');

//module.exports chi la 1 doi tuong
module.exports.getLogin = function (req, res) {
	res.render('login/login');
}

module.exports.postLogin = function (req, res) {
	// var user = db.get("users").find({"email": req.body.email}).value();
	var user = User.find({email: req.body.email}).then(function(user) {
		if(!user) {
			res.render('login/login', {
				errors: ["Email doest not exist"],
				values: req.body
			});
			return;
		}

		if(user[0].password !== req.body.password) {
			res.render('login/login', {
				errors: ["Wrong password!!!"],
				values: req.body
			});
			return;
		}

		res.cookie('userId', user[0]._id, {signed: true});
		//nếu ok thì redirect tới trang user hiện tất cả người dùng
		res.redirect('/user')
	});
}