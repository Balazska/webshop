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
        var index=req.body.size;
        var product = res.locals.product;
        if(!req.body.size || !req.body.quantity){
            res.status(400).end('Bad Request, form fields are missing');
        } else if(index >  product.size.length){
            req.session.sessionFlash = message.error("Wrong size value"); 
            res.redirect(req.get("referer"));
        } else if(product.quantity[index] < req.body.quantity){
            req.session.sessionFlash = message.error("We don't have so many product"); 
            res.redirect(req.get("referer"));
        } else if(req.body.quantity < 1 ){
                req.session.sessionFlash = message.error("Quantity must be greater than zero."); 
                res.redirect(req.get("referer"));
        } else if(res.locals.product){
            var item = {
                product: res.locals.product,
                color: res.locals.product.color,
                size: product.size[index],
                quantity: req.body.quantity,
                sum: req.body.quantity*res.locals.product.price,
                index: index
            }
            res.locals.item = item;
            return next();
        }
        
        
    };

};