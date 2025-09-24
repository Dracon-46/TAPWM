let express = require('express');
let app = express(); //executando o express
app.set('view engine', 'ejs'); //definindo o motor de visualização
app.set('views', './app/views');


module.exports = app; //exportando o objeto app para ser usado em outros arquivos
