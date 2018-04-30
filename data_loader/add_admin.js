/**
 * If there is no admin user, insert one
 * username: admin
 * password: admin
 */

var User = require("../model/user");
var bcrypt = require("bcrypt");

User.find({ username:'admin' }, function(err, admin){
    if(err){
        console.log('add_admin.js: error during find admin: '+err);
    } else if(admin.length == 0){
        var hash = bcrypt.hashSync('admin', 4);

        var admin = new User({
            username : 'admin',
            email: 'admin@admin.admin',
            password: hash
        });
        admin.save(function(err){
            if(err){
                console.log('add_admin.js: error during save admin: '+err);
            } else{
                console.log('add_admin.js: admin saved');
            }
            
        });
    }
});

