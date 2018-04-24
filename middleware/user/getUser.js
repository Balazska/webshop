/**
 * Get user by username
 */
var message = require("../error");
module.exports = function (objectrepository) {

    return function (req, res, next) {
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
                req.session.sessionFlash = message.error("Wrong username or email");
                res.redirect("/forgottenpassword")
            }
        });
        
    };

};