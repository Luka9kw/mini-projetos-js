let btn = document.querySelector('#btn');


function calcularImc() {
    let nome = document.querySelector('input#nome').value;
    let altura = document.querySelector('input#altura').value;
    let peso = document.querySelector('input#peso').value; 
    let resultado = document.querySelector('.result');
    resultado.textContent = '';

    if (nome == '' || altura == '' || peso == '') {
        return resultado.textContent = 'Por favor, preencha todos os espaços.';
    }

    // Resultados
    const imc = (peso / (altura * altura)).toFixed(1);

    if (imc < 18.5) {
        resultado.textContent = `${nome}, seu IMC é de ${imc}. Você está abaixo do peso. Cuidado!`
    } else if (imc >= 18, 5 && imc <= 24, 9) {
        resultado.textContent = `${nome}, seu IMC é de ${imc}. Você está com o peso ideal. Parabéns!`
    } else if (imc >= 25 && imc <= 29, 9) {
        resultado.textContent = `${nome}, seu IMC é de ${imc}. Você está com sobrepeso. Cuidado!`
    } else if (imc >= 30 && imc <= 34, 9) {
        resultado.textContent = `${nome}, seu IMC é de ${imc}. Você está com obesidade grau I. Muito Cuidado!`
    } else if (imc >= 35 && 39, 9) {
        resultado.textContent = `${nome}, seu IMC é de ${imc}. Você está com obesidade grau II. Muito Cuidado!`
    } else {
        resultado.textContent = `${nome}, seu IMC é de ${imc}. Você está com obesidade grau III. Muito Cuidado!`
    };
};

btn.addEventListener('click', calcularImc);




