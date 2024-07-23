function calculatePetAge(petAge, conversionRate = 7) {
    const petYears = petAge * conversionRate;
    return `Your pet is ${petYears} years old in pet years!`;
}

// Call the calculatePetAge function three times with different values and conversion rates
const result1 = calculatePetAge(2); // Default conversion rate of 7
const result2 = calculatePetAge(3, 5); // Custom conversion rate of 5
const result3 = calculatePetAge(4, 10); // Custom conversion rate of 10

// Display the results on the screen
document.getElementById("result1").innerText = result1;
document.getElementById("result2").innerText = result2;
document.getElementById("result3").innerText = result3;
