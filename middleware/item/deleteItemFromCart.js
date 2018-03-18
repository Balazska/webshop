/**
 * Delete an item from the cart
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("delete item from cart");
        return next();
    };

};