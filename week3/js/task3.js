function calcPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    return `The perimeter is ${perimeter}`;
}

function calcArea(length, width) {
    const area = length * width;
    return `The area is ${area}`;
}

document.getElementById('rectangleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    
    const perimeterResult = calcPerimeter(length, width);
    const areaResult = calcArea(length, width);
    
    document.getElementById('result').innerText = `${perimeterResult}\n${areaResult}`;
});
