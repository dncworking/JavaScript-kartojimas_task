"use strict";

let z1 = Number(prompt("Kokie turiu zoleliu?"));
let z2 = Number(prompt("Kokie turiu zoleliu?"));
let z3 = Number(prompt("Kokie turiu zoleliu?"));
let z4 = Number(prompt("Kokie turiu zoleliu?"));

let suma = z1 + z2 + z3 + z4;

const joniniuEkspertas = () => {
  let isvada;
  if (suma > 20) {
    isvada = "Jonines garantuotos!";
  } else {
    isvada = "Dar reikia zoleliu...";
  }
  return {
    suma: suma,
    isvada: isvada,
  };
};
let rezultatas = joniniuEkspertas();
console.log(`Suma: ${rezultatas.suma}, Įvertinimas: ${rezultatas.isvada}`);
