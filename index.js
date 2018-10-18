var express = require('express')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var port = 9080;

var router = require('./routes/router')
var login = require('./routes/login')
var middleware = require('./middleware/middleware')
var product = require('./routes/product')


var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); 
app.use(cookieParser('thangdeptrai'));
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function (req, res) {
	res.render('index', {
		name:'Thang',
	});
});

app.use('/user', middleware.requireAuth, router);
app.use('/login', login);
app.use('/product', product);
app.listen(port, function() {
	console.log('Server listening on ' + port);	
});
