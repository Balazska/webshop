var express = require("express"); 
//create app
var app = express();

//include jquery and bootstrap

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


//serving static sites
app.use(express.static('public'));

app.listen(3000,function(){
    console.log('server listen on port 3000');
});