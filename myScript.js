var numeriRandom = [];
var N = 5;
var delayInSec = 3;
var numeriIndovinatiArray = [];
var rangeMin = 0;
var rangeMax = 100;


for (var i = 0; i < N; i++) {
    numeriRandom.push(randomNumber(rangeMin, rangeMax));
}
alert("Testa le tue capacità cognitive! Quanti di questi numeri ricordi dopo " + delayInSec + 1 + " secondi? \n" + numeriRandom.join("  -  "));
console.log(numeriRandom);

setTimeout(function () {
    var numeriIndovinati = 0;
    for (var i = 0; i < N; i++) {
        var numeroUtente = 0;
        // CHIEDE ALL-UTENTE UN NUMERO, RIPETE SE IL VALORE INSERITO NON E' UN NUMERO
        do {
            numeroUtente = parseInt(prompt("Inserisci i numeri che ricordi uno alla volta"));
            if (isNaN(numeroUtente) == true) {
                alert("Attenzione inserire un numero!");
            }
        } while (isNaN(numeroUtente) == true);

        if (numeriRandom.indexOf(numeroUtente) > -1) {
            numeriIndovinati++;
            numeriIndovinatiArray.push(numeroUtente);
            // RISOLVE BUG DI INSERIRE UN NUMERO TRA I 5 NUMERI PER 5 VOLTE
            numeriRandom.splice(numeriRandom.indexOf(numeroUtente), 1);
        }
        console.log(numeriRandom);
        console.log(numeriIndovinatiArray);
    }

    // VARI CASI
    if (numeriIndovinati > 0) {
        alert("Hai indovinato i seguenti numeri: \n" + numeriIndovinatiArray.join("  -  "))
    }
    else{
        alert("Non hai ricordato nessun numero, ritenta!");
    }
    alert("Il tuo punteggio e' " + numeriIndovinati + "/" + N);
    if (numeriIndovinati == N) {
        alert("COMPLIMENTI HAI VINTO!");
    }
}, delayInSec * 1000);

// FUNZIONI
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

