let eventos = require('events'); // Atribuição da classe EventEmitter a uma variavel
let EmissorEventos = eventos.EventEmitter; // Variavel faz uma referencia à classe EventEmmiter
let ee = new EmissorEventos();
// Ou criando direto sem a variavel intermediaria 
// É registrada um ouvite (listener) para o evento 'dados'.
// Quando esse evento acontecer executar a função passada como argumento
ee.on('dados', function(fecha){
    console.log(fecha);
});

// Emissão do eventos somente uma vez
ee.emit('dados', ' Primeira vez ' + Date.now());

// emissão do evento a cada 500 milisegundos
setInterval(function(){
    ee.emit('dados', Date.now());
}, 100);