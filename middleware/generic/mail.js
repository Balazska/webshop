/*
this module will create the mail transporter
*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
         user: 'Administrator', // generated ethereal user
         pass: 'GenkiWado8' // generated ethereal password
    }
});

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });

module.exports={
    transporter:transporter
}