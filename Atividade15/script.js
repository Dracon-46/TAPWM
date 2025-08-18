function mostrarDetalhesCurso() {
    const select = document.getElementById('cursoSelect');
    const cursoSelecionado = select.value;

    if (cursoSelecionado === "") return;

    const confirmacao = confirm(`Deseja ver mais informações sobre o curso "${select.options[select.selectedIndex].text}"?`);

    if (confirmacao) {
        const infoCursos = {
            "Analise de Sistemas": {
                titulo: "Análise e Desenvolvimento de Sistemas",
                descricao: "O curso forma profissionais para atuar no desenvolvimento, análise, projeto, implementação e atualização de sistemas de informação. O foco é na programação para web e dispositivos móveis, engenharia de software e banco de dados.",
                duracao: "6 semestres"
            },
            "Gestao Empresarial": {
                titulo: "Gestão Empresarial",
                descricao: "Prepara o aluno para gerenciar as áreas funcionais de uma organização, como recursos humanos, finanças, produção e marketing. O curso tem ênfase em empreendedorismo e estratégias de negócio.",
                duracao: "6 semestres"
            },
            "Logistica": {
                titulo: "Logística",
                descricao: "Focado no gerenciamento da cadeia de suprimentos, o curso aborda temas como transporte, armazenagem, controle de estoque e operações logísticas para otimizar o fluxo de produtos e informações.",
                duracao: "6 semestres"
            },
            "Marketing": {
                titulo: "Marketing",
                descricao: "O curso ensina a planejar e executar estratégias para entender e atender às necessidades do consumidor. Abrange pesquisa de mercado, comunicação, branding e marketing digital.",
                duracao: "6 semestres"
            },
            "Projetos Mecanicos": {
                titulo: "Projetos Mecânicos",
                descricao: "Forma profissionais aptos a desenvolver projetos de máquinas, equipamentos e ferramentas, utilizando softwares de desenho (CAD), além de conhecimentos em materiais e processos de fabricação.",
                duracao: "6 semestres"
            },
            "Fabricacao Mecanica": {
                titulo: "Fabricação Mecânica",
                descricao: "Voltado para o planejamento e controle de processos de produção industrial, o curso abrange usinagem, soldagem, automação e gestão da qualidade na fabricação de peças e componentes mecânicos.",
                duracao: "6 semestres"
            }
        };

        const detalhes = infoCursos[cursoSelecionado];
        
        const conteudo = `
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <title>Detalhes de ${detalhes.titulo}</title>
                <style>
                    body { 
                        font-family: 'Poppins', sans-serif;
                        background-color: #f4f7f9;
                        padding: 30px;
                        color: #333;
                    }
                    h1 { color: #2193b0; }
                    strong { color: #1a758c; }
                </style>
            </head>
            <body>
                <h1>${detalhes.titulo}</h1>
                <p>${detalhes.descricao}</p>
                <p><strong>Duração:</strong> ${detalhes.duracao}</p>
            </body>
            </html>
        `;

        const novaJanela = window.open("", "_blank", "width=600,height=400");
        novaJanela.document.write(conteudo);
        novaJanela.document.close();
    }
    
    select.value = "";
}