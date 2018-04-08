/**
 * Set the username belongs to the given sec token
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get username by sec token");
        var token = req.params.token;
        if(objectrepository.user.token == token){
            res.locals.parsedUser = objectrepository.user;
        }
        return next();
    };

};