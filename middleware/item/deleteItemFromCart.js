/**
 * Delete an item from the cart
 * 
 * Required: request.session.cart 
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("delete item from cart");
        var id = req.params.id;
        var cart = req.session.cart;
        for(var i=0;i<cart.items.length; i++){
            if(cart.items[i].id == id){
                cart.items.splice(i,1);
            }
        }
        req.session.cart=cart;
        return next();
    };

};