/**
 * Set the username belongs to the given sec token
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get username by sec token");
        return next();
    };

};