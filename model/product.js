//Product template

function createProduct(index, id){
    return {
        id: id,
        name: 'Product'+index,
        description: 'Description for product'+index,
        price: index*20 % 60 + 10,
        color: 'Red',
        type: 'dummy product',
        size: [10,20,30],
        quantity: 1,
        image: '/images/products/bottles.png'
    }
}

function deleteProduct(id){
    if(products){
        for(var i=0;i<products.length;i++){
            if(products[i].id == id){
                products.splice(i,1);
            }
        }
    }
}

function getProduct(id){
    if(products){
        for(var i=0;i<products.length;i++){
            if(products[i].id == id){
                return products[i];
            }
        }
    }
}

function push(product){
    for(var i=0;i<products.length;i++){
        if(products[i].id==product.id){
            products[i]=product;
            return ;
        }
    }

    products.push(product);

}

var products = function(){
    var products=[];
    for(var i=0;i<10;i++){
        products.push(createProduct(i, i))
    }

    return products;
}();

module.exports ={
    products: products,
    createProduct: createProduct,
    deleteProduct: deleteProduct,
    getProduct: getProduct,
    push: push
} 