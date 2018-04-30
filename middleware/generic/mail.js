/*
this module will create the mail transporter
*/
// Require'ing module and setting default options
   
   var nodemailer = require('nodemailer');
   /*
    create transporter using gmail service
   */
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
    /*
    Override transport, write email to console
    */
    let transport = {
        name: 'minimal',
        version: '0.1.0',
        send: (mail, callback) => {
            let input = mail.message.createReadStream();
            console.log("---------EMAIL-----------");
            console.log(mail.message.content);
            console.log("---------/EMAIL-----------");
            callback(null, true);
        }
    };
    
    transporter = nodemailer.createTransport(transport);

module.exports=transporter;