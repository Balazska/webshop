/**
 * Upload the image to the public/images/products file
 * @param objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("create product from req body");
        console.log(req.body);
        return next();
    };

};