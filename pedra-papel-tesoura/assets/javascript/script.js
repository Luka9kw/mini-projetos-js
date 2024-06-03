const inputPapel = document.querySelector('#papel');
const inputPedra = document.querySelector('#pedra');
const inputTesoura = document.querySelector('#tesoura');
const res = document.querySelector('#resultado');

let escolhaUsuario = ''

// Define o valor de escolha do usuário
inputPedra.addEventListener('click', function () {
    escolhaUsuario = 'pedra';
    resultado();
})

inputPapel.addEventListener('click', function () {
    escolhaUsuario = 'papel';
    resultado();
})

inputTesoura.addEventListener('click', function () {
    escolhaUsuario = 'tesoura';
    resultado();
})

function resultado() {
    let PPT = ['pedra', 'papel', 'tesoura'];
    let cpuPPT = Math.floor(Math.random() * PPT.length);
    const randomCPU = PPT[cpuPPT];
    pickCPU.innerHTML = `Seu adversário escolheu <strong>${randomCPU}</strong>`

    // Condições de Vitória
    if (randomCPU == 'pedra' && escolhaUsuario == 'papel') {
        final.innerHTML = 'Você venceu!';
        final.style.color = 'green';
    }
    else if (randomCPU == 'papel' && escolhaUsuario == 'tesoura') {
        final.innerHTML = 'Você venceu!';
        final.style.color = 'green';
    }
    else if (randomCPU == 'tesoura' && escolhaUsuario == 'pedra') {
        final.innerHTML = 'Você venceu!';
        final.style.color = 'green';
    }

    // Condições de Empate
    else if (randomCPU == escolhaUsuario) {
        final.innerHTML = 'Empate!';
        final.style.color = 'black';
    }

    // Condições de Derrota
    else {
        final.innerHTML = 'Você perdeu!';
        final.style.color = 'red';
    }    
}


// Cria o elemento que presenta a escolha da CPU
const pickCPU = document.createElement('p');
pickCPU.setAttribute('id', 'escolhaCPU')
res.appendChild(pickCPU);

// Cria o elemento HTML para a exibição do resultado final
const final = document.createElement('p');
final.setAttribute('id', 'textoResultado')
res.appendChild(final);

