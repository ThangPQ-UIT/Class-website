var db = require('../db')

module.exports.getLogin = function (req, res) {
	res.render('login/login');
}

module.exports.postLogin = function (req, res) {
	var user = db.get("users").find({"email": req.body.email}).value();

	if(!user) {
		res.render('login/login', {
			errors: ["Email doest not exist"],
			values: req.body
		});
		return;
	}

	if(user.password !== req.body.password) {
		res.render('login/login', {
			errors: ["Wrong password!!!"],
			values: req.body
		});
		return;
	}
	
	res.cookie('userId', user.id, {signed: true}); //gui mot cookie len
	//nếu ok thì redirect tới trang user hiện tất cả người dùng
	res.redirect('/user');
}