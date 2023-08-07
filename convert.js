// Convert from feet to inch

let feet = 50.68;
let convertedInch = feetToInch(feet);

function feetToInch (givenFeet){
    let inch = givenFeet * 12; // 1 Feet = 12 Inch
    return inch;
}

console.log(feet + ' ' + 'Feet' + ' ' + "=" + ' ' + convertedInch.toFixed(2) + ' ' + 'Inch');




// Convert from centimeter to meter

let centimeter = 472.29;
let convertedMeter = centimeterToMeter (centimeter);

function centimeterToMeter (givenCentimeter){
    let meter = centimeter / 100; // 100 Centimeter = 1 Meter
    return meter;
}

console.log(centimeter + ' ' + 'Centimeter' + ' ' + "=" + ' ' + convertedMeter.toFixed(2) + ' ' + 'Meter');