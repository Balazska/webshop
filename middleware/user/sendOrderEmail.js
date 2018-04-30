/**
 * Send email about the order and the items 
 */

var transporter= require("../../middleware/generic/mail");
var message = require("../error");
module.exports = function (objectRepository) {

    return function (req, res, next) {
        req.session.cart =null;
        console.log("send email about the order");

        var email = "Your order: \nID\tName\tSize\tColor\tQuantity\tSum\n";
        res.locals.cart.items.forEach(item => {
            var line = item.product._id+"\t"+item.product.name+"\t"
                    +item.size+"\t"+item.color+"\t"+item.quantity+"\t"+item.sum+"\n";
            email+=line;
            
        });
        email+="\n\nTotal: "+res.locals.cart.sum;

        var mailOptions = {
            from: 'b@b.b', // sender address
            to: req.body.email, // list of receivers
            subject: 'Order', // Subject line
            text: email // plaintext body
           // html: '<b>Hello world 🐴</b>' // html body
        };
        
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error){
            if(error){
                return console.log("send mail error: "+error);
                next();
            }
            req.session.sessionFlash = message.success("Email sent");
            next();
        });   

        
    };

};
