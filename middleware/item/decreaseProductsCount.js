/**
 * decrease products quantity
 */

var async = require("async");

module.exports = function (objectRepository) {

    return function (req, res, next) {
        var Product = objectRepository.productModel;

        async.forEach(res.locals.products, function(product, callback){
            product.save(function(err, product){
                if(err){
                    console.log(err);
                    callback(err);
                } else {
                    callback();
                }
            });
        }, function(err){
            if(err){
                console.log("err");
            } else {
                console.log("add data saved")
                return next();
            }
        });
        
    };

};