var Category = require("../model/category");

var categories = [];
var casual = new Category({
    name:'Casual',
    description:'For casual usage',
});
var wedding = new Category({
    name:'Wedding',
    description:'For wedding'
});

Category.find(function(err, categories){
    if(categories.length == 0){
        categories.push(casual);
        categories.push(wedding);
        Category.create(categories, function(err){
            console.log("success");
            
        });
    }
});
