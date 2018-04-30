/**
 * get product by id
 * @param {*} objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get a product");
        var id=req.params.id;
        var Product = objectrepository.productModel;

        Product.findOne({
            _id:id
        }).populate('type').exec(function(err, product){
            console.log(product);
            if(err){
                res.status(500).send("server db error: "+err);
            } else {
                if(product == null){
                    res.locals.product = new Product({});
                } else {
                    res.locals.product = product;
                }
                return next();
            }
            
        });

    };

};