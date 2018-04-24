/**
 * Parse user from the req body
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(req.body.username && req.body.email){
            res.locals.parsedUser = {
                username: req.body.username,
                email: req.body.email
            };
            return next();
        } 
        res.redirect("/forgottenpassword");
    };

};