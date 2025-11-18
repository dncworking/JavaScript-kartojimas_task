"use strict";
const cepelinuAnalize = (kiekCepeliniu) => {
  const kalorijos = kiekCepeliniu * 350;
  const zinute =
    kalorijos > 1000
      ? "Ufff... cia rimtas balius!"
      : "Dar gali judeti po valgio";
  return {
    kalorijos: kalorijos,
    zinute: zinute,
  };
};

console.log(cepelinuAnalize(5));
console.log(cepelinuAnalize(2));
