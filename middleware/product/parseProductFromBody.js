/**
 * Create a product from the req body
 * @param objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("create product from req body");
        console.log(req.body);
        console.log(req.files);
        return next();
    };

};