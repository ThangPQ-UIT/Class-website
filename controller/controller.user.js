var db = require('../db')
var shortid = require('shortid')

module.exports.index = function (req, res) {//module.exports đại diện cho file 
	res.render('user/index', {
		user: db.get('users').value()
	});
};

module.exports.create = function (req, res) {
	res.render('user/create');
};

module.exports.find = function (req, res) {
	console.log(req.params.id)
	//req.params.id để lấy giá trị của id trên URL, sau đó tìm 
	var id = req.params.id;
	var user = db.get('users').find({id: id }).value();
	res.render('user/view', {
		user : user
	});
};

module.exports.post = function (req, res) {
	req.body.id = shortid.generate();
	var err = [];
	if(!req.body.name)
	{
		err.push('Name is required');
	}

	if(!req.body.phone)
	{
		err.push('Phone is required');
	}

	if(err.length)
	{
		res.render('user/create', {
			errors: err, 
			values: req.body
		});
		return;
	}
	db.get('users').push(req.body).write()
	res.redirect('/user');
};