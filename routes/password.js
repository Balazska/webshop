var getUserMW = require('../middleware/user/getUser');
var getUserNameByTokenMW = require('../middleware/user/getUserNameByToken');
var verifyUserMW = require('../middleware/user/verifyUser');
var setNewPasswordMW = require('../middleware/user/setNewPassword');
var parseUserFromBodyMW= require('../middleware/user/parseUserFromBody');
var generateTokenMW = require('../middleware/user/generateToken');
var sendTokenEmailMW = require('../middleware/user/sendTokenEmail');
var renderMW = require('../middleware/generic/render');
var writeToConsoleMW = require('../middleware/log/writeToConsole');
var userModel = {};

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel
    };

    /** 
     * forgotten passwd page 
    */
    app.get('/forgottenpassword',
        writeToConsoleMW('/forgottenpassword'),
        renderMW(objectRepository, 'forgetpassword')
    );
    app.post('/forgottenpassword',
        writeToConsoleMW('/forgottenpassword'),
        parseUserFromBodyMW(objectRepository),
        getUserMW(objectRepository),
        verifyUserMW(objectRepository,['username','email'],'forgottenpassword'),
        generateTokenMW(objectRepository),
        sendTokenEmailMW(objectRepository),
        function(req, res, next){
            res.redirect('/login')
        }
    );
    /**
     * resettoken page
     */
    app.get('/resettoken',
        writeToConsoleMW('/resettoken'),
        renderMW(objectRepository, 'resettoken')
    );
    app.post('/resettoken',
        writeToConsoleMW('/resettoken'),
        getUserNameByTokenMW(),
        getUserMW(),
        setNewPasswordMW(),
        function(req, res, next){
            res.redirect('/login')
        }
    );
}