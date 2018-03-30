/**
 * Renders a page using the engine
 */
module.exports = function(objectrepository, viewName){

    return function(req, res){
        console.log("render a page");
        res.render(viewName, res.locals);
    }
}