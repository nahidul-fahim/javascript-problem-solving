// Take an array of numbers as input and return the sum of all numbers.

let numbers =[10.389, 20.52, 50.6985];
let sumOutput = sumOfArray (numbers);
console.log(sumOutput);

function sumOfArray (numbers){
    for (const number of numbers){
        if (typeof number !== 'number'){
            return "Please enter valid number";
        }
    }

    let sum = 0;
    for (const total of numbers){
        sum = sum + total;
    }
    return sum.toFixed(2);
}
