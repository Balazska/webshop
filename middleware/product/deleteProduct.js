/**
 * Delete product from db
 * @param objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("delete a product");
        if(res.locals.product)
            objectrepository.products.deleteProduct(res.locals.product.id);
        return next();
    };

};