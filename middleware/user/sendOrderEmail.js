/**
 * Send email about the order and the items 
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log(req.session.cart);
        console.log(req.body.email);
        req.session.cart =null;
        console.log("send email about the order");
        var email = "Your order: \n";
        res.locals.cart.items.forEach(item => {
            var line = item.product._id+"\t"+item.product.name+"\t"
                    +item.size+"\t"+item.color+"\t"+item.quantity+"\t"+item.sum+"\n";
            email+=line;
            
        });
        email+="\n\nTotal: "+res.locals.cart.sum;
        console.log(email);
        return next();   
    };

};
