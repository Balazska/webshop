var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var getProductMW = require('../middleware/product/getProduct');
var deleteProductMW = require('../middleware/product/deleteProduct');
var updateProductMW = require('../middleware/product/updateProduct');
var getAllProductsMW = require('../middleware/product/getProductList');
var parseProductFromBodyMW = require('../middleware/product/parseProductFromBody');
var userModel = {};

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel
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
    app.get('/admin/delete',
        getProductMW(objectRepository),
        deleteProductMW(objectRepository),
        function(req , res){
            res.redirect("/admin");
        }
    );

    /**
     * Edit product by id
     */
    //only for get requests
    app.get('/admin/edit',
        getProductMW(objectRepository),
        renderMW(objectRepository,'admin-edit')
    );
    //only for post requests
    app.post('/admin/edit',
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
        renderMW(objectRepository, 'admin-new')
    );
    app.post('/admin/new',
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
        getAllProductsMW(objectRepository),
        renderMW(objectRepository, 'admin')
    );
}