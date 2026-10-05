// Tip Calculator
let tipAmount;
let subTotal = 67.72;
let percent = 0.2;
let totalBill;

tipAmount = subTotal * percent
console.log('Tip Amount:' + tipAmount.toFixed(2))

totalBill = subTotal + tipAmount
console.log('Total Amount due:' + totalBill.toFixed(2))

//Paycheck Calculator
let totalHours = 12;
let hourlyWage = 15.92;
let payCheck = totalHours * hourlyWage;
 console.log('Paycheck Amount:' + payCheck)

 //Grade Calculator
let pointsEarned = 75;
let totalPoints = 100;
let gradeFinal = pointsEarned / totalPoints
console.log('Grade:' + gradeFinal.toFixed(2))

 //Gas Cost Calculator
 let gasCost = 4.79;
 let tripMiles = 75;
 let milesGallon = 25;
 let gallons = tripMiles / milesGallon
 let totalCost = gallons * gasCost
 console.log('Total Trip Cost:' + totalCost.toFixed(2))