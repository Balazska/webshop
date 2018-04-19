var User = require("../model/user");
var bcrypt = require("bcrypt");

User.find({ username:'admin' }, function(err, admin){
    console.log(admin);
    console.log(!admin);
    console.log(!!admin);
    if(admin.length == 0){
        var hash = bcrypt.hashSync('admin', 4);

        var admin = new User({
            username : 'admin',
            email: 'admin@admin.admin',
            password: hash
        });
        admin.save(function(err){
            console.log('admin saved');
        });
    }
});

