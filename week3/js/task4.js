const MAX_AGE = 90;

function calculateCoffeeSupply(age, cupsPerDay) {
    const yearsLeft = MAX_AGE - age;
    const totalCups = Math.round(yearsLeft * 365 * cupsPerDay);
    return `You will need ${totalCups} cups of coffee to keep you awake until the age of ${MAX_AGE}.`;
}

// Call the function three times with different values
const result1 = calculateCoffeeSupply(25, 3); // Age 25, 3 cups per day
const result2 = calculateCoffeeSupply(30, 2.5); // Age 30, 2.5 cups per day
const result3 = calculateCoffeeSupply(40, 4.2); // Age 40, 4.2 cups per day

// Display the results on the screen
document.getElementById('result1').innerText = result1;
document.getElementById('result2').innerText = result2;
document.getElementById('result3').innerText = result3;
