// Take an array of numbers. Now using the "onlyPositive" function run a loop and add the positive numbers into a new array. The loop will stop if it finds a negative number into the first array.


let numbers = [10, 13, 17, 7, 15, -20, 5, 8, -16, 0, 8];
let positiveNumbers = onlyPositive(numbers);
console.log(positiveNumbers);



function onlyPositive (inputNumber){
    const findPositive = [];
    for (let i = 0; i < inputNumber.length; i++){

        let outputNumbers = inputNumber[i];

        if(outputNumbers >= 0){
            findPositive.push(outputNumbers);
        }
        else {
            break;
        }
    }
    return findPositive;
}