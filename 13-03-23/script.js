// alert("Attenzione! Ciao ragazzi :D!")
// confirm("Vuoi accettare i cookies?")
// prompt("Ciao, come ti chiami?")

let laMiaVariabile = prompt("Ciao, come ti chiami?");
alert("Ciao " + laMiaVariabile)

let laMiaVariabile2 = prompt("Come stai oggi?");

if (laMiaVariabile2 === "bene") {
    alert("Mi fa piacere che stai " + laMiaVariabile2);
} else if (laMiaVariabile2 === "non c'e male") {
    alert("Vedrai che domani andra meglio");
} else {
    alert("Oh mi dispiace che stai male");
}