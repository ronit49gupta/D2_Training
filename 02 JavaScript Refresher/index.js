// Coding Exercise 1: Working with functions

// 1. Your task is to write a new function that should be named combine 
// and have the following characteristics:

// 2. Accept three input values

// 3. Calculate a new value based on the three input values: a * b / c. 
// (if a, b & c are the input values)

// 4. Return the calculated result

function combine(a, b, c){
    const calculatedValue = a*b/c;
    return calculatedValue;
}

const result1 = combine(5, 10, 20);
const result2 = combine(30, 20, 15);
console.log(result1);
console.log(result2);


// Coding Exercise 2: Exercise Array Methods

// 1. Your task is to add the missing logic to a transformToObjects() function 
// that should transform a list of numbers into a list of JavaScript objects.

// 2. In the newly returned array, 
// every object must have a val key and the input array's number as a value.

// 3. For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function
// should return [{val: 1}, {val: 2}, {val: 3}].

function transformToObjects(numberArray) {
    const numberArrayEdited = numberArray.map((item)=>({val:item}));
    return numberArrayEdited;
}

const transformedArray = transformToObjects([1, 2, 3]);
console.log(transformedArray);