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
var getCartMW = require('../middleware/item/getCart');
var createCartMW = require('../middleware/item/createCart');
var countTotalMW = require('../middleware/item/countTotal');
var userModel = {};
var productModel = require('../model/product');

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        productModel: productModel
    };



    /**
     * Edit product by id
     */
    //only for get requests
    app.get('/details/:id',
        writeToConsoleMW("/details"),
        getProductMW(objectRepository),
        renderMW(objectRepository,'details')
    );
    //only for post requests
    app.post('/details/:id',
        writeToConsoleMW("/details"),
        createCartMW(objectRepository),
        getProductMW(objectRepository),
        createItemMW(objectRepository),
        addItemToCartMW(objectRepository),
        getCartMW(objectRepository),
        function(req , res){
            res.redirect("/");
        }
    )

    /**
     * Checkout pages
     */
    app.get('/checkout/delete/:id',
        writeToConsoleMW('/checkout/delete'),
        createCartMW(),
        deleteItemMW(objectRepository),
        getCartMW(),
        function(req , res){
            res.redirect("/checkout");
        }
    );

    app.get('/checkout',
        writeToConsoleMW("/checkout"),
        createCartMW(),
        getCartMW(),
        countTotalMW(),
        renderMW(objectRepository, 'checkout')
    );
    app.post('/checkout',
        writeToConsoleMW("/checkout"),
        sendOrderEmailMW(objectRepository),
        createCartMW(),
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