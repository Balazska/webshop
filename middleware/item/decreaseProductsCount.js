/**
 * decrease products quantity
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        var items = res.locals.cart.items;
        var products = res.locals.products;
        var quantityChanged = [];
        for(var i=0;i<items.length; i++){
            for(var j=0; j<products.length; j++){
                if(items[i].product.quantity >= products[j].quantity){
                    items[i].quantity = products[j].quantity;
                    quantityChanged.push(items[i]);
                }
            }
        }
        res.locals.cart.items = items;
        res.locals.quantityChanged = quantityChanged;
        if(quantityChanged.length == 0){
            return next();
        } else {
            return next("route");
        }
    };

};