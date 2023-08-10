// Find the second largest number from the array.


function findSecondLargest(numbers) {
    if (numbers.length < 2) {
        return "Array must have at least two numbers";
    }

    let firstLargest = Math.max(numbers[0], numbers[1]);
    let secondLargest = Math.min(numbers[0], numbers[1]);

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = numbers[i];
        } else if (numbers[i] > secondLargest && numbers[i] < firstLargest) {
            secondLargest = numbers[i];
        }
    }

    return secondLargest;
}

let numbers = [50, 40, 30, 5, 25, 20, 10, 2,49, 10, 3];
let secondLargestNumber = findSecondLargest(numbers);
console.log("The second largest number is:", secondLargestNumber);


