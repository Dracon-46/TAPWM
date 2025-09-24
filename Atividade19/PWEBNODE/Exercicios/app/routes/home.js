module.exports = function(app){
    app.get('/', function(req,res){
        res.render("home/index"); //renderizando a view index.ejs

    });
}