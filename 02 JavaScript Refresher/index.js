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

// Converting combine function to arrow function
const combineArrowFunction = (a, b, c) => calculatedValue = a*b/c;

// or Expanded Arrow function
const combineArrowFunctionExpanded = (a, b, c) => {
    return calculatedValue = a*b/c;
}

// combine function with default values (if we dont give any values to a, b, c)
const combineWithDefaultValues = (a = 5, b = 10, c = 20) => {
    return calculatedValue = a*b/c;
}



const result1 = combine(5, 10, 20);
const result2 = combineArrowFunction(30, 20, 15);
const result3 = combineArrowFunctionExpanded(50, 20, 100);
const result4 = combineWithDefaultValues();

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// Coding Exercise 2: Exercise Array Methods

// 1. Your task is to add the missing logic to a transformToObjects() function 
// that should transform a list of numbers into a list of JavaScript objects.

// 2. In the newly returned array, 
// every object must have a val key and the input array's number as a value.

// 3. For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function
// should return [{val: 1}, {val: 2}, {val: 3}].

function transformToObjects(numberArray) {
    // Checking condition that Array is not undefiend and null
    if(numberArray && numberArray.length > 0){
        // const numberArrayEdited = numberArray.map((item)=>({val:item}));
        // return numberArrayEdited;

        // Newly returned array I have to double the numbers which are greater than 1
        return numberArrayEdited = numberArray.map((item) => item > 1 ? item * 2 : item);
    }
    else {
        console.log("Array is not defined or may be empty.");
    }
}

const transformedArray = transformToObjects([1, 2, 3]);
console.log(transformedArray);

// Extra Practice

// 1. Write a program to merge [123] [54321] 
// 2. Output should be [1,2,3,4,5] unique values and sorted in ascending order

const arrayFirst = [1,2,3];
const arraySecond = [5,4,3,2,1];

const mergeArray = (firstArray ,secondArray) => {
    const mergedArray = [...firstArray, ...secondArray];
    const uniqueSortedArray = [...new Set(mergedArray)].sort((a,b)=> a-b);
    console.log(uniqueSortedArray);
}

mergeArray(arrayFirst,arraySecond);