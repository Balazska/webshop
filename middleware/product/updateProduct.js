/**
 * insert or update a product
 * @param {*} objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("update a product");
        return next();
    };

};