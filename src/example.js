// Basic DS
let array = [1, 2, 3];

console.log('Previous: ' + array);

const arrayLength = array.length;

// This loop will add each element in the array by 5
for (let i = 0; i < arrayLength; i += 1) {
  array[i] += 5;
}

console.log('After: ' + array);
