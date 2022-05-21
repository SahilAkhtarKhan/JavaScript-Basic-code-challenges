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

function calcTip(bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return `Bill : ${bill}, Tip : ${tip}, & Total : ${bill + tip}`;
}
// console.log(calcTip(350));

let bills = [125, 555, 44];
let tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tip);
_____________________________________________________________________________________;

// Calculate the retirement years with current age using function method

const retirementYear = (birthYear, name) => {
  const Age = 2022 - birthYear;
  const retirement = 65 - Age;
  console.log(
    `Name : ${name}, Current age : ${Age} years, retire in ${retirement} years!`
  );
};
retirementYear(1997, "Sahil");


______________________________________________________________________________

/**  Challenge-04
 * Calculating the avg of both team and print the winner based on the condition only if the value of one team is doubled the other team.
 *
 * @param {*Create an arrow function "calcAverage" for calculating avg score of both team} a
 * @param {*Create another function "checkWinner" with two parameter "avgDolphines", "avgKoalas"} b
 * @param {*Check the different scenarios and call the checkWinner function with two different argument} c
 * @returns
 */
// With test data 01

let calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphines = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphines, scoreKoalas);

function checkWinner(avgDolphines, avgKoalas) {
  if (avgDolphines >= 2 * avgKoalas) {
    console.log(`Dolphines win (${avgDolphines} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphines) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphines})`);
  } else {
    console.log("No one wins..!");
  }
}
checkWinner(scoreDolphines, scoreKoalas);
checkWinner(742, 211);

// With test data 02

scoreDolphines = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphines, scoreKoalas);
checkWinner(scoreDolphines, scoreKoalas);
