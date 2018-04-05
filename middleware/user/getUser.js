/**
 * Get user by username
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log(res.locals.parsedUser);
        console.log(objectrepository.user);
        if(res.locals.parsedUser.username == objectrepository.user.username && res.locals.parsedUser.email == objectrepository.user.email){
            res.locals.user = objectrepository.user;
            return next();
        }
        res.redirect("/forgottenpassword")
    };

};