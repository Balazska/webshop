/**
 * Create a product from the req body
 * @param objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("create product from req body");
        console.log(req.body);

        var body = req.body; //ha nincs size vagy csak egy van megadva az nem jo 

        var product = {};

        product.name = body.name;
        product.size = [];
        product.size = product.size.concat(body.size);
        product.description = body.description;
        product.color = body.color;
        product.price = body.price;
        product.quantity = body.quantity;
        product.image = res.locals.imageUrl;

        res.locals.product= product;

        return next();
    };

};