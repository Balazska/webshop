/**
 * copy cart to res.locals.cart
 * if there is no cart, create one
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