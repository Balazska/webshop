/**
 * Set the username belongs to the given sec token
 * if the token is expired we redirect to the login page
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("get username by sec token");
        var token = req.params.token;
        objectrepository.userModel.findOne({token : token}, function(err, user){
            if(user.tokenExpires > Date.now()){
                res.locals.parsedUser = user;
                return next();
            } else{
                res.redirect('/login');
            }
        });
    };

};