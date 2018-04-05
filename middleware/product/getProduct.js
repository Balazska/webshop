/**
 * get product by id, if the id is invalid send error
 * @param {*} objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get a product");
        var id=req.params.id;
        var product = objectrepository.products.getProduct(id);
        if(product){
            res.locals.product = product;
            console.log(res.locals.product);
            return next();
        } else {
            res.status(404).end("Product not found");
        }

    };

};