let app = require('./app/config/server'); //importando o arquivo de configuração do servidor

let rotaHome = require('./app/routes/home')
rotaHome(app); //importando o arquivo de rotas da home e passando o objeto app

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario')
rotaAdicionarUsuario(app); //importando o arquivo de rotas de usuário e passando o objeto app

let rotaProfessores = require('./app/routes/professores')
rotaProfessores(app); //importando o arquivo de rotas de professores e passando o objeto app    

let rotaCursos = require('./app/routes/cursos')
rotaCursos(app); //importando o arquivo de rotas de cursos e passando o objeto app  

let rotaHistoria = require('./app/routes/historia')
rotaHistoria(app); //importando o arquivo de rotas de história e passando o objeto app 

app.listen(3000, function(){
    console.log("servidor rodando na porta 3000");
});