/*
// Array Constructor vs Factory
// Constructor Patten
const arr1 = new Array(1, 2, 3);
console.log('Constructor : ', arr1, 'length : ', arr1.length);

// Factory Patten
const arr2 = Array(1, 2, 3);
console.log('Factory : ', arr2, 'langth : ', arr2.length);
*/


/*
// Traverse Array Elements
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// simple array traverse
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// array sum
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
}
console.log(sum);

// large number
const numbers = [1, 4, 2, 6, 8, 44, 23, 5, 73];

let largeNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largeNumber) {
        largeNumber = numbers[i]
    }
}
console.log(largeNumber);
*/