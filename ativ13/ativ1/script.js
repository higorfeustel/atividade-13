function diferença() {
    const numero1 = parseFloat(document.getElementById('a').value);
    const numero2 = parseFloat(document.getElementById('b').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1a').innerHTML = numero1 - numero2;

    }
    else if (numero1 == numero2) {
        document.getElementById('resultado1a').innerHTML = 0;
    }
    else {
        document.getElementById('resultado1a').innerHTML = numero2 - numero1;
    }

}

function dobroTriplo() {

    const numero1 = parseFloat(document.getElementById('a').value);
    const numero2 = parseFloat(document.getElementById('b').value);
    document.getElementById('resultado1b').innerText = (2 * numero1 + 3 * numero2);
}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById('a').value);
    const numero2 = parseFloat(document.getElementById('b').value);

    document.getElementById('resultado1c').innerText = numero1 * numero2;

}

function Ordem() {
    const numero1 = parseFloat(document.getElementById('a').value);
    const numero2 = parseFloat(document.getElementById('b').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1d').innerHTML = numero1 + ', ' + numero2;

    }
    else if (numero1 == numero2) {
        document.getElementById('resultado1d').innerHTML = numero1 + ', ' + numero2;
    }
    else {
        document.getElementById('resultado1d').innerHTML = (numero2 + ', ' + numero1);
    }

}