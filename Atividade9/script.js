document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');
    
    calcularBtn.addEventListener('click', calcularIMC);
    
    function calcularIMC() {
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);
        
        // Validação dos dados
        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            alert('Por favor, insira valores válidos para altura e peso.');
            return;
        }
        
        // Calcular IMC
        const imc = peso / (altura * altura);
        const classificacao = classificarIMC(imc);
        
        // Exibir resultado
        resultadoDiv.innerHTML = `
            <h3>Resultado</h3>
            <p><strong>Seu IMC:</strong> ${imc.toFixed(2)}</p>
            <p><strong>Classificação:</strong> ${classificacao.descricao}</p>
            <p><strong>Obesidade (Grau):</strong> ${classificacao.grau}</p>
        `;
        
        // Aplicar classe de estilo conforme a classificação
        resultadoDiv.className = 'resultado ' + classificacao.classe;
        resultadoDiv.style.display = 'block';
    }
    
    function classificarIMC(imc) {
        if (imc < 18.5) {
            return {
                descricao: 'MAGREZA',
                grau: '0',
                classe: 'magreza'
            };
        } else if (imc >= 18.5 && imc <= 24.9) {
            return {
                descricao: 'NORMAL',
                grau: '0',
                classe: 'normal'
            };
        } else if (imc >= 25.0 && imc <= 29.9) {
            return {
                descricao: 'SOBREPESO',
                grau: 'I',
                classe: 'sobrepeso'
            };
        } else if (imc >= 30.0 && imc <= 39.9) {
            return {
                descricao: 'OBESIDADE',
                grau: 'II',
                classe: 'obesidade'
            };
        } else {
            return {
                descricao: 'OBESIDADE GRAVE',
                grau: 'III',
                classe: 'obesidade-grave'
            };
        }
    }
});