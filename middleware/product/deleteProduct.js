/**
 * Delete product from db
 * @param objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("delete a product");
        var id = req.params.id;
        var Product =objectrepository.productModel;
        Product.remove({_id:id}, function(err){
            if(err){
                console.log(err);
                res.status(500).end(err);
            } else {
                return next();
            }
        })
    };

};