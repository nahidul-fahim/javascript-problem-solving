






// Take an array of you friend's name. Now using the "bestFriend" function, show the longest friend name.



let friends = ["Nahidul Fahim", "Abdur Rahman", "Abdul Razzaq", "Shahriar Karib", "Nazmul Islam", "Parvez Karim", "Imtiaz Hossain"];

let longestFriendName = bestFriend(friends);
console.log("The longest:" + ' ' + longestFriendName.join(", ")); // I had to do this method to add all the names if there are more than one name of the same longest length


function bestFriend(inputFriendNames){
    let longestNameLength = 0;
    let longestNames = [];

    for(let i = 0; i < inputFriendNames.length; i++){
        let friends = inputFriendNames[i];
        if (friends.length > longestNameLength){
            longestNameLength = friends.length
            longestNames = [friends];
        }
        else if (friends.length === longestNameLength){
            longestNames.push(friends);
        }
    }
    return longestNames;
}
