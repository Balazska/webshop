/**
 * get all products
 * @param {*} objectrepository 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get all products");
        return next();
    };

};