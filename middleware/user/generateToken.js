/**
 * Generate a token for a user
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Generate a token for a user");
        return next();
    };

};