"use strict";
let a = Number(prompt("Kokia savaites diena?(1-7)"));
function dayMood(num) {
  let message = "";
  switch (num) {
    case 1:
      message = "Pirmadienis. Stiprios kavos prasau.";
      break;
    case 2:
      message = "Antradienis. Jau geriau.";
      break;
    case 3:
      message = "Treciadienis. Puse kelio!";
      break;
    case 4:
      message = "Ketvirtadienis. Dar truputi.";
      break;
    case 5:
      message = "Penktadienis. Sirdis dainuoja!";
      break;
    case 6:
      message = "Sestadienis. Galima ilgiau pamiegoti.";
      break;
    case 7:
      message = "Sekmadienis. Nieko neveikimo menas";
      break;

    default:
      message = "Tokios dienos nera";
      break;
  }
  if (num === 5 || num === 6) {
    message += " Sventine diena";
  }
  console.log(message);
}
dayMood(a);
