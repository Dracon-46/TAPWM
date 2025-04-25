function verificarTriangulo() {
    let a = parseFloat(document.getElementById('ladoA').value);
    let b = parseFloat(document.getElementById('ladoB').value);
    let c = parseFloat(document.getElementById('ladoC').value);
    let resultado = document.getElementById('resultado');

    // Verifica se os valores são números
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.textContent = "Por favor, preencha todos os campos com números.";
        resultado.style.color = "red";
        return;
    }

    // Verifica se os valores formam um triângulo
    if (Math.abs(b - c) < a && a < b + c &&
        Math.abs(a - c) < b && b < a + c &&
        Math.abs(a - b) < c && c < a + b) {
        
        // Verifica o tipo de triângulo
        if (a === b && b === c) {
            resultado.textContent = "Triângulo Equilátero";
            resultado.style.color = "green";
        } else if (a === b || a === c || b === c) {
            resultado.textContent = "Triângulo Isósceles";
            resultado.style.color = "orange";
        } else {
            resultado.textContent = "Triângulo Escaleno";
            resultado.style.color = "blue";
        }
    } else {
        resultado.textContent = "Os valores não formam um triângulo.";
        resultado.style.color = "red";
    }
}
// Gera triângulos animados aleatórios no fundo
function criarTriangulos(qtd = 30) {
    const bg = document.querySelector('.background-animation');

    for (let i = 0; i < qtd; i++) {
        const tri = document.createElement('div');
        tri.classList.add('triangle');

        // Gera posições e tamanhos aleatórios
        const size = Math.random() * 20 + 10; // 10 a 30px
        const left = Math.random() * 100; // 0% a 100%
        const delay = Math.random() * 5; // entre 0 e 5s
        const duration = Math.random() * 10 + 5; // entre 5s e 15s

        tri.style.borderLeftWidth = `${size}px`;
        tri.style.borderRightWidth = `${size}px`;
        tri.style.borderBottomWidth = `${size * 2}px`;
        tri.style.left = `${left}vw`;
        tri.style.animationDuration = `${duration}s`;
        tri.style.animationDelay = `${delay}s`;

        bg.appendChild(tri);
    }
}

criarTriangulos();
