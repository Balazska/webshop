var Product = require("../model/product");

var product = new Product({
    name : 'Test Jewelry',
    description : 'Description of test jewelry',
    price : 100,
    color : ['Green'],
    size: [10,20,30],
    quantity: 20,
    image: ''
});

product.save(function(error){
    console.log(error);
});