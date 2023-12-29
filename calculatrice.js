function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || num2 ===0 ){
        resultDiv.innerHTML = 'Veuillez saisir des nombres valides et eviter la division par zéro';
    }
    else{
        var sum =num1 + num2;
        var product = num1 * num2;
        var division = num1 / num2;
        var subtraction =num1 - num2;
        resultDiv.innerHTML = `
        Somme : ${sum} <br>
        Multiplication : ${product} <br>
        Division : ${division} <br>
        Soustraction : ${subtraction}`;
    }
}