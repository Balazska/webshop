var Product = require("../model/product");

var product = new Product({
    name : 'Test',
    description : 'Description of test',
    price : 100,
    color : ['red', 'yellow', 'blue'],
    size: [10,20,30],
    quantity: 20,
    image: '/images/products/book.jpeg'
});

product.save(function(error){
    console.log(error);
});