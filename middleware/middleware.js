var db = require('../db')

module.exports.requireAuth = function (req, res, next) {
	//nếu không có cookie, hoặc có cookie mà cookie đó không trùng với id thì redirect sang login
	if(!req.signedCookies.userId) {
		res.redirect('/login');
		return;
	}

	var user = db.get('users').find({id: req.signedCookies.userId}).value(); // lay cookie da gui
	
	if(!user) {
		res.redirect('/login');
		return;
	}
	next();
}