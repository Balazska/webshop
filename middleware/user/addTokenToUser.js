/**
 * Add token to the user
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        objectrepository.user.token = res.locals.token;
        objectrepository.user.tokenExpires = Date.now() + 3600000;
        return next();
    };

};