// Challenge -01 ---------Calculating the BMI & comparing the higher BMI

var Markmass = 78; // weight of Mark
var Markheight = 1.69; // height of Mark
var Johnmass = 92; // weight of John
var Johnheight = 1.95; // height of John

var MarkBMI = Markmass / (Markheight * Markheight); // BMI formula
var JohnBMI = Johnmass / (Johnheight * Johnheight); // BMI formula
console.log(`Mark BMI is : ${MarkBMI} John BMI is : ${JohnBMI}`);
if (MarkBMI > JohnBMI) {
  console.log(`Mark has higher BMI (${MarkBMI})`);
} else {
  console.log(`John has higher BMI (${JohnBMI})`);
}
______________________________________________________________________

// Challenge-02  --------------Calculating avg of Dolphine & koalas using given three values & checking different scenarios

// Dolphine Avg
let DolphineScore = (97 + 112 + 50) / 3;
// Koalas Avg
let KoalaScore = (109 + 95 + 40) / 3;
console.log(DolphineScore, KoalaScore);
//  Conditions
if (DolphineScore > KoalaScore && DolphineScore >= 100) {
  console.log("Dolphin wins the Trophy..!");
} else if (KoalaScore > DolphineScore && KoalaScore >= 100) {
  console.log("Koala wins the Trophy..!");
} else if (
  KoalaScore == DolphineScore &&
  DolphineScore >= 100 &&
  KoalaScore >= 100
) {
  console.log("Match is Draw..!");
} else {
  console.log("No one wins the Trophy :(");
}

_____________________________________________________________________________

// Challenge -03  -----------if the bill is between 50 & 300 then the tip will be 15% and if more than 300 than the tip will be 20%

let bill = 275;
let tip =
  bill >= 50 && bill <= 300
    ? `${(tip = bill * 0.15)}`
    : `${(tip = bill * 0.2)}`;
console.log(`Bill : ${bill}, Tip : ${tip}, & Total : ${bill + tip}`);
