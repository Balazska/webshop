/**
 * Check the user data, only compares the given params
 * for example (username, email or username password)
 * If not match redirect to the given page
 * 
 * I don't use it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
module.exports = function (objectrepository, params, redirectIfError) {

    return function (req, res, next) {
        console.log("Check the user data, only compares the given params");
        return next();
    };

};