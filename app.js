var express = require("express"); 
//create app
var app = express();

//include jquery and bootstrap

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


//serving static sites
app.use(express.static('public'));

app.set('view engine', 'ejs');
/**
 * Include all the routes
 */

//handles the admin routes - inventory, new, edit, delete
require('./routes/admin')(app);
//handles the login pages - login, logout
require('./routes/login')(app);
//handles the shopping - products, details, checkout
//require('./routes/products')(app);
//handles the password reset pages - forgotten passwd, setting new
//require('./routes/password')(app);

app.listen(3000,function(){
    console.log('server listen on port 3000');
});