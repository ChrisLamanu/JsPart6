let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

// https://developer.mozilla.org/fr/docs/Web/API/Document/createElement

days.forEach(function(innerDays) {
    if (innerDays == "Samedi" || innerDays == "Dimanche") {
        let boldText = document.createElement("p");

        boldText.textContent = innerDays;
        boldText.setAttribute("style", "font-weight: bold");
        
        document.body.appendChild(boldText);
    }
    else {
        document.body.innerHTML += `<p>${innerDays}</p>`;
    }
});