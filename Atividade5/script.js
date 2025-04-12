let placarJogador = 0;
let placarComputador = 0;

function jogar(jogadaJogador) {
    const opcoes = ['✊', '✋', '✌️'];
    const jogadaComputador = opcoes[Math.floor(Math.random() * 3)];
    
    const elementoResultado = document.getElementById('resultado');
    let resultado, classeCss;
    
    if (jogadaJogador === jogadaComputador) {
        resultado = "Empate!";
        classeCss = "empate";
    } else if (
        (jogadaJogador === '✊' && jogadaComputador === '✌️') ||
        (jogadaJogador === '✋' && jogadaComputador === '✊') ||
        (jogadaJogador === '✌️' && jogadaComputador === '✋')
    ) {
        resultado = "Você ganhou!";
        classeCss = "vitoria";
        placarJogador++;
    } else {
        resultado = "Computador ganhou!";
        classeCss = "derrota";
        placarComputador++;
    }
    
    elementoResultado.innerHTML = `
        <strong>Sua jogada:</strong> ${jogadaJogador}<br>
        <strong>Computador:</strong> ${jogadaComputador}<br>
        <span class="${classeCss}">${resultado}</span>
    `;
    
    document.getElementById('placar').textContent = `Placar: ${placarJogador} - ${placarComputador}`;
}
