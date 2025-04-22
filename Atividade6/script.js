document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    const resultsDiv = document.getElementById('results');
    const resetBtn = document.getElementById('resetBtn');
    const totalResponsesSpan = document.getElementById('totalResponses');
    
    // Inicializar gráficos
    const opinionCtx = document.getElementById('opinionChart').getContext('2d');
    const genderCtx = document.getElementById('genderChart').getContext('2d');
    
    let opinionChart = new Chart(opinionCtx, {
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
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    let genderChart = new Chart(genderCtx, {
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
    
    let responses = [];
    
    // Carregar respostas salvas no localStorage
    if (localStorage.getItem('filmSurveyResponses')) {
        responses = JSON.parse(localStorage.getItem('filmSurveyResponses'));
        updateResults();
    }
    
    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const age = parseInt(document.getElementById('age').value);
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const opinion = parseInt(document.querySelector('input[name="opinion"]:checked').value);
        
        // Adicionar nova resposta ao array
        responses.push({ age, gender, opinion });
        
        // Salvar no localStorage
        localStorage.setItem('filmSurveyResponses', JSON.stringify(responses));
        
        // Atualizar resultados
        updateResults();
        
        // Limpar formulário
        surveyForm.reset();
    });
    
    resetBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja reiniciar a pesquisa? Todos os dados serão perdidos.')) {
            responses = [];
            localStorage.removeItem('filmSurveyResponses');
            updateResults();
        }
    });
    
    function updateResults() {
        totalResponsesSpan.textContent = responses.length;
        
        if (responses.length === 0) {
            resultsDiv.innerHTML = `
                <div class="empty-state">
                    <img src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" alt="Pesquisa vazia" width="100">
                    <p>Adicione respostas para ver os resultados</p>
                </div>
            `;
            
            // Resetar gráficos
            opinionChart.data.datasets[0].data = [0, 0, 0, 0];
            genderChart.data.datasets[0].data = [0, 0, 0];
            opinionChart.update();
            genderChart.update();
            
            return;
        }
        
        // Calcular estatísticas
        const totalResponses = responses.length;
        
        // Média de idade
        const averageAge = responses.reduce((sum, response) => sum + response.age, 0) / totalResponses;
        
        // Idade mais velha e mais nova
        const ages = responses.map(response => response.age);
        const oldest = Math.max(...ages);
        const youngest = Math.min(...ages);
        
        // Quantidade de cada opinião
        const opinionCount = {
            otimo: responses.filter(response => response.opinion === 4).length,
            bom: responses.filter(response => response.opinion === 3).length,
            regular: responses.filter(response => response.opinion === 2).length,
            pessimo: responses.filter(response => response.opinion === 1).length
        };
        
        // Porcentagem de ótimo e bom
        const goodGreatCount = opinionCount.otimo + opinionCount.bom;
        const goodGreatPercentage = (goodGreatCount / totalResponses) * 100;
        
        // Contagem por gênero
        const genderCount = {
            masculino: responses.filter(response => response.gender === 'masculino').length,
            feminino: responses.filter(response => response.gender === 'feminino').length,
            outros: responses.filter(response => response.gender === 'outros').length
        };
        
        // Atualizar gráficos
        opinionChart.data.datasets[0].data = [
            opinionCount.otimo,
            opinionCount.bom,
            opinionCount.regular,
            opinionCount.pessimo
        ];
        opinionChart.update();
        
        genderChart.data.datasets[0].data = [
            genderCount.masculino,
            genderCount.feminino,
            genderCount.outros
        ];
        genderChart.update();
        
        // Exibir resultados
        resultsDiv.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Média de Idade</h3>
                    <p>${averageAge.toFixed(1)} anos</p>
                </div>
                <div class="stat-card">
                    <h3>Pessoa Mais Velha</h3>
                    <p>${oldest} anos</p>
                </div>
                <div class="stat-card">
                    <h3>Pessoa Mais Nova</h3>
                    <p>${youngest} anos</p>
                </div>
                <div class="stat-card">
                    <h3>Avaliações Péssimas</h3>
                    <p>${opinionCount.pessimo}</p>
                </div>
                <div class="stat-card">
                    <h3>Ótimo/Bom</h3>
                    <p>${goodGreatPercentage.toFixed(1)}%</p>
                </div>
                <div class="stat-card">
                    <h3>Total de Respostas</h3>
                    <p>${totalResponses}</p>
                </div>
            </div>
        `;
    }
});