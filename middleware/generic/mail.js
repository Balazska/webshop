/*
this module will create the mail transporter
*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: '',
    auth: {
        user: '',
        pass: ''
                }
    });

module.exports={
    transporter:transporter
}