/**
 * Basic Data Structure
 *
 * In this chapter, we will learn about types of primitive data used in JavaScript
 *
 * 1. Number (or known as Integer)
 * 2. Float
 * 3. String
 * 4. Boolean
 * 5. Array
 * 6. Boolean (will be explained in `Chapter 2 - Branch & Loop`)
 */

/**
 * To print something in the log
 *
 * console.log(<variable>)
 */

/**
 * Variable Assignment & Logging
 *
 * To note, in JavaScript, in assigning a variable you do not need to specify the type of the data
 * If you learn C before, you may notice that every assignment need to specify the type
 * In JavaScript, it will automatically detect the type itself
 *
 * [Number]
 * let exNum = 10
 * let exNegativeNum = -5
 *
 * Operator supported: +, -, *, /, % (modulo)
 *
 * [Float]
 * let exFloat = 123.14
 * let exNegativeFloat = -5.213
 *
 * Operator supported: +, -, *, /
 *
 * [String] Can be expressed with "", '', or ``
 * let exString = "Test String"
 * let exStringWithSingleQuote = 'Test String'
 * let exStringWithAccent = `Test String`
 *
 * Operator supported:
 * - Access by position: In String data structure, it starts with index 0 which means the first character in the string.
 *   To access it,
 *   console.log(exString[0]) // 'T'
 *   console.log(exString[1]) // 'e'
 * - Concatenation between String and another primitive types (ex: Number, Float, String, Array)
 *   console.log(exString + exNum) // 'Test String10'
 *   console.log(exString + exNegativeNum) // 'Test String-5'
 *   console.log(exString + ' ' + exNegativeNum) // 'Test String -5'
 * - ... so on (will be explained later in the Chapter `String`)
 *
 * [Array] Array can contain any types which is identified by its index (similar to how string works)
 * let exArrayWithNumber = [1,2,3]
 * let exArrayWithString = ["Andre", "Kristanto"]
 * let exArrayWithAnyType = [17, 6, 1998, "Andre", "Kristanto"]
 *
 * Operator supported:
 * - Access by position: Similar to String
 *   To access it,
 *   console.log(exArrayWithNumber[0] + exArrayWithNumber[1]) // 3
 *   console.log(exArrayWithAnyType[4] + exArrayWithAnyType[4]) // KristantoKristanto
 * - To add or override the value
 *   exArrayWithNumber[3] = 5 // exArrayWithNumber = [1,2,3,5]
 *   exArrayWithNumber[100] = 5 // exArrayWithNumber = [1,2,3,5, ...96 empty , 5]
 * - To add with another variable or object (using `push` method)
 *   exArrayWithString.push('new1', 'new2') // exArrayWithString = ["Andre", "Kristanto", 'new1', 'new2']
 *
 *   You can also push with another array but look at the result
 *   exArrayWithString.push(['new3', 'new4']) // exArrayWithString = ["Andre", "Kristanto", 'new1', 'new2', ['new3', 'new4']]
 * - To add with another array
 *   exArrayWithString = exArrayWithString.concat(['new3', 'new4'])
 *   You may confuse why adding a new array need new assignment of `exArrayWithString`. Here is the reason why
 *   An array using concat method will not update the array itself but returns the result
 *   of the method which is the addition of the first array with the second array.
 *   That's why you need to assign the result of `concat` method to the `array` you want to update
 *
 *   Fun fact about `push`, `push` method in array will update the array itself and returns the new length of the array
 *
 *   exNewArray = []
 *   exNewArray.push(5) // returns 1 which is the new length of the exNewArray, and exNewArray now is equal to [5]
 *   exNewArray.concat([1,2]) // returns [5,1,2] which is the result of concat method, and exNewArray is still equal to [5]
 *   exNewArray = exNewArray.concat([1,2]) // will assign the [5,1,2] to exNewArray
 */
