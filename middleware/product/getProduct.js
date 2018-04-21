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
                //error!!!
                //res.locals.product = new Product();
                //return next();
                res.status(500).send("server delete error: "+err);
            } else {
                if(product == null){
                    res.locals.product = new Product({});
                    console.log("res product:----------------");
                    console.log(res.locals.product);
                } else {
                    res.locals.product = product;
                }
                return next();
            }
            
        });

    };

};