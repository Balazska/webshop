var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var getProductMW = require('../middleware/product/getProduct');
var deleteProductMW = require('../middleware/product/deleteProduct');
var updateProductMW = require('../middleware/product/updateProduct');
var getAllProductsMW = require('../middleware/product/getProductList');
var parseProductFromBodyMW = require('../middleware/product/parseProductFromBody');
var writeToConsoleMW = require('../middleware/log/writeToConsole');
var uploadImageMW = require('../middleware/product/uploadImage');
var checkImageExtensionMW = require("../middleware/product/checkImageExtension");
var getCategoriesMW = require('../middleware/product/getCategory');
var userModel = require('../model/user');
var productModel = require('../model/product');
var categoryModel = require('../model/category');
var passport = require("passport");

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        productModel: productModel,
        categoryModel: categoryModel
    };

    app.use('/admin',
        authMW(objectRepository),
        function(req , res , next){
            next();
        }
    );
    /**
     * Delete product by id
     */
    app.get('/admin/delete/:id',
        writeToConsoleMW("/admin/delete"),
        deleteProductMW(objectRepository),
        function(req , res){
            res.redirect("/admin");
        }
    );

    /**
     * Edit product by id
     */
    //only for get requests
    app.get('/admin/edit/:id',
        writeToConsoleMW("/admin/edit"),
        getCategoriesMW(objectRepository),
        getProductMW(objectRepository),
        renderMW(objectRepository,'admin-edit')
    );
    //only for post requests
    app.post('/admin/edit/:id',
        writeToConsoleMW("/admin/edit"),
        checkImageExtensionMW(objectRepository),
        uploadImageMW(objectRepository),
        getProductMW(objectRepository),
        parseProductFromBodyMW(objectRepository),
        updateProductMW(objectRepository),
        function(req , res){
            res.redirect("/admin");
        }
    )

    /**
     * Add new product
     */
    app.get('/admin/new',
        writeToConsoleMW("/admin/new"),
        getCategoriesMW(objectRepository),
        getProductMW(objectRepository),
        renderMW(objectRepository, 'admin-edit')
    );
    app.post('/admin/new',
        writeToConsoleMW("/admin/new"),
        checkImageExtensionMW(objectRepository),
        uploadImageMW(objectRepository),
        getProductMW(objectRepository),
        parseProductFromBodyMW(objectRepository),
        updateProductMW(objectRepository),
        function(req , res){
            res.redirect("/admin");
        }
    );

    
    /** 
     * Admin inventory page
    */
    app.use('/admin',
        writeToConsoleMW("/admin"),
        getAllProductsMW(objectRepository),
        renderMW(objectRepository, 'admin')
    );
}