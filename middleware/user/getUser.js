/**
 * Get user by username
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get user by username");
        return next();
    };

};