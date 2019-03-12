// var db = require('../db')

var User = require('../model/user.model');


module.exports.requireAuth = function (req, res, next) {
	//nếu không có cookie, hoặc có cookie mà cookie đó không trùng với id thì redirect sang login
	if(!req.signedCookies.userId) {
		res.redirect('/login' );
		return;
	}

	// var user = db.get('users').find({id: req.signedCookies.userId}).value(); // lay cookie da gui

	//đề phòng giả mạo cookie, kiểm tra id có giống với cookie hay ko( vì cookie được lấy chính bằng id của user đó)
	var user = User.find({_id: req.signedCookies.userId}).then(function(user) {
		// console.log('req.cookie: ' + user)
		if(!user) {
			res.redirect('/login');
			return;
		}
	})

	next();
}

