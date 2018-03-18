/**
 * Logout the user 
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("user logged out");
        return next();
    };

};