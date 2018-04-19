/*
this module will create the mail transporter
*/
// Require'ing module and setting default options
   
   var nodemailer = require('nodemailer');
   
   var transporter = nodemailer.createTransport(
       {
           service: "gmail",
           //service:"smtp",
            //host: 'localhost',
            //port: 3003,
            auth: {
                user: '',
                pass: ''
            },         
            //authMethod:'PLAIN',
            secure:false,
            tls: {rejectUnauthorized: false},
            greetingTimeout: 2000
            //debug:true
        }
    );

module.exports=transporter;