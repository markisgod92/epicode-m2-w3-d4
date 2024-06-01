// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata



// 7

const title = document.getElementsByClassName("title")

function changeTitle(newTitle) {
    for (i = 0; i < title.length; i++) {
        title[i].textContent = "Stiamo ancora fallendo!"
    }
}

changeTitle("Stiamo ancora fallendo!")


// 8

const content = document.querySelector(".cards")
content.style.backgroundColor = "yellow"


// 9

const address = document.getElementById("address");

function changeAddress(newAddress) {
    address.innerText = newAddress;
}

changeAddress("Bari (IT)")


// 10

const links = document.querySelectorAll(".card-link > a") 

for (i = 0; i < links.length; i++) {
    links[i].classList.add("link")
}


// 11

const pictures = document.querySelectorAll(".card-img > img")

function toggleImages(string) {
    if (string === "off") {
        for (i = 0; i < pictures.length; i++) {
            pictures[i].classList.toggle("show")
        }
    }
}

/* toggleImages("off") */


// 12

const prices = document.querySelectorAll(".card-price > p")

function priceColor(color) {
    for (i = 0; i < prices.length; i++) {
        prices[i].style.color = color
    }
}

priceColor("green")