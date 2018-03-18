/**
 * Parse user from the req body
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Parse user from the req body");
        return next();
    };

};