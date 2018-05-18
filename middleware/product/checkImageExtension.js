/**
 * Check the uploaded file extension 
 * if png jpg or jpeg , store it in res.locals.imageFile
 * @param objectrepository 
 */
var message = require("../error");

module.exports = function (objectrepository) {

    return function (req, res, next) {;
        var error = false;
        if(req.files && req.files.image){
            var image = req.files.image;
            if(image.name.indexOf("/")>-1 || image.name.indexOf("\\")>-1 ){
                error = true;
            } else {
                var parts = image.name.split(".");
                if(parts.length != 2) {
                    error = true;
                } else {
                    if(parts[1].indexOf("png") != -1 || parts[1].indexOf("jpg") != -1 || parts[1].indexOf("jpeg") != -1 || 
                    parts[1].indexOf("PNG") != -1 || parts[1].indexOf("JPG") != -1 || parts[1].indexOf("JPEG") != -1){
                        res.locals.imageFile = image;
                        return next();
                    } else {
                        error = true;
                    }
                }
            }
        }

        if(error){
            req.session.sessionFlash = message.error("Wrong image type");
            var backURL = req.header('Referer') || '/admin';
            res.redirect(backURL);
        }
        return next();
        
    };

};