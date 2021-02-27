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

/*
// array of function
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;

// loop and call all functions from array
const func = [sum, sub, times, div];
const a = 10,
    b = 20;
for (let i = 0; i < func.length; i++) {
    const result = func[i](a, b);
    console.log(`[${func[i].name}] result = ${result}`);
}
*/
/*
// Array of Arrays - multi dimensional Array
const pointTable = [
    [2, 4],
    [7, 9],
    [11, 15],
    [17, 22]
]

// one dimensional Array
for (let i = 0; i < pointTable.length; i++) {
    console.log(`point ${i} - x = ${pointTable[i][0]}, y = ${pointTable[i][1]}`);
}

// two dimensional Array
for (let i = 0; i < pointTable.length; i++) {
    for (let j = 0; j < pointTable[i].length; j++) {
        console.log(pointTable[i][j])
    }
}
*/