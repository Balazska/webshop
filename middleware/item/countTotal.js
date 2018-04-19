/**
 * If the cart not excists create one
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        if(req.session.cart){
           //count the total
           req.session.cart.sum = 0;
           req.session.cart.items.forEach(item => {
               req.session.cart.sum += item.sum;
           }); 
           console.log(req.session.cart.sum);
        } 
        return next();
    };

};