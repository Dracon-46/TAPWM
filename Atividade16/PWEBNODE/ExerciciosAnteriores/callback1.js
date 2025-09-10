const prompt = require('prompt-sync')();
// Parênteses indicam que estamos executando a função prompt-sync.
// Ao fazer isso a função retorna um valor, que é uma nova função que pode serusada para criar prompts.

function saudacao(nome){
    console.log('Olá ' + nome);
}

function entradaNome(callback){
    let nome = prompt('Digite seu nome: ');
    callback(nome); //Chamando a função callback (saudação)
}
entradaNome(saudacao)
// Obter o nome do usuário de uma caixa de dialogo e, em seguida, chamar a função de retorno
// (callback) fornecida como parametro, passando o nome digitado como argumento