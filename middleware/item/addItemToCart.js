/**
 * Add an item to the cart
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {

        if(res.locals.item){
            res.locals.item.id = req.session.cart.items.length;
            req.session.cart.items.push(res.locals.item);
        } 

        return next();
    };

};