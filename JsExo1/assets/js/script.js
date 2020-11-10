let dateFrom = 2020;
let dateTo = 2030;
let n = 0;

// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.calendrier-365.fr/annees-bissextiles.html
// https://docs.microsoft.com/fr-fr/office/troubleshoot/excel/determine-a-leap-year#how-to-determine-whether-a-year-is-a-leap-year
// https://fr.wikipedia.org/wiki/Ann%C3%A9e_bissextile#:~:text=7.1%20Articles%20connexes-,R%C3%A8gle%20actuelle,nombre%20entier%2C%20sans%20reste).

for (let i = dateFrom; i <= dateTo; i++) {
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
        let id = "date" + n;
        document.getElementById("dateContainer").innerHTML += `<p id="${id}">Années bissextiles : ${i}</p>`;
        document.getElementById(`${id}`).style.color = "red";
        n++;
    }
    else {
        document.getElementById("dateContainer").innerHTML += `<p>Années commune : ${i}</p>`;
    }
}