/**
 * get the current products added to cart early
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        var ids = res.locals.ids;
        var Product = objectRepository.productModel;
        Product.find({
            '_id': { $in: ids}
        }, function(err, products){
            console.log(products);
            if(err){
                console.log("err");
                res.redirect("/");
            } else {
                res.locals.products = products;
                next();
            }
        });
    }
}