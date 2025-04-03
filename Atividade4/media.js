var nome = prompt("Informe seu nome: ")
var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite o segunda nota: "));
var nota3 = parseFloat(prompt("Digite o terceira nota: "));

var soma = nota1 + nota2 + nota3;
var media = soma / 3

alert(nome + " a sua média é: " + media);