/**
 * get all products
 * @param {*} objectrepository 
 */

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
        var Product = objectrepository.productModel;

        Product.find().populate('type').exec(function(err,products){
            if(err){
                console.log(err);
            } else{
                res.locals.products = products;
                console.log("get all products");
                return next();
            }
        });    
    };

};