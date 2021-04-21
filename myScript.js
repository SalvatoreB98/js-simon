var numeriRandom = [];
var N = 5;
var delayInSec = 3;
numeriIndovinatiArray = [];


for (var i = 0; i < N; i++) {
    numeriRandom.push(randomNumber(30, 50));
}
alert("Testa le tue capacità cognitive! Quanti di questi numeri ricordi dopo " + delayInSec + 1 + " secondi? \n" + numeriRandom.join("  -  "));
console.log(numeriRandom);

setTimeout(function () {
    var numeriIndovinati = 0;
    for (var i = 0; i < N; i++) {
        var numeroUtente = 0;

        do {
            numeroUtente = parseInt(prompt("Inserisci i numeri che ricordi uno alla volta"));
            if (isNaN(numeroUtente) == true) {
                alert("Attenzione inserire un numero!");
            }
        } while (isNaN(numeroUtente) == true);
        // CONTROLLA SE IL NUMERO E' STATO INDOVINATO (CONTROLLA NELL'ARRAY DEI NUMERI RANDOM) E POI SI ASSICURA CHE QUEL NUMERO NON SIA GIA' STATO INDOVINATO  
        if (numeriRandom.indexOf(numeroUtente) > -1 && numeriIndovinatiArray.indexOf(numeroUtente) == -1 ) {
            numeriIndovinati++;
            numeriIndovinatiArray.push(numeroUtente);
            console.log(numeriRandom);
            console.log(numeriIndovinatiArray);
        }
    }
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

