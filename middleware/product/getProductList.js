/**
 * get all products
 * @param {*} objectrepository 
 */

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
        res.locals.products = objectrepository.products.products;
        console.log("get all products");
        return next();
    };

};