function tellFortune(children, partner, location, job) {
    return `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
}

// Call the tellFortune function three times with different values
const fortune1 = tellFortune(2, "Alice", "New York", "Software Engineer");
const fortune2 = tellFortune(3, "Bob", "Paris", "Graphic Designer");
const fortune3 = tellFortune(1, "Charlie", "Tokyo", "Product Manager");

// Display the fortunes on the screen
document.getElementById("fortune1").innerText = fortune1;
document.getElementById("fortune2").innerText = fortune2;
document.getElementById("fortune3").innerText = fortune3;
