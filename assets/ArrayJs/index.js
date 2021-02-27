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