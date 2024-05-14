function calculo() {
    const nome1 = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('bruto').value);
    const valorINSS = salario * 0.08;
    const salarioLiq = salario - valorINSS;

    document.getElementById('nome1').innerText = nome1;
    document.getElementById('bruto1').innerText = salario;
    document.getElementById('INSS').innerText = valorINSS;
    document.getElementById('liquido').innerText = salarioLiq;
   
}