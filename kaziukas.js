"use strict";
let temperatura = Number(prompt("Kokia temperatura?"));
let vejoGreitis = Number(prompt("Koks vejo greitis?"));

function goToFair() {
  if (temperatura < 0 && vejoGreitis > 5) {
    return "NEEIK! Susalsi!";
  } else if (temperatura > 0 && vejoGreitis < 5) {
    return "Eik! Riestainiai taves laukia!";
  } else {
    return "Gali eit, bet apsirenk";
  }
}
let ats = goToFair();
console.log(ats);
