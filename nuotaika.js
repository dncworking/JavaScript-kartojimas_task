"use strict";
let a = Number(prompt("Kokia savaites diena?(1-7)"));
function dayMood(num) {
  switch (num) {
    case 1:
      console.log("Pirmadienis. Stiprios kavos prasau.");
      break;
    case 2:
      console.log("Antradienis. Jau geriau.");
      break;
    case 3:
      console.log("Treciadienis. Puse kelio!");
      break;
    case 4:
      console.log("Ketvirtadienis. Dar truputi.");
      break;
    case 5:
      console.log("Penktadienis. Sirdis dainuoja!");
      break;
    case 6:
      console.log("Sestadienis. Galima ilgiau pamiegoti.");
      break;
    case 7:
      console.log("Sekmadienis. Nieko neveikimo menas");
      break;

    default:
      console.log("Tokios dienos nera");
      break;
  }
}
dayMood(a);
