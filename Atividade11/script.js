// Exercício 1: Retângulo com cálculo de área
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

document.getElementById('calcArea').addEventListener('click', function() {
    const base = parseFloat(prompt("Digite a base do retângulo:"));
    const altura = parseFloat(prompt("Digite a altura do retângulo:"));
    
    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, digite valores numéricos válidos.");
        return;
    }
    
    const retangulo = new Retangulo(base, altura);
    const area = retangulo.calcularArea();
    
    document.getElementById('resultArea').innerHTML = `
        <p><strong>Retângulo criado:</strong></p>
        <p>Base: ${retangulo.base}</p>
        <p>Altura: ${retangulo.altura}</p>
        <p>Área: ${area}</p>
    `;
});

// Exercício 2: Sistema Bancário
class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }
    
    // Gets e Sets
    get nomeCorrentista() {
        return this._nomeCorrentista;
    }
    
    set nomeCorrentista(novoNome) {
        this._nomeCorrentista = novoNome;
    }
    
    get banco() {
        return this._banco;
    }
    
    set banco(novoBanco) {
        this._banco = novoBanco;
    }
    
    get numeroConta() {
        return this._numeroConta;
    }
    
    set numeroConta(novoNumero) {
        this._numeroConta = novoNumero;
    }
    
    get saldo() {
        return this._saldo;
    }
    
    set saldo(novoSaldo) {
        this._saldo = novoSaldo;
    }
    
    mostrarDados() {
        return `
            <p><strong>Nome:</strong> ${this._nomeCorrentista}</p>
            <p><strong>Banco:</strong> ${this._banco}</p>
            <p><strong>Número da Conta:</strong> ${this._numeroConta}</p>
            <p><strong>Saldo:</strong> R$ ${this._saldo.toFixed(2)}</p>
        `;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }
    
    get saldoEspecial() {
        return this._saldoEspecial;
    }
    
    set saldoEspecial(novoSaldoEspecial) {
        this._saldoEspecial = novoSaldoEspecial;
    }
    
    mostrarDados() {
        return super.mostrarDados() + `
            <p><strong>Saldo Especial:</strong> R$ ${this._saldoEspecial.toFixed(2)}</p>
            <p><strong>Saldo Total Disponível:</strong> R$ ${(this._saldo + this._saldoEspecial).toFixed(2)}</p>
        `;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }
    
    get juros() {
        return this._juros;
    }
    
    set juros(novosJuros) {
        this._juros = novosJuros;
    }
    
    get dataVencimento() {
        return this._dataVencimento;
    }
    
    set dataVencimento(novaData) {
        this._dataVencimento = novaData;
    }
    
    mostrarDados() {
        return super.mostrarDados() + `
            <p><strong>Taxa de Juros:</strong> ${this._juros}%</p>
            <p><strong>Data de Vencimento:</strong> ${this._dataVencimento}</p>
        `;
    }
}

// Criar Conta Corrente
document.getElementById('createCurrent').addEventListener('click', function() {
    const nome = prompt("Nome do correntista:");
    const banco = prompt("Nome do banco:");
    const numero = prompt("Número da conta:");
    const saldo = parseFloat(prompt("Saldo inicial:"));
    const especial = parseFloat(prompt("Saldo especial:"));
    
    if (isNaN(saldo) || isNaN(especial)) {
        alert("Por favor, digite valores numéricos válidos para saldo.");
        return;
    }
    
    const contaCorrente = new Corrente(nome, banco, numero, saldo, especial);
    document.getElementById('accountResults').innerHTML = `
        <h3>Conta Corrente Criada:</h3>
        ${contaCorrente.mostrarDados()}
    `;
});

// Criar Conta Poupança
document.getElementById('createSavings').addEventListener('click', function() {
    const nome = prompt("Nome do correntista:");
    const banco = prompt("Nome do banco:");
    const numero = prompt("Número da conta:");
    const saldo = parseFloat(prompt("Saldo inicial:"));
    const juros = parseFloat(prompt("Taxa de juros (%):"));
    const vencimento = prompt("Data de vencimento (dd/mm/aaaa):");
    
    if (isNaN(saldo) || isNaN(juros)) {
        alert("Por favor, digite valores numéricos válidos para saldo e juros.");
        return;
    }
    
    const contaPoupanca = new Poupanca(nome, banco, numero, saldo, juros, vencimento);
    document.getElementById('accountResults').innerHTML = `
        <h3>Conta Poupança Criada:</h3>
        ${contaPoupanca.mostrarDados()}
    `;
});