var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/generic/checkUserLogin');
var renderMW = require('../middleware/generic/render');
var logoutMW = require('../middleware/generic/logout');
var writeToConsoleMW = require('../middleware/log/writeToConsole');
var userModel = {};

module.exports = function (app) {
    var objectRepository = {
        userModel: userModel
    };

    /** 
     * Login page 
     * TODO: change the checkUserLoginMW to middlewares in user directory
    */
    app.use('/login',
        writeToConsoleMW('/login'),
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    /**
     * Main page
     */
    app.get('/logout',
        writeToConsoleMW('/logout'),
        logoutMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
}