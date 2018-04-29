/**
 * Check if we have as many as the user wants to buy 
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        var items = res.locals.cart.items;
        var products = res.locals.products;
        var quantityChanged = [];
        for(var i=0;i<items.length; i++){
            for(var j=0; j<products.length; j++){
                var index = items[i].index;
                if(items[i].product._id == products[j]._id){
                    if( items[i].quantity > products[j].quantity[index]){
                        items[i].quantity = products[j].quantity[index];
                        items[i].sum = items[i].quantity * items[i].product.price;
                        quantityChanged.push(items[i]);
                    } else {
                        products[j].quantity.set(index,products[j].quantity[index]- items[i].quantity); 
                        console.log(products[j].quantity);
                    }

                }
            }
        }
        res.locals.products = products;
        res.locals.cart.items = items;
        res.locals.quantityChanged = quantityChanged;
        if(quantityChanged.length == 0){
            return next();
        } else {
            return next("route");
        }
    };

};