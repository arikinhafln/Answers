// Função para calcular o IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

// Valores de peso e altura do usuário
const peso = parseFloat(prompt("Digite o peso em kg:"));
const altura = parseFloat(prompt("Digite a altura em centimetros:"));

// Calcula o IMC
const imc = calcularIMC(peso, altura);

// Exibe o resultado
console.log("Seu IMC é:", imc.toFixed(2));


//Editando para monitoria





