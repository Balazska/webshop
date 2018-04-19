/**
 * Send a token email to the user
 */
var transporter= require("../../middleware/generic/mail");

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Send a token email to the user");
        var mailOptions = {
            from: 'b@b.b', // sender address
            to: 'a@a.a', // list of receivers
            subject: 'Security token', // Subject line
            text: 'http://'+req.headers.host+"/resettoken/"+res.locals.token, // plaintext body
           // html: '<b>Hello world 🐴</b>' // html body
        };
        
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            console.log(info);
            if(error){
                return console.log("send mail error: "+error);

                next();
            }
            console.log('Message sent: ' + info.response);
            console.log("Security token url:"+'http://'+req.headers.host+"/resettoken/"+res.locals.token);
            next();
        });      
        
        
    };

};