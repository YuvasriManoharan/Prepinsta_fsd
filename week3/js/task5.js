
function metersToFeet(meters) {
    const feet = meters * 3.281;
    return `${meters} meters is equal to ${feet.toFixed(2)} feet.`;
}

function feetToMeters(feet) {
    const meters = feet * 0.3048;
    return `${feet} feet is equal to ${meters.toFixed(2)} meters.`;
}

// Call the functions with different values
const metersToFeetResult1 = metersToFeet(10); // 10 meters
const metersToFeetResult2 = metersToFeet(25); // 25 meters
const feetToMetersResult1 = feetToMeters(32.8); // 32.8 feet
const feetToMetersResult2 = feetToMeters(82); // 82 feet

// Display the results on the screen
document.getElementById('metersToFeetResult1').innerText = metersToFeetResult1;
document.getElementById('metersToFeetResult2').innerText = metersToFeetResult2;
document.getElementById('feetToMetersResult1').innerText = feetToMetersResult1;
document.getElementById('feetToMetersResult2').innerText = feetToMetersResult2;
