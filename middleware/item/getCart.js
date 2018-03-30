/**
 * copy cart to res.locals.cart
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        res.locals.cart = req.session.cart;
        if(!res.locals.cart){
            res.locals.cart = [];
        }
        return next();
    };

};