/**
 * Writes the given string to the console
 */
module.exports = function (log) {

    return function (req, res, next) {
        console.log(log);
        return next();
    };

};