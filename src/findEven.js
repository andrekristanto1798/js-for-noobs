/**
 * This implementation shows you how to push all the even number into a new array only for even number
 *
 * Your next task after running this (by using `node src/findEvent.js`) is to create
 * 1. A new file called `findOddOrMultiplyOf4.js`
 * 2. Implement the same initial array which is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 3. Filter out the initial array by either it is an odd number or multiply of 4
 */

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumberArray = [];

let arrayLength = numberArray.length;

for (let i = 0; i < arrayLength; i += 1) {
  let number = numberArray[i];
  if (number % 2 == 0) {
    // if number mod 2 is equal to 0
    evenNumberArray.push(number);
  }
}

console.log(evenNumberArray);
