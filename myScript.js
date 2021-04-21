var numeriRandom = [];
var N = 5;
var delayInSec = 3;
numeriIndovinatiArray = [];


for (var i = 0; i < N; i++) {
    numeriRandom.push(randomNumber(30, 50));
}
alert(numeriRandom.join("  -  "));
console.log(numeriRandom);

setTimeout(function () {
    var numeriIndovinati = 0;
    for (var i = 0; i < N; i++) {
        var numeroUtente = 0;

        do {
            numeroUtente = parseInt(prompt("Testa le tue capacità cognitive. Quanti numeri ricordi? Inserisci i numeri uno alla volta"));
            if (isNaN(numeroUtente ) ==  true) {
                alert("Attenzione inserire un numero!");
            }
        } while (isNaN(numeroUtente) == true);

        if (numeriRandom.indexOf(numeroUtente) > -1) {
            numeriIndovinati++;
            numeriIndovinatiArray.push(numeroUtente);
        }
    }
    alert("Hai indovinato i seguenti numeri: " + numeriIndovinatiArray.join("  -  "))
    alert("Il tuo punteggio e' " + numeriIndovinati + "/" + N);
    if (numeriIndovinati == N) {
        alert("COMPLIMENTI HAI VINTO!");
    }
}, delayInSec * 1000);



















// FUNZIONI
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

