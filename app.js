var express = require("express");

//create app
var app = express();
//serving static sites
app.use(express.static('public'));

app.listen(3000,function(){
    console.log('server listen on port 3000');
});