// Generate test SMTP service account from ethereal.email
var nodemailer = require('nodemailer');
        // Only needed if you don't have a real mail account for testing

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