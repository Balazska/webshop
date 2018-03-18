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
     * Login page 
    */
    app.use('/login',
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    /**
     * Main page
     */
    app.get('/logout',
        logoutMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
}