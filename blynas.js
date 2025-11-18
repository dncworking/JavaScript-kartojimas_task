"use strict";
let nuotaika = Number(prompt("Kokia tavo nuotaika?(1-10)"));

while (isNaN(nuotaika) || nuotaika < 1 || nuotaika > 10) {
  nuotaika = Number(prompt("Klaida! Įvesk skaičių nuo 1 iki 10:"));
}
let energija = Number(prompt("Kokia tavo energija?(1-10)"));

while (isNaN(energija) || energija < 1 || energija > 10) {
  energija = Number(prompt("Klaida! Įvesk skaičių nuo 1 iki 10:"));
}

let kepimoIndeksas = nuotaika * energija;

const blynMotyvacija = () => {
  if (kepimoIndeksas > 40) {
    console.log("Kepk daug blynu!");
  } else if (kepimoIndeksas >= 20 && kepimoIndeksas <= 40) {
    console.log("Kepk kelis blynus.");
  } else if (kepimoIndeksas < 20) {
    console.log("Palik blynus rytojui...");
  }
};
blynMotyvacija();
