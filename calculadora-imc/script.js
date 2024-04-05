

let btn = document.querySelector('#btn');
btn.addEventListener('click', calculateImc);
let imcResult = '';
function calculateImc() {
    let nome = document.querySelector('input#nome').value;
    let altura = document.querySelector('input#altura').value;
    let peso = document.querySelector('input#peso').value;

    imcResult = peso / (altura * altura);
    console.log(imcResult);

    let result = document.querySelector('.result');

    let resultText = document.createElement("p");
    result.appendChild(resultText);

    resultText.innerHTML = `Seu IMC é de ${imcResult}`;
};

