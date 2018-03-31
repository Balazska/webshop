/**
 * If the cart not excists create one
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