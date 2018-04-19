/**
 * insert or update a product
 * @param {*} objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("update a product");

        var Product = objectrepository.productModel;

        var product = res.locals.product;
        product.save(function(err){
            if(err){
                console.log("error during update "+err);
            }else {
                return next();
            }
        });
    };

};