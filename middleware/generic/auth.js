/**
 * If the user is not logged in, redirects to login
 */
var message = require("../error");

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        } else {
            req.session.sessionFlash = message.error("Please login first!");
        }
        res.redirect('/login')
    };

};