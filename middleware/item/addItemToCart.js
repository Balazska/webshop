/**
 * Add an item to the cart
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("add item to cart");
        return next();
    };

};