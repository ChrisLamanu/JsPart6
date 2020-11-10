let firstNumber = 9;
let secondNumber = 2;
let lastFirstNumber;
let calculLimit = 1;
let result = 0;

while(calcul(firstNumber, secondNumber) > calculLimit) {
    if (result == calculLimit) {
        document.body.innerHTML += `<p>Le résultat du calcul de ${lastFirstNumber} / ${secondNumber} = ${result}, il est donc égal à 1 !</p>`;
    }
    else {
        document.body.innerHTML += `<p>Le résultat du calcul de ${lastFirstNumber} / ${secondNumber} = ${result}, il est donc supérieur à 1 !</p>`;
    }
    console.log("resul " + result + ", first " + firstNumber + ", second " + secondNumber);
}

function calcul(a, b) {
    lastFirstNumber = a;
    result = a / b;
    firstNumber = result;      
    return result;    
}