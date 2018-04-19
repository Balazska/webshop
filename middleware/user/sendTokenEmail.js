/**
 * Send a token email to the user
 */
var mail= require("../../middleware/generic/mail");

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Send a token email to the user");
        mail({}, function(err, res){
            console.log(err+"\n"+res);
        });       

        console.log('http://'+req.headers.host+"/resettoken/"+res.locals.token);
        
        return next();
    };

};