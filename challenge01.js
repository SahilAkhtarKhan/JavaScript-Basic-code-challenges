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
