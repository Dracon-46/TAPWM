function validar() {
    // Pegando via document.nomeform.elements
    const elementos = document.meuForm.elements;

    const nome = elementos['nome'].value.trim();
    const email = elementos['email'].value.trim();
    const comentario = elementos['comentario'].value.trim();
    const pesquisa = elementos['pesquisa'].value;

    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    // Verifica se selecionou um radio
    if (!pesquisa) {
        alert("Selecione uma opção na pesquisa!");
        return false;
    }

    // Mensagem dependendo do radio
    if (pesquisa === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }

    return true; // envia o form
}
