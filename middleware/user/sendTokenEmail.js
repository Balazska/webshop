/**
 * Send a token email to the user
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Send a token email to the user");
        return next();
    };

};