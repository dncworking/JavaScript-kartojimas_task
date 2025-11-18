"use strict";

let vardas = prompt("koks tavo vardas?");
let miegoAts = prompt("Ar gerai miegojai? (taip/ne)");
let arGeraiMiegojo = miegoAts.toLowerCase() === "taip";

const celebrateNameDay = (vardas, arGeraiMiegojo) => {
  let tekstas = `Sveikiname su vardadieniu ${vardas}`;

  if (!arGeraiMiegojo) {
    tekstas += " bet pirmiau isgerk kavos";
  }

  return tekstas;
};
console.log(celebrateNameDay(vardas, arGeraiMiegojo));
