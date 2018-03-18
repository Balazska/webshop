/**
 * if the user is valid, redirect to admin
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log("if the user is valid, redirect to admin")
        return next();
    };

};