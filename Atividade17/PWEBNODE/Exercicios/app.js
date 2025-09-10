let express = require('express');
let app = express(); //executando o express
app.get('/', function(req,res){
    res.send("<html><body>Site da Fatec Sorocaba</body></html>");
});
app.get('/historia', function(req,res){
    res.send("<html><body>Historia da Fatec Sorocaba</body></html>");
});
app.get('/cursos', function(req,res){
    res.send("<html><body>Cursos</body></html>");
});
app.get('/professores', function(req,res){
    res.send("<html><body>Professores</body></html>");
}); 
app.listen(3000), function(){
    console.log("Servidor com express foi carregado");
}