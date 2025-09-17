let express = require('express');
let app = express(); //executando o express
let texto = require('./modulo1'); //importando o módulo1.js

app.set('view engine', 'ejs'); //definindo o motor de visualização

app.get('/', function(req,res){
    res.render("home/index"); //renderizando a view index.ejs

});

app.get('formulario_adicionar_usuario', function(req,res){
    res.render("admin/adicionar_usuario"); //renderizando a view adicionar_usuario.ejs
});

app.get('/historia', function(req,res){
    res.render("informacao/historia"); //renderizando a view historia.ejs
});
app.get('/cursos', function(req,res){
    res.render("informacao/cursos"); //renderizando a view cursos.ejs
});
app.get('/professores', function(req,res){
    res.render("informacao/professores"); //renderizando a view professores.ejs
}); 
app.listen(3000, function(){
    console.log(texto);
});