/**
 * Send email about the order and the items 
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        console.log(req.session.cart);
        console.log(req.body.email);
        req.session.cart =null;
        console.log("send email about the order");
        return next();
    };

};
