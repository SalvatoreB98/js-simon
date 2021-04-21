var numeriRandom = [];
var N = 5;
var delayInSec = 3;


for (var i = 0; i < N; i++) {
    numeriRandom.push(randomNumber(30,50));
}
alert(numeriRandom.join("  -  "));
console.log(numeriRandom);

setTimeout(function () {
    for (var i = 0; i < N; i++) {
        var numeroUtente= prompt("Testa le tue capacità cognitive. Quanti numeri ricordi? Inserisci i numeri uno alla volta");
        var numeriIndovinati=0;
        if(numeriRandom.indexOf()){
            numeriIndovinati ++;
        }
    }
    prompt("HAI INDOVINATO " + numeriIndovinati + " numeri");
}, delayInSec*1000);



















// FUNZIONI
function randomNumber(min,max) {
    return  Math.floor(Math.random() * (max - min)) + min;
}

