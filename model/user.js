//Product template
var Schema = require('mongoose').Schema;
var db = require('../config/db');

var userSchema = new Schema({
        username : String,
        password : String,
        email : String,
        token : String,
        tokenExpires : Date
});

var User = db.model("User",userSchema);
module.exports = User;