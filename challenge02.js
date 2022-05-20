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
