let firstNumber = 9;
let lastSecondNumber;
let secondNumber = 5;
let result = 0;

let safeMode = false; // Activated when result is the same as the last result to stop the while loop
let count = 0; // Keep track of the result when equal to secondNumber multiple time to avoid infinite loop

while(calcul(firstNumber, secondNumber) < 250 && safeMode == false) {
    if (count != 2) {
        document.body.innerHTML += `<p>Le résultat du calcul de ${firstNumber} x ${lastSecondNumber} = ${result}.</p>`;
    }
    else {
        document.body.innerHTML += `<p>Ayayah votre calcul cause une boucle temporelle.</p>`;
        safeMode = true;
    }
}

function calcul(a, b) {
    lastSecondNumber = b;
    result = a * b;
    if (secondNumber == result) {
        count++;    
    }
    else {
        count = 0;
    }
    secondNumber = result;      
    return result;    
}