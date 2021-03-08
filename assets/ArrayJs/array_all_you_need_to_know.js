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

/*
// use push to insert at the end
const arrp1 = [1, 2, 3];

arrp1[arrp1.length] = 4;
arrp1.push(5);
arrp1.push(6, 7);
console.log(arrp1);

const arrp2 = [8, 9];
// (1)
// arrp1.push(arrp2);
// console.log(arrp1);

// (2)
Array.prototype.push.apply(arrp1, arrp2);
console.log(arrp1);

// (3) (es6)
// arrp1.push(...arrp2);
// console.log(arrp1);

// use unshift to insert at the beginning
const arru1 = [4, 5, 6];

arru1.unshift(3);
console.log('unshift : ', arru1);

// use splice to insert at the given index
const arrs1 = [1, 2, 3, 5, 6];
console.log('splice : ', arrs1);
arrs1.splice(3, 0, 4);
console.log('splice : ', arrs1);
*/

/*
// Array of Object
// Update Existing Elements
const students = [
    { id: 1, name: 'Tasib' },
    { id: 2, name: 'Rakib' },
    { id: 3, name: 'Rafi' },
    { id: 4, name: 'Tawrat' }
]

const givenID = 3;
const givenName = 'Shajalal Rafi';
for (let i = 0; i < students.length; i++) {
    if (givenID === students[i].id) {
        students[i].name = givenName;
        break;
    }
}
console.log(students);
*/

/*
// Concat Multiple Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);

const arr5 = [].concat(arr1, arr2);
console.log(arr5);
*/

/*
// Slice Array into Multiple Arrays
// slice

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sliceArr = arr.slice(1, 5);
console.log(sliceArr);
console.log(arr);

// clone Array
const arr1 = [1, 2, 3, 4];
const clone = arr.slice();
console.log(clone);
*/

/*
// Implement A Basic Stack
const MAX_SIZE = 30;
class Stack {
    constructor() {
        this.list = new Array(MAX_SIZE);
        this.top = -1;
    }

    push(item) {
        if (this.top >= MAX_SIZE) {
            console.log('Stack Overflow');
            return false;
        }
        this.list[++this.top] = item;
        return true;
    }
    pop() {
        if (this.isEmpty()) {
            console.log('Stack Underflow')
            return false;
        }
        let item = this.list[this.top];
        delete this.list[this.top];
        this.top--;
        return item;
    }
    peek() {
        if (this.isEmpty()) {
            console.log('Stack Underflow')
            return false;
        }
        return this.list[this.top];
    }
    isEmpty() {
        return this.top < 0;
    }
}
*/

/*
// For Each Method in Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number, index) => console.log('index number : ', index, 'value : ', number));
*/

/*
// Map Method in Array
let allPerson = [
    { id: 1, name: 'Tasib', age: 19, profession: 'Programmar' },
    { id: 2, name: 'Rafi', age: 21, profession: 'Programmar' },
    { id: 3, name: 'Rakib', age: 18, profession: 'student' },
]

allPerson.map(person => {
    console.log(person.name);
    console.log(person.age);
});

// filter Method in Array
let allPerson = [
    { id: 1, name: 'Tasib', age: 19, profession: 'Programmar' },
    { id: 2, name: 'Rafi', age: 21, profession: 'Programmar' },
    { id: 3, name: 'Rakib', age: 17, profession: 'student' },
    { id: 3, name: 'Tawrat', age: 10, profession: 'student' },
    { id: 3, name: 'Tanha', age: 23, profession: 'House wife' },
]

const person = allPerson.filter(men => men.age > 20);
console.table(person)

// Map vs Filter in Array
const students = [
    { id: 1, name: 'tasib', age: 19, roll: 16 },
    { id: 2, name: 'rafi', age: 18, roll: 11 },
    { id: 3, name: 'rakib', age: 17, roll: 12 },
    { id: 4, name: 'tawrat', age: 15, roll: 13 },
    { id: 5, name: 'tabassom', age: 14, roll: 17 },
    { id: 6, name: 'homaira', age: 11, roll: 18 },
]

const passed = students.filter(student => student.roll < 15);
const selectStudent = passed.map(value => {
    return {
        ...value,
        message: 'Your are passed'
    }
})
console.table(students);
console.table(selectStudent);
*/
/*
// Reduce *****************

// Explain reduce of an array with example
const numbers = [1, 2, 3, 4, 5, 6, 7];
const total = numbers.reduce((sum, num) => {
    return sum += num;
}, 0)
console.log('sum : ', total);

const person = [
    { name: 'tasib', age: 19, marks: 70 },
    { name: 'rafi', age: 19, marks: 80 },
    { name: 'rakib', age: 19, marks: 60 }
]
const totalMarks = person.reduce((sum, mark) => {
    return sum += mark.marks;
}, 0)
console.log('Total Marks : ', totalMarks);

/*
// Array flat method
const nestedArray = [[1, 2], 3, [4, 5]];

const flatArray = nestedArray.flat();
console.log('Flat use : ', flatArray);

const reduceArray = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr)
}, [])
console.log('Reduce use flat arr : ', reduceArray);

// Array flatMap method
const arr = [1, 2, 3, 4, 5, 6];

// map
const map = arr.map(a => [a * 2]).flat();
console.log('map : ', map)

// flatMap
const flatMap = arr.flatMap(a => a * 2);
console.log('flatMap : ', flatMap);

// reduce use faltMap
const reduceFlatMap = arr.reduce((acc, curr) => {
    return acc.concat(curr * 2)
}, [])
console.log('reduceFaltMap : ', reduceFlatMap);
*/

/*
// Example Frequency Checker
const votes = [
    'javascript',
    'python',
    'react',
    'javascript',
    'react',
    'python',
    'javascript'
];

const result = votes.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur]++
    } else {
        acc[cur] = 1
    }
    return acc
}, {})
console.table(result);
*/

/*
// Reduce Right
const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
]
const arr1 = arr.reduceRight((acc, cur) => {
    return acc.concat(cur)
}, [])
console.table(arr1);

const nums = [1, 2, 3, 4];
const sum = nums.reduceRight((acc, cur) => {
    console.log(`acc : ${acc} - cur : ${cur}`);
    return acc + cur;
}, 0)

console.log(sum);


// Reduce Array into Single Object
let products = [
    { name: 'javascript Cookbook', price: 350 },
    { name: 'Head First Python', price: 200 },
    { name: 'Head First Java', price: 400 },
    { name: 'javascript Cookbook', price: 350 },
    { name: 'Head First Java', price: 400 },
    { name: 'javascript Cookbook', price: 350 },
    { name: 'javascript Cookbook', price: 350 },
]

const invoice = products.reduce((acc, cur) => {
    if (acc[cur.name]) {
        acc[cur.name].quantity++;
        acc[cur.name].price += cur.price;
    } else {
        acc[cur.name] = {
            price: cur.price,
            quantity: 1
        }
    }
    return acc;
}, {})
console.table(invoice)

// {
//     'javascript Cookbook': {price:1400, quantity: 4},
//     'Head First Python'': {price:200, quantity: 1},
//     'Head First Java': {price:800, quantity: 2},
// }


// Matrix Sum
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// Horizontal sum
const resultH = matrix.map(row => {
    // console.log(row)
    return row.reduce((acc, cur) => acc + cur)
})
console.log(resultH)

// Vertical sum
const resultV = matrix.reduce((acc, cur) => {
    return acc.map((v, i) => cur[i] + v)
})
console.log(resultV);

// Flat sum
const resultF = matrix.reduce((acc, cur) => {
    return acc + cur.reduce((a, b) => a + b);
}, 0)
console.log(resultF);


// Map and Filter using Reduce

// map
const arr = [1, 2, 3, 4, 5, 6];
const arr1 = arr.reduce((acc, cur) => {
    acc.push(cur * cur)
    return acc
}, [])

console.log(arr1);

// Filter
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNum = num.reduce((acc, cur) => {
    if (cur % 2 === 1) {
        acc.push(cur)
    }
    return acc
}, [])

console.log(evenNum);

//  ********* //
// big array
let bigArray = [];
for (let i = 0; i < 5000000; i++) {
    bigArray.push(i)
}

// map and filter Chain --> Efficiency
console.time('Both')
bigArray.filter(v => v % 2 === 0).map(v => v * 2);
console.timeEnd('Both')

// map and filter Reduce --> Efficiency
console.time('Reduce');
bigArray.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur * 2)
    }
    return acc
}, [])

console.timeEnd('Reduce')
*/