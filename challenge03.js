// Challenge -03  -----------if the bill is between 50 & 300 then the tip will be 15% and if more than 300 than the tip will be 20%

let bill = 275;
let tip =
  bill >= 50 && bill <= 300
    ? `${(tip = bill * 0.15)}`
    : `${(tip = bill * 0.2)}`;
console.log(`Bill : ${bill}, Tip : ${tip}, & Total : ${bill + tip}`);
