//Output HTML Element Variables
let tipOutput = document.getElementById('tipAmountOutput');
let totalOutput = document.getElementById('totalBillOutput');
let checkOutput = document.getElementById('paycheckAmountOutput');
let gradeOutput = document.getElementById('percentGradeOutput');
let gasOutput = document.getElementById('gasCostOutput');

let tipBtn = document.getElementById("tipButton");
tipBtn.addEventListener('click', function () {
    // Tip Calculator Variables
    let subTotal = document.getElementById('subTotalInput').valueAsNumber;
    let percentage = document.getElementById('percentageInput').valueAsNumber;
    let tipAmount;
    let totalBill;

    // Do the Math
    tipAmount = subTotal * percentage;
    totalBill = subTotal + tipAmount;

    // Only show 2 decimal places
    tipAmount = tipAmount.toFixed(2);
    totalBill = totalBill.toFixed(2);

    // Show the output
    tipOutput.innerHTML = "$" + tipAmount;
    totalOutput.innerHTML = "$" + totalBill;
})

let payCheckBtn = document.getElementById("paycheckButton");
payCheckBtn.addEventListener('click', function () {
    // Paycheck Calculator Variables
    let totalHours = document.getElementById('hoursWorkedInput').valueAsNumber;
    let hourlyWage = document.getElementById('hourlyRateInput').valueAsNumber;
    let payCheck;

    //Do the Math
    payCheck = totalHours * hourlyWage;

    // Only show 2 decimal places
    hourlyWage = hourlyWage.toFixed(2);
    payCheck = payCheck.toFixed(2);

    //Show the Output
    checkOutput.innerHTML = "$" + payCheck;
})

let gradeBtn = document.getElementById("gradeButton");
gradeBtn.addEventListener('click', function () {
    // Grade Calculator Variables
    let pointsEarned = document.getElementById('pointsEarnedInput').valueAsNumber;
    let totalPoints = document.getElementById('totalPointsInput').valueAsNumber;
    let percentGrade;


    // Do the math
    percentGrade = pointsEarned / totalPoints;


    // Change to Percent instead of Decimal
    percentGrade = Math.round(percentGrade * 100);


    // Show the output
    gradeOutput.innerHTML = percentGrade + "%";

})

let gasBtn = document.getElementById("gasButton");
gasBtn.addEventListener('click', function () {
    // Grade Calculator Variables
    let gasCost = document.getElementById('perGallonInput').valueAsNumber;
    let milesGallon = document.getElementById('tankGallonsInput').valueAsNumber;
    let totalCost;

    // Do the Math
    totalCost = gasCost * milesGallon

    // Only show 2 decimal places
    totalCost = totalCost.toFixed(2);

    // Show the Output
    gasOutput.innerHTML = "$" + totalCost;
})