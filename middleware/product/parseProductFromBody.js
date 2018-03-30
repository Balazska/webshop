/**
 * Create a product from the req body
 * @param objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("create product from req body");
        console.log(req.body);

        var product = req.body; //ha nincs size vagy csak egy van megadva az nem jo 
        var products = objectrepository.products.products;
        if(!req.params.id)
            product.id = products[products.length-1].id ++ ;
        else 
            product.id= req.params.id;
        product.image = res.locals.imageUrl;

        res.locals.product= product;

        return next();
    };

};