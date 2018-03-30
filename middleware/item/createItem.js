/**
 * create an item
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("create an item");
        if(res.locals.product){
            var item = {
                product: res.locals.product,
                color: 'Red',
                size: 10,
                quantity: 1,
                sum: 1*res.locals.price,
            }
            res.locals.item = item;
        }
        
        return next();
    };

};