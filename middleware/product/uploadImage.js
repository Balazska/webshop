/**
 * Upload the image to the public/images/products file
 * @param objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("upload image");
        if(res.locals.imageFile){
            req.files.image.mv('./public/images/products/'+req.files.image.name,function(err){
                if(err){
                    console.log("uploadImage.js: error during save image: "+ err);
                    var backURL = req.header('Referer') || '/admin';
                    res.redirect(backURL);
                } else {
                    res.locals.imageUrl = '/images/products/'+req.files.image.name;
                    next();
                }
            });
        } else {
            res.locals.imageUrl = '';
            next();
        }
        
        
    };

};