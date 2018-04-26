//Product template
var Schema = require('mongoose').Schema;
var db = require('../config/db');

var productSchema = new Schema({
        name : String,
        description : String,
        price : Number,
        color : [String],
        type : {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        size: [Number],
        quantity: [Number],
        image: String
});

var Product = db.model("Product",productSchema);
module.exports = Product;