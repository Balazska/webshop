//Start mongo
//"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"

//LOGIN: user: admin , password: admin, email: admin@admin.admin

var express = require("express"); 
//create app
var app = express();
//include session
var session=require('express-session');
//create body parser
var bodyParser = require('body-parser');
//flash for display messages
var flash = require('express-flash');

//create a form parser with file upload feature
var fileUpload = require('express-fileupload');
//these are for the authentication
var passport = require('passport')
var bcrypt = require('bcrypt')
var LocalStrategy = require('passport-local').Strategy

//email service
//var nodemailer = require('nodemailer');


//store categories
require('./data_loader/load_categories');

//store dummy products:
require('./data_loader/products');
//store dummy user

//create a password
require('./data_loader/add_admin');
var User = require("./model/user");
//set up passport local strategy
passport.use(new LocalStrategy(
  (username, password, done) => {
    console.log(username + ' ' + password);
      // find the user
      User.findOne({ username : username}, function(err, admin){
          
            if (!admin) {
              return done(null, false)
            }
      
            // Always use hashed passwords and fixed time comparison
            bcrypt.compare(password, admin.password, (err, isValid) => {
              console.log(isValid);
              if (err) {
                return done(err)
              }
              if (!isValid) {
                return done(null, false)
              }
              return done(null, admin)
            })
      })
     })
 )

passport.serializeUser(function (user, done) {
  console.log(user);
  done(null, user);
})

passport.deserializeUser(function (user, done) {
  done(null, user);
})

//set the session options
app.use(session({
    secret: 'gwksesze8',
    cookie: {
      maxAge: 3600000
    },
    resave: true,
    saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
  
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
app.use('/js', express.static(__dirname + '/node_modules/jquery-validation/dist')); // redirect JS jQuery
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