function exibeMensagensNaOrdem(mensagem, callback) {
    console.log(mensagem);
    callback();
}

exibeMensagensNaOrdem('Essa é a PRIMEIRA mensagem, exiba na ordem.', function(){
    console.log('Essa é a SEGUNDA mensagem, exiba na ordem.')
});