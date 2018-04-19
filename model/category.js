//Category model
var Schema = require('mongoose').Schema;
var db = require('../config/db');

var categorySchema = new Schema({
        name : String,
        description : String,
});

var Category = db.model("Category",categorySchema);
module.exports = Category;