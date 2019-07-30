module.exports = function(appplication) {
    appplication.get('/', function(req, res){
        res.render("home/index");
    });
};