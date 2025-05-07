
function verificarMaior() {
    const a = Number(document.getElementById('n1-maior').value);
    const b = Number(document.getElementById('n2-maior').value);
    const c = Number(document.getElementById('n3-maior').value);
    const maior = Math.max(a, b, c);
    document.getElementById('res-maior').innerText = `Maior número: ${maior}`;
        document.querySelector('#secao-maior .reset').onclick = () => {
        document.getElementById('n1-maior').value = '';
        document.getElementById('n2-maior').value = '';
        document.getElementById('n3-maior').value = '';
        document.getElementById('res-maior').innerText = '';
    };
}

function ordenarNumeros() {
    const a = Number(document.getElementById('n1-ordem').value);
    const b = Number(document.getElementById('n2-ordem').value);
    const c = Number(document.getElementById('n3-ordem').value);
    const ordenados = [a, b, c].sort((x, y) => x - y);
    document.getElementById('res-ordem').innerText = `Ordem crescente: ${ordenados.join(', ')}`;

    document.querySelector('#secao-ordem .reset').onclick = () => {
        document.getElementById('n1-ordem').value = '';
        document.getElementById('n2-ordem').value = '';
        document.getElementById('n3-ordem').value = '';
        document.getElementById('res-ordem').innerText = '';
    };
}

function verificarPalindromo() {
    const texto = document.getElementById('texto-palindromo').value.toLowerCase().replace(/\s+/g, '');
    const invertido = texto.split('').reverse().join('');
    const resultado = texto === invertido ? "é um palíndromo" : "não é um palíndromo";
    document.getElementById('res-palindromo').innerText = `A frase ${resultado}.`;
    
    document.querySelector('#secao-palindromo .reset').onclick = () => {
        document.getElementById('texto-palindromo').value = '';
        document.getElementById('res-palindromo').innerText = '';
    };
}

function calcularMedia() {
    const a = Number(document.getElementById('n1-media').value);
    const b = Number(document.getElementById('n2-media').value);
    const c = Number(document.getElementById('n3-media').value);
    const media = ((a + b + c) / 3).toFixed(2);
    document.getElementById('res-media').innerText = `Média: ${media}`;
    
    document.querySelector('#secao-media .reset').onclick = () => {
        document.getElementById('n1-media').value = '';
        document.getElementById('n2-media').value = '';
        document.getElementById('n3-media').value = '';
        document.getElementById('res-media').innerText = '';
    };
}

function mostrarSecao(secao) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.getElementById(`secao-${secao}`).style.display = 'block';
    
    document.querySelectorAll('.nav-menu button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}