/**
 * Set new password for the given user
 */
var bcrypt = require("bcrypt");
var message = require("../error");

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(req.body.password && req.body.password == req.body.passwordAgain){
            bcrypt.hash(req.body.password, 4).then(function(hash) {
                res.locals.user.password = hash;
                res.locals.user.save(function(err, user){
                    return next();
                });
              });   
        } else if(req.body.password != req.body.passwordAgain){
            req.session.sessionFlash = message.error("The password and the repeat don't match");
            var backURL = req.header('Referer') || '/admin';
            res.redirect(backURL);
        }
        
    };

};