/**
 * create an item
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("create an item");
        return next();
    };

};