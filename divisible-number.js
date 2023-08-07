// Find out the numbers in (1-50) that are divisible by 3, 5 and both 3 & 5 and show "divisible by 3", "divisible by 5" and "divisible by both 3 & 5" respectively instead of the numbers.


for (i = 1; i < 51; i++){
    let number = i;
    if(number % 3 === 0 && number % 5 === 0){
        console.log("divisible by both 3 & 5");
    }
    else if (number % 3 === 0){
        console.log("divisible by 3");
    }
    else if (number % 5 === 0){
        console.log("divisible by 5");
    }
    else {
        console.log(number);
    }
}