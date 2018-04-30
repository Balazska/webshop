/**
 * Generate a token for a user
 */
var crypto = require('crypto');
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Generate a token for a user");
        crypto.randomBytes(20, function(err, buf) {
            var token = buf.toString('hex');
            res.locals.token = token;
            return next();
          });
        
    };

};