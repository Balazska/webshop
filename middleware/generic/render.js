/**
 * Renders a page using the engine
 */
module.exports = function(objectrepository, viewName){

    return function(req, res){
        console.log("render a page");
        res.locals.error = req.session.sessionFlash;
        delete req.session.sessionFlash;
        res.render(viewName, res.locals);
    }
}