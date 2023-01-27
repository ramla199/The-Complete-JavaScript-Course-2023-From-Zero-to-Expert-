// Function Challenge 1:
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//  - be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

//Outputs 
// isValidPassword('89Fjj1nms','dogLuvr'); //true
// isValidPassword('dogLuvr123!','dogLuvr'); //false

function isValidPassword(password,username){
 return !password.length < 8 && !password.includes(' ') && !password.includes(username)
}
// console.log(isValidPassword('dogLuvr123!','dogLuvr'));

// Function Challenge 2:
// Write a function to find the average value in an array of numbers
//output:
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(numArr) {
    let average=0;
    for(num of numArr){
        average += num;
    }
    return average / numArr.length;
}
// console.log(avg([75,76,80,95,100]));

// Function Challenge 3:
// A Pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignoe string casing!

//output:
//isPangram('The five boxing wizards jump quickly') //true
//isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){ return lowerCased.includes(char);
    }
}
// needs review 
// console.log(isPangram('The five boxing wizards jump quick'))

//Function Challenge 4:
//Write a getCard() function which return a random playing card object, like
// {
//     value: 'K',
//     suit: 'clubs'
// }
// Pick a random value from:
// ----1,2,3,4,5,6,7,8,9,10,J,K,Q,A
// Pick a random suit from:
// ----clubs,spades,hearts,diamonds
// Return both in an object
Math.floor
function getCard() {
    const value = [1,2,3,4,5,6,7,8,9,'J','K','Q','A']
    const suit = ['clubs', 'spades', 'hearts', 'diamonds'];

    const obj = {
        value: value[Math.floor(Math.random() * value.length)],
        suit: suit[Math.floor(Math.random() * suit.length)]
    }
    return obj
}
//  console.log(getCard());
