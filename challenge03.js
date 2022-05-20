// Challenge -03  -----------if the bill is between 50 & 300 then the tip will be 15% and if more than 300 than the tip will be 20%

let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(typeof `Bill : ${bill}, Tip : ${tip}, & Total : ${bill + tip}`);

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
