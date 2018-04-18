/**
 * get all products
 * @param {*} objectrepository 
 */

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
        var Product = objectrepository.productModel;

        Product.find(function(err,products){
            res.locals.products = products;
            console.log("get all products");
            return next();
        });
        
    };

};