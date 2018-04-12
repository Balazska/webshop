/**
 * Get user by username
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log(res.locals.parsedUser);
        console.log(objectrepository.user);
        objectrepository.userModel.findOne({
            username : res.locals.parsedUser.username,
            email: res.locals.parsedUser.email
        },function(err, user){
            console.log(user);
            if(!!user){
                res.locals.user = user;
                return next();
            } else {
                res.redirect("/forgottenpassword")
            }
        });
        
    };

};