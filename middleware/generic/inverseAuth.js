/**
 * If the user is logged in, redirects to admin
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next()
        }
        res.redirect('/admin')
    };

};