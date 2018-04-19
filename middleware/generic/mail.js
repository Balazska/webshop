/*
this module will create the mail transporter
*/
// Require'ing module and setting default options
 
var send = require('gmail-send')({
    //var send = require('../index.js')({
      user: '',
      // user: credentials.user,                  // Your GMail account used to send emails
      pass: '',
      // pass: credentials.pass,                  // Application-specific password
      to:   '',
      // to:   credentials.user,                  // Send to yourself
                                               // you also may set array of recipients:
                                               // [ 'user1@gmail.com', 'user2@gmail.com' ]
      // from:    credentials.user,            // from: by default equals to user
      // replyTo: credentials.user,            // replyTo: by default undefined
      // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
      subject: 'test subject',
      text:    'gmail-send example 1',         // Plain text
      //html:    '<b>html text</b>'            // HTML
    });
module.exports=send;