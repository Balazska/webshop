/**
 * Copy res.locals.cart to req.session.cart
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        req.session.cart = res.locals.cart;
        console.log("else checkout");
        return next();
    };

};