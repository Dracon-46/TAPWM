function mostrarAba(id) {
    let abas = document.querySelectorAll('.aba');
    abas.forEach(aba => aba.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
}

function exercicio1() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let num3 = parseFloat(document.getElementById("numero3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultado1").textContent = "Digite 3 números válidos.";
        return;
    }

    function calcular(a, b, c) {
        return `A soma dos três números é: ${a + b + c}, o quadrado do primeiro é: ${a ** 2} e o quadrado do segundo é: ${b ** 2}`;
    }

    let resultado = calcular.apply(null, [num1, num2, num3]);
    document.getElementById("resultado1").textContent = resultado;
}

function permutacoes(letras) {
    if (letras.length <= 1) return [letras];
    
    let resultados = [];
    for (let i = 0; i < letras.length; i++) {
        let atual = letras[i];
        let restantes = letras.slice(0, i).concat(letras.slice(i + 1));
        let permutacoesRestantes = permutacoes(restantes);
        
        for (let perm of permutacoesRestantes) {
            resultados.push([atual].concat(perm));
        }
    }
    return resultados;
}

function exercicio2() {
    let input = document.getElementById("letrasInput").value.trim().toLowerCase();
    
    if (input.length !== 5 || !/^[a-z]+$/.test(input)) {
        document.getElementById("resultado2").textContent = "Digite exatamente 5 letras válidas (ex: abcde)";
        return;
    }

    let letras = input.split('');
    let todasPermutacoes = permutacoes(letras);
    let palavrasUnicas = [...new Set(todasPermutacoes.map(p => p.join('')))];
    
    let resultado = palavrasUnicas.slice(0, 10).join(", ");
    let total = palavrasUnicas.length;
    
    document.getElementById("resultado2").textContent = 
        `Mostrando 10 de ${total} palavras possíveis: ${resultado}`;
}