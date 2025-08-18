const inputTexto = document.getElementById('texto');
const radioUpper = document.getElementById('upper');
const radioLower = document.getElementById('lower');
const resetBtn = document.getElementById('resetBtn');

function transformarTexto() {
    let valor = inputTexto.value;

    if (radioUpper.checked) {
        inputTexto.value = valor.toUpperCase();
    } else if (radioLower.checked) {
        inputTexto.value = valor.toLowerCase();
    }
}

function resetarTudo() {
    inputTexto.value = '';
    radioUpper.checked = false;
    radioLower.checked = false;
    inputTexto.focus();
}

radioUpper.addEventListener('change', transformarTexto);
radioLower.addEventListener('change', transformarTexto);
resetBtn.addEventListener('click', resetarTudo);