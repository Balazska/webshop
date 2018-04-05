/**
 * Send a token email to the user
 */
var mail= require("../../middleware/generic/mail");

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Send a token email to the user");
                        // setup email data with unicode symbols
           /* var mailOptions = {
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: 'fodorbazsa@freemail.hu', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'http://'+req.headers.host+"/resettoken/"+res.locals.token, // plain text body
                //html: '<b>Hello world?</b>' // html body
            };
            // send mail with defined transport object
            mail.transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });        
*/
        console.log('http://'+req.headers.host+"/resettoken/"+res.locals.token);
        
        return next();
    };

};