"use strict";

let g1 = Number(prompt("Kiek zmoniu pirmoje grupei?"));
let g2 = Number(prompt("Kiek zmoniu antroje grupei?"));
let g3 = Number(prompt("Kiek zmoniu trecioje grupei?"));

const fishNeeded = (g1, g2, g3) => {
  let zmoniuKiekis = g1 + g2 + g3;
  let zuvis = (zmoniuKiekis * 0.25).toFixed(2);

  let zinute;
  if (zuvis > 2) {
    zinute = "Reiks didelio puodo!";
  } else {
    zinute = "uzteks mazo puodo";
  }

  return {
    zmoniuKiekis,
    zuvis,
    zinute,
  };
};

let rezultatas = fishNeeded(g1, g2, g3);
console.log(
  `${rezultatas.zmoniuKiekis}, ${rezultatas.zuvis}, ${rezultatas.zinute}`
);
