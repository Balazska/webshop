/**
 * Set new password for the given user
 */
var bcrypt = require("bcrypt");

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(req.body.password && req.body.password == req.body.passwordAgain){
            bcrypt.hash(req.body.password, 4).then(function(hash) {
                res.locals.user.password = hash;
                res.locals.user.save(function(err, user){
                    return next();
                });
              });   
        }
        
    };

};