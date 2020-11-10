let nFrom = 0;
let nTo = 100;
let n = 0;

// https://www.w3schools.com/jsref/prop_html_innerhtml.asp

for (let i = nFrom; i <= nTo; i++) {
    if (i % 15 == 0) {
        let id = "num" + n;
        document.getElementById("numContainer").innerHTML += `<p id="${id}">Nombres : ...</p>`;
        n++;
    }
    else {
        document.getElementById("numContainer").innerHTML += `<p>Nombres : ${i}</p>`;
    }
}