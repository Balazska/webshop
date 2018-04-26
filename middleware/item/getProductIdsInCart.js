/**
 * 
 * collect product ids from cart
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        var products = res.locals.products;
        var cart = res.locals.cart;
        var ids = [];
        cart.items.forEach(item => {
            ids.push(item.product._id);
        });
        res.locals.ids = ids;
        console.log(ids);

        return next();
    };

};