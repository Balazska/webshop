/**
 *Connect to mongo db 
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gu87ao').then(function(){
    console.log("db.js: connect to mongodb");
}).catch(function(err){
    console.log("db.js: failed to connect to mongodb");
});

module.exports = mongoose;