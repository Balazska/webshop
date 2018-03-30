/**
 * Add an item to the cart
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        if(!req.session.cart){
            req.session.cart = {
                items: [],
                sum: 1000
            };
        } 
        return next();
    };

};