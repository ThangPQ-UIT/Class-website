var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync')
var adapters = new FileSync('db.json')
var db = low(adapters)
db.defaults({users: [] }).write();

module.exports = db;