/** 
 * insert a dummy product to the mongo db,if there aren't any products
*/

var Product = require("../model/product");

var products0 = [];
for(var i=0;i<10;i++){
    var product = new Product({
        name : 'Test Jewelry',
        description : 'Description of test jewelry',
        price : 100,
        color : ['Green'],
        size: [10,20,30],
        quantity: [20,10,10],
        image: '/images/products/pig.png'
    });
    product.name += i;
    products0.push(product);
}

Product.find(function(err,products){
    if(err){
        console.log("data_loader/products: error during find products: "+err);
    } else {
        if(products.length == 0){
            Product.create(products0,function(err){
                if(err){
                    console.log("data_loader/products: error during save test product: "+err);
                } else {
                    console.log("data_loader/products: test product saved.");
                }
            });
        }
    }
});
