/**
 * Set new password for the given user
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Set new password for the given user");
        return next();
    };

};