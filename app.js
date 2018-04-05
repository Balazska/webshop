var express = require("express"); 
//create app
var app = express();
//include session
var session=require('express-session');
//create body parser
var bodyParser = require('body-parser');

//create a form parser with file upload feature
var fileUpload = require('express-fileupload');

//store dummy products:
app.products = require('./model/product');
app.user = require('./model/user');

//set the session options
app.use(session({
    secret: 'gwksesze8',
    cookie: {
      maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
  }));

//set up body parser
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(fileUpload());

//set up form parser
/*
app.use(formidable({
  encoding: 'utf-8',
  uploadDir: './public/images/products',
  multiples: true, // req.files to be arrays of files 
}));
*/

//include jquery and bootstrap

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap



app.set('view engine', 'ejs');
/**
 * Include all the routes
 */

//handles the admin routes - inventory, new, edit, delete
require('./routes/admin')(app);
//handles the login pages - login, logout
require('./routes/login')(app);
//handles the password reset pages - forgotten passwd, setting new
require('./routes/password')(app);
//handles the shopping - products, details, checkout
require('./routes/products')(app);

//serving static sites
app.use(express.static('public'));

app.listen(3000,function(){
    console.log('server listen on port 3000');
});