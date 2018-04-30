/**
 * Check the uploaded file extension 
 * if png jpg or jpeg , store it in res.locals.imageFile
 * @param objectrepository 
 */
var message = require("../error");

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("check image extension");
        var error = false;
        if(req.files && req.files.image){
            var image = req.files.image;
            if(image.name.indexOf("/")>-1 || image.name.indexOf("\\")>-1 ){
                //todo error
                error = true;
            }
            var parts = image.name.split(".");
            if(parts.length != 2) {
                //todo error
                error = true;
            } else {
                if(parts[1].indexOf("png") != -1 || parts[1].indexOf("jpg") != -1 || parts[1].indexOf("jpeg") != -1 ){
                    //TODO ok
                    res.locals.imageFile = image;
                    return next();
                } else {
                    //TODO error
                    error = true;
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