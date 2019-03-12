var express = require('express')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URL);
mongoose.connect("mongodb://localhost/express-demo", {useNewUrlParser: true});

var port = 9080;

var router = require('./routes/router')
var login = require('./routes/login')
var middleware = require('./middleware/middleware')
var product = require('./routes/product')


var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(cookieParser('thangdeptrai'));

app.get('/', function (req, res) {
	res.render('index2', {
		login: 'done'
	});
});

//trước khi vào trang /user sẽ kiểm tra đã đăng nhập hay chưa bằng middleware, nếu chưa đăng nhập sẽ tiến hành đăng nhập trong middleware
//sau khi tiến hành đăng nhập thành công sẽ có cookie, xong rồi redirect lại /user lúc này đã có cookie nên vào được.
app.use('/user', middleware.requireAuth, router);
app.use('/login', login);
app.use('/product', product);
app.listen(port, function() {
	console.log('Server listening on ' + port);	
});
