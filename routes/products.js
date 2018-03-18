var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var getProductMW = require('../middleware/product/getProduct');
var getAllProductsMW = require('../middleware/product/getProductList');
var writeToConsoleMW = require('../middleware/log/writeToConsole');
var addItemToCartMW = require('../middleware/item/addItemToCart');
var createItemMW = require('../middleware/item/createItem');
var deleteItemMW = require('../middleware/item/deleteItemFromCart');
var sendOrderEmailMW = require('../middleware/user/sendOrderEmail');
var parseUserFromBodyMW = require('../middleware/user/parseUserFromBody');
var userModel = {};

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel
    };



    /**
     * Edit product by id
     */
    //only for get requests
    app.get('/details',
        writeToConsoleMW("/details"),
        getProductMW(objectRepository),
        renderMW(objectRepository,'details')
    );
    //only for post requests
    app.post('/details',
        writeToConsoleMW("/details"),
        getProductMW(objectRepository),
        createItemMW(objectRepository),
        addItemToCartMW(objectRepository),
        function(req , res){
            res.redirect("/");
        }
    )

    /**
     * Checkout pages
     */
    app.get('/checkout/delete',
        writeToConsoleMW('/checkout/delete'),
        deleteItemMW(objectRepository),
        function(req , res){
            res.redirect("/checkout");
        }
    );

    app.get('/checkout',
        writeToConsoleMW("/checkout"),
        renderMW(objectRepository, 'checkout')
    );
    app.post('/checkout',
        writeToConsoleMW("/checkout"),
        parseUserFromBodyMW(objectRepository),
        sendOrderEmailMW(objectRepository),
        function(req , res){
            res.redirect("/");
        }
    );

    
    /**
     * List all products
     */
    app.get('/',
        writeToConsoleMW("/"),
        getAllProductsMW(objectRepository),
        renderMW(objectRepository,'index')
    );
}