/**
 * Create a product from the req body
 * @param objectrepository 
 */

var mongoose = require('mongoose');

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("create product from req body");
        console.log(req.body);

        var body = req.body; //ha nincs size vagy csak egy van megadva az nem jo 
        var product = res.locals.product;
        console.log(res.locals.product);

        if(!body.name || !body.size || !body.description || !body.color || !body.price || !body.quantity || !body.category){
            res.status(400).end("Some fields are missing");
        } else {
            product.name = body.name;
            product.size = body.size.split(',');
            product.description = body.description;
            product.color = body.color;
            product.price = body.price;
            product.quantity = body.quantity.split(',');
            if(res.locals.imageUrl!=''){
                product.image = res.locals.imageUrl ;
            }
            product.type = mongoose.Types.ObjectId(body.category);
            console.log(product);

            return next();
        }
        
    };

};