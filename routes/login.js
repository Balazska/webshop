var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/generic/checkUserLogin');
var renderMW = require('../middleware/generic/render');
var logoutMW = require('../middleware/generic/logout');
var writeToConsoleMW = require('../middleware/log/writeToConsole');
var userModel = {};
var passport = require('passport');

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel,
        user: app.user
    };

    /** 
     * Login page 
     * TODO: change the checkUserLoginMW to middlewares in user directory
    */
    app.get('/login',
        writeToConsoleMW('/login'),
        inverseAuthMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
    app.post('/login',
        writeToConsoleMW('/login'),
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository)
    );

    /**
     * Main page
     */
    app.get('/logout',
        writeToConsoleMW('/logout'),
        logoutMW(objectRepository)
    );
}