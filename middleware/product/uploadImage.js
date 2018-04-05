/**
 * Upload the image to the public/images/products file
 * @param objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("create product from req body");
        console.log(req.body);
        console.log(req.files.image);
        if(req.files && req.files.image){
            req.files.image.mv('./public/images/products/'+req.files.image.name,function(err){
                console.log(err);
                res.locals.imageUrl = '/images/products/'+req.files.image.name;
                next();
            })
        } else {
            res.locals.imageUrl = '';
            next();
        }
        
        
    };

};