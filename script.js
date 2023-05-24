const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelimc(imc);

    const mensagem = `seu IMC é ${imc} (${nivelImc}).`;
    setResultado(mensagem, true);
});

function getNivelimc(imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1',
        'Obesidade grau 2', 'obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}



function criaP() {
    const p = document.createElement('p');
    return p;
}


function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classLis.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

