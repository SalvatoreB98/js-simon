var numeriRandom = [];
var N = 5;
var delayInSec = 3;


for (var i = 0; i < N; i++) {
    numeriRandom.push(randomNumber(30,50));
}
alert(numeriRandom.join("  -  "));
console.log(numeriRandom);

setTimeout(function () {
    var numeriIndovinati=0;
    for (var i = 0; i < N; i++) {
        var numeroUtente= parseInt(prompt("Testa le tue capacità cognitive. Quanti numeri ricordi? Inserisci i numeri uno alla volta"));
        if(numeriRandom.indexOf(numeroUtente)>-1){
            numeriIndovinati ++;
        }
    }
    alert("HAI INDOVINATO " + numeriIndovinati + " numeri");
}, delayInSec*1000);



















// FUNZIONI
function randomNumber(min,max) {
    return  Math.floor(Math.random() * (max - min)) + min;
}

