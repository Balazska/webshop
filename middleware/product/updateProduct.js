/**
 * insert or update a product
 * @param {*} objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("update a product");

        var products = objectrepository.products.products;
        var product = res.locals.product;
        if(!req.params.id)
            product.id = products[products.length-1].id ++ ;
        else 
            product.id= req.params.id;

        objectrepository.products.push(product);
        
        return next();
    };

};