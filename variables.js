// To initialize a variable, you can use keyword var, let, or const
// let and const are only available in ES6

// Before accessing a variable, you must declare it.
// Declaration can be made without initial value
var variable1;
var angka;



// or with an initial value.
// This combines both declaration and assignment.
let variable2 = 0;

// In javascript, there are a few naming conventions that variables follow
// 1. Names should begin with lowercase string.
// 2. Names cannot contain symbols or begin with symbols.
// 3. Names cannot start with a number.
// 4. Names can use uppercase, lowercase, numbers, or mix of them

// Valid variable names
var hello;
var blackCat;
var cat3;

// Invalid variable names
var 1girl;
var #person;

// let has scope constraint, unlike var. Otherwise they are the same.
// const variables cannot be reassigned.
// const is also limited to the scope it is declared.
// A variable declared with const MUST have an initial value.

// WHAT TO USE?
// It's now a good practice to not use var when declaring variables
// Use const when the value will never be reassigned
// Use let when the value may be changing