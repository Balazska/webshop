/**
 * get all categories
 * @param {*} objectrepository 
 */

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
        var Category = objectrepository.categoryModel;

        Category.find(function(err,categories){
            res.locals.categories= categories;
            console.log("get all categories");
            return next();
        });
        
    };

};