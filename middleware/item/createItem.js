/**
 * create an item
 * 
 * Required: res.locals.product
 */

var message = require("../error");

module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("create an item");
        //check the from data
        if(!req.body.size || !req.body.quantity){
            res.status(400).end('Bad Request, form fields are missing');
        } else if(req.body.quantity > res.locals.product.quantity){
            req.session.sessionFlash = message.error("We don't have so many product"); 
            res.redirect(req.get("referer"));
        } else if(res.locals.product){
            var item = {
                product: res.locals.product,
                color: res.locals.product.color,
                size: req.body.size,
                quantity: req.body.quantity,
                sum: req.body.quantity*res.locals.product.price,
            }
            res.locals.item = item;
            return next();
        }
        
        
    };

};