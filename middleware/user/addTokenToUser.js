/**
 * Add token to the user
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        var user = res.locals.user;
        user.token = res.locals.token;
        user.tokenExpires = Date.now() + 360000;
        console.log(Date.now());
        user.save(function(err, user){
            console.log('updated');
            console.log(user);
            res.locals.user = user;
            return next();
        })
        
    };

};