// Find the smallest number in an array.

let numbers = [50, 40, 30, 5, 25, 20, 10, 2, 10, 3,]
let theSmallestNumber = smallestNumber(numbers);
console.log(theSmallestNumber);

function smallestNumber (numberInput){
    let smallest = numberInput[1];
    for(let i = 0; i < numberInput.length; i++){
        let inputNumber = numberInput[i];
        
        if (inputNumber < smallest){
            smallest = inputNumber;
        }
    }
    return smallest;
}