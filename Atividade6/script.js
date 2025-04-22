document.addEventListener('DOMContentLoaded', function() {
    const formularioPesquisa = document.getElementById('surveyForm');
    const divResultados = document.getElementById('results');
    const botaoReiniciar = document.getElementById('resetBtn');
    const spanTotalRespostas = document.getElementById('totalResponses');
    
    // Inicializar gráficos
    const contextoOpiniao = document.getElementById('opinionChart').getContext('2d');
    const contextoGenero = document.getElementById('genderChart').getContext('2d');
    
    let graficoOpiniao = new Chart(contextoOpiniao, {
        type: 'pie',
        data: {
            labels: ['Ótimo', 'Bom', 'Regular', 'Péssimo'],
            datasets: [{
                data: [0, 0, 0, 0],
                backgroundColor: [
                    '#4cc9f0',
                    '#4361ee',
                    '#f8961e',
                    '#f72585'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(contexto) {
                            const rotulo = contexto.label || '';
                            const valor = contexto.raw || 0;
                            const total = contexto.dataset.data.reduce((a, b) => a + b, 0);
                            const porcentagem = Math.round((valor / total) * 100);
                            return `${rotulo}: ${valor} (${porcentagem}%)`;
                        }
                    }
                }
            }
        }
    });
    
    let graficoGenero = new Chart(contextoGenero, {
        type: 'doughnut',
        data: {
            labels: ['Masculino', 'Feminino', 'Outros'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: [
                    '#3a86ff',
                    '#ff006e',
                    '#8338ec'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
    
    let respostas = [];
    
    // Carregar respostas salvas no localStorage
    if (localStorage.getItem('respostasPesquisaFilme')) {
        respostas = JSON.parse(localStorage.getItem('respostasPesquisaFilme'));
        atualizarResultados();
    }
    
    formularioPesquisa.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const idade = parseInt(document.getElementById('age').value);
        const genero = document.querySelector('input[name="gender"]:checked').value;
        const opiniao = parseInt(document.querySelector('input[name="opinion"]:checked').value);
        
        // Adicionar nova resposta ao array
        respostas.push({ idade, genero, opiniao });
        
        // Salvar no localStorage
        localStorage.setItem('respostasPesquisaFilme', JSON.stringify(respostas));
        
        // Atualizar resultados
        atualizarResultados();
        
        // Limpar formulário
        formularioPesquisa.reset();
    });
    
    botaoReiniciar.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja reiniciar a pesquisa? Todos os dados serão perdidos.')) {
            respostas = [];
            localStorage.removeItem('respostasPesquisaFilme');
            atualizarResultados();
        }
    });
    
    function atualizarResultados() {
        spanTotalRespostas.textContent = respostas.length;
        
        if (respostas.length === 0) {
            divResultados.innerHTML = `
                <div class="empty-state">
                    <img src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" alt="Pesquisa vazia" width="100">
                    <p>Adicione respostas para ver os resultados</p>
                </div>
            `;
            
            // Resetar gráficos
            graficoOpiniao.data.datasets[0].data = [0, 0, 0, 0];
            graficoGenero.data.datasets[0].data = [0, 0, 0];
            graficoOpiniao.update();
            graficoGenero.update();
            
            return;
        }
        
        // Calcular estatísticas
        const totalRespostas = respostas.length;
        
        // Média de idade
        const mediaIdade = respostas.reduce((soma, resposta) => soma + resposta.idade, 0) / totalRespostas;
        
        // Idade mais velha e mais nova
        const idades = respostas.map(resposta => resposta.idade);
        const maisVelha = Math.max(...idades);
        const maisNova = Math.min(...idades);
        
        // Quantidade de cada opinião
        const contagemOpinioes = {
            otimo: respostas.filter(resposta => resposta.opiniao === 4).length,
            bom: respostas.filter(resposta => resposta.opiniao === 3).length,
            regular: respostas.filter(resposta => resposta.opiniao === 2).length,
            pessimo: respostas.filter(resposta => resposta.opiniao === 1).length
        };
        
        // Porcentagem de ótimo e bom
        const contagemOtimoBom = contagemOpinioes.otimo + contagemOpinioes.bom;
        const porcentagemOtimoBom = (contagemOtimoBom / totalRespostas) * 100;
        
        // Contagem por gênero
        const contagemGenero = {
            masculino: respostas.filter(resposta => resposta.genero === 'masculino').length,
            feminino: respostas.filter(resposta => resposta.genero === 'feminino').length,
            outros: respostas.filter(resposta => resposta.genero === 'outros').length
        };
        
        // Atualizar gráficos
        graficoOpiniao.data.datasets[0].data = [
            contagemOpinioes.otimo,
            contagemOpinioes.bom,
            contagemOpinioes.regular,
            contagemOpinioes.pessimo
        ];
        graficoOpiniao.update();
        
        graficoGenero.data.datasets[0].data = [
            contagemGenero.masculino,
            contagemGenero.feminino,
            contagemGenero.outros
        ];
        graficoGenero.update();
        
        // Exibir resultados
        divResultados.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Média de Idade</h3>
                    <p>${mediaIdade.toFixed(1)} anos</p>
                </div>
                <div class="stat-card">
                    <h3>Pessoa Mais Velha</h3>
                    <p>${maisVelha} anos</p>
                </div>
                <div class="stat-card">
                    <h3>Pessoa Mais Nova</h3>
                    <p>${maisNova} anos</p>
                </div>
                <div class="stat-card">
                    <h3>Avaliações Péssimas</h3>
                    <p>${contagemOpinioes.pessimo}</p>
                </div>
                <div class="stat-card">
                    <h3>Ótimo/Bom</h3>
                    <p>${porcentagemOtimoBom.toFixed(1)}%</p>
                </div>
                <div class="stat-card">
                    <h3>Total de Respostas</h3>
                    <p>${totalRespostas}</p>
                </div>
            </div>
        `;
    }
});