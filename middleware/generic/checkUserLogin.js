/**
 * if the user is valid, redirect to admin
 * 
 * !!!!!!!!!!!!!USER passport.authenticate instead
 */

var passport = require("passport");
var message = require("../error");
module.exports = function (objectRepository) {

    return function (req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            console.log("authenticate");
            if (err) { 
                req.session.sessionFlash = message.error("Error during login");
                return res.redirect('/login'); 
            }
            if (!user) {
                req.session.sessionFlash = message.error("Wrong username or password");
                return res.redirect('/login'); 
            }
            req.logIn(user, function(err) {
              if (err) { 
                req.session.sessionFlash = message.error("Error during login");
                return res.redirect('/login');
              }
              return res.redirect('/admin');
            });
          })(req, res, next);
    };

};