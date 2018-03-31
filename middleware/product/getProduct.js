/**
 * get product by id
 * @param {*} objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get a product");
        var id=req.params.id;
        res.locals.product = objectrepository.products.getProduct(id);
        console.log(res.locals.product);
        return next();
    };

};