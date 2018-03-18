/**
 * get product by id
 * @param {*} objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get a product");
        return next();
    };

};