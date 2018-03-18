var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/generic/checkUserLogin');
var renderMW = require('../middleware/generic/render');
var logoutMW = require('../middleware/generic/logout');
var userModel = {};

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel
    };

    /** 
     * forgotten passwd page 
    */
    app.get('/forgottenpassword',
        renderMW(objectRepository, 'forgetpassword')
    );
    app.post('/forgottenpassword',
    );
    /**
     * resettokenpage
     */
    app.get('/resettoken',
        renderMW(objectRepository, 'resettoken')
    );
    app.post('/resettoken',
    );
}