// var db = require('../db');
var shortid = require('shortid');


var User = require('../model/user.model');

//trang user mặc định
// module.exports.index = function (req, res) {//module.exports đại diện cho file 
// 	res.render('user/index', {
// 		user: db.get('users').value()
// 	});
// };
module.exports.index = function(req, res) {
	User.find().then(function(user) {
		res.render('user/index', {
			user: user
		})
	})
}

//Tìm kiếm User
module.exports.search = function(req, res) {
	//giá trị sau dấu hỏi trong URL
  var q = req.query.q;
  // var matchedUsers = db.get('users').value().filter(function(user) {
  //   return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;//toLowerCase chuyển về chữ thường
  // });

  User.find({name: q}).then(function(matchedUsers) {
  	// console.log(matchedUsers)
  	res.render('user/index', {
  		user: matchedUsers
  	})
  })
}

//Tạo User mới(Get method)
module.exports.getCreate = function (req, res) {
	res.render('user/create');
};

//Tìmm kiếm User
module.exports.find = function (req, res) {
	//req.params.id để lấy giá trị của id trên URL, sau đó tìm 
	var id = req.params.id;
	// var user = db.get('users').find({id: id }).value();
	// console.log(user)
	// res.render('user/view', {
	// 	user : user
	// });
	User.find({_id: id}).then(function(user) {
		res.render('user/view', {
			user: user
		})
	})
};

//Tạo User mới(Post method)
module.exports.postCreate = function (req, res) {
	// req.body.id = shortid.generate();
	console.log("req.body la: " + JSON.stringify(req.body));
	var err = [];
	//kiểm tra các trường input có để trống hay không
	if(!req.body.name)
	{
		err.push('Name is required');
	}

	if(!req.body.phone)
	{
		err.push('Phone is required');
	}

	if(!req.body.password)
	{
		err.push('Password is required');
	}

	if(!req.body.university)
	{
		err.push('University is required');
	}

	if(err.length)
	{
		res.render('user/create', {
			errors: err, 
			values: req.body
		});
		return;
	}
	//23/02/2019: database push user mới vào rồi redirect lại vào /user
	// db.get('users').push(req.body).write();
	User.collection.insertOne(req.body);
	res.redirect('/user');
};