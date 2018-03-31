/**
 * create an item
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("create an item");
        if(res.locals.product){
            var item = {
                product: res.locals.product,
                color: res.locals.product.color,
                size: req.body.size,
                quantity: req.body.quantity,
                sum: req.body.quantity*res.locals.product.price,
            }
            res.locals.item = item;
        }
        
        return next();
    };

};