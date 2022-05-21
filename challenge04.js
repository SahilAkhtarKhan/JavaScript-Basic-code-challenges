/** Calculating the avg of both team and print the winner based on the condition only if the value of one team is doubled the other team.
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
