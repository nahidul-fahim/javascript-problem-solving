// REMOVE THE DUPLICATE NAMES FROM THE ARRAY. There are several duplicate name in the array. Now remove the duplicate names and show them in a new array as output.

let names= ["sumon", "rinku", "jinku", "fahim", "nahid", "sumon", "karib", "jinku", "rinku", "karib", "emon"];

function removeDuplicate (studentNames){
    const unique = [];
    for (i = 0; i < studentNames.length; i++){
        let index = studentNames[i];
        if (unique.includes(index) === false){
            unique.push(index);
        }
    }
    return unique;
}

let uniqueNames = removeDuplicate(names);
console.log(uniqueNames);