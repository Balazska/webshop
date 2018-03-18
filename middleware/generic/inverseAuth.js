/**
 * If the user is logged in, redirects to admin
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("If the user is logged in, redirects to admin");
        return next();
    };

};