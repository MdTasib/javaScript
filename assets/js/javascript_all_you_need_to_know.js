// // ********** javaScript all you needs to know *********** // //

/*
// ===== operator ====== //
// Arithmetic Operators ------->
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

// Assignment Operators
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y

//Comparison Operators
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

//Logical Operators
&&	logical and
||	logical or
!	logical not
/*
var a = 10;
var b = 20;
var c = 30;
var d = 40;

// and && operator
if(a > b && c > d) {
    console.log('a is geater then b and c is geater then d')
}else {
    console.log('at least one condition is false')
}

// or || operator
if(a > b || c > d) {
    console.log('a is geater then b and c is geater then d')
}else {
    console.log('at least one condition is false')
}

// not ! operator
var check = !(a > b) // this is false but print in true. because using ! operator
console.log(check)
var check = !!(a > b)
console.log(check)
*/

/*
//Type Operators
typeof -->	Returns the type of a variable
instanceof -->	Returns true if an object is an instance of an object type
*/

// date function
/*
var date = new Date();
console.log(date.getFullYear());
console.log(date.toDateString());
*/

// ======= condition ======= //
// how to use if conditon
/*
var x = 8;
if(x % 2 == 1) {
    console.log('this is odd number')
}
if(x % 2 == 0) {
    console.log('this is even number')
}
*/

// how to use else
/*
var x = 8;
if(x % 2 == 1) {
    console.log('this is odd number')
}else{
    console.log('this is even number')
}
*/

// how to use else if
/*
var x = 0;
if(x == 0) {
    console.log('this is zero')
} else if(x % 2 == 1) {
    console.log('this is odd number')
} else {
    console.log('this is even')
}
*/

/*
// how to use switch statement
var date = new Date()
var toDay = date.getDay()

// ---> 0: sunday 1: monday 2: tuesday .....

switch (toDay) {
    case 0:
        console.log('Today is Sunday')
        break;
    case 1:
        console.log('Today is Monday')
        break;
    case 2:
        console.log('Today is Tuesday')
        break;
    case 3:
        console.log('Today is Wednesday')
        break;
    case 4:
        console.log('Today is Thursday')
        break;
    case 5:
        console.log('Today is Friday')
        break;
    case 6:
        console.log('Today is Saturday')
    default:
        console.log('This is not a valid date')
}
*/

/*
// how to use ternary operator
var n = 4
var str = ''

if(n % 2 === 1) {
    str = 'this is odd number'
} else {
    str = 'this is even number'
}
console.log(str)

// same that // useing ternary operator
str = n % 2 === 1 ? 'this is odd number' : 'this is even number'
console.log(str)
*/

// ******** Loops ******** //

// how to use for loop
// for(initializer; condition; update {
// }
// for(var i = 0; i < 100; i++) {
//     console.log((i + 1) + ' Ohidul alam')
// }

// 1+3+5+7+....99 --> task
// for(var i = 0; i < 100; i++) {
//     if(i % 2 == 1) {
//         var evenNumber = i;
//         console.log(evenNumber)
//     }
// }
// var sum = i + evenNumber;
// console.log('Even Numver : ' + sum)

// how to use while loop
// var isRunning = true
// while(isRunning) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if(rand == 9) {
//         console.log('win')
//         isRunning = false
//     } else {
//         console.log('you have got ' + rand)
//     }
// }

// how to use do while loop
// var isRunning = false
// // only while
// while(isRunning) {
//     console.log('I am runing only while loop')
// }
// do {
//     console.log('I am runing only do while loop')
// } while(isRunning)

// how to use nested loop
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// var n = 20
// for(var i = 1; i <= n; i++) {
//     var result = ''
//     for(var x = 1; x <= i; x++) {
//         result += x + ' '
//     }
//     console.log(result)
// }

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// var starNumber = 5
// for(var i = 1; i <= starNumber; i++) {
//     var result = ''
//     for(var j = 1; j <= starNumber; j++) {
//         result += '* ' // result = result + *
//     }
//     console.log(result)
// }

// how to use break statement
// while(true) {
//     var rand = Math.floor(Math.random()* 10 + 1)
//     if(rand == 9) {
//         console.log('win')
//         break
//     }else {
//         console.log('you have got ' + rand)
//     }
// }

// for(var i = 1; i <= 20; i++) {
//     if(i%5 == 0) {
//         break
//     }else {
//         console.log(i)
//     }
// }

// how to use continue statement
// for(var i = 1; i < 10; i++) {
//     if (i == 3 || i == 7) {
//         continue
//     } else {
//         console.log(i)
//     }
// }

// how to convert number to string
// var n = 10 // this is a number
// console.log(n)
// var str = n + ''
// console.log(str)
// var str1 = String(n)
// console.log(str1)
// var str2 = n.toString()
// console.log(str2)

// how to check string lenght
// var str = 'hello world'
// var length = 0

// while(true) {
//     if(str.charAt(length) == '') {
//         break
//     } else {
//         length++
//     }
// }
// console.log(length)
// var hey = 'hey do you free today?'
// console.log(hey.length)
// console.log('hello world how are you?'.length)

// how to use array ---> how to declare array
// var srr = [1, 2, 3, 4, 5]
// console.log(srr)
// srr[5] = 6
// console.log(srr)
// srr[9] = 10
// console.log(srr)
// srr[0] = 0
// console.log(srr)

// var newArray = Array(1, 2, 3)
// console.log(newArray)

// traverse an array
// var arr = [5, 4, 1, 5, 2]

// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     arr[i] = arr[i] + 2
// }
// console.log(arr)

// var sum = 0
// for(var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)

// for(var i = 0; i < arr.length; i++) { // even number useing traverse array
//     // console.log(arr[i])
//     if(arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
// }

// how to insert and remove useing in array
// var number = [1, 2, 3, 4, 5]
// number.unshift(0)
// number.push(99)
// number.splice(3, 0, 22, 23) // insert
// number.splice(3, 1)//remove
// console.log(number)

// dimensional array

// var arr = [
//     [1, 2, 3, 4],
//     [11, 12, 13, 14],
//     [21, 22, 23, 24]
// ]

// for(var i = 0; i < arr.length; i++) {
//     for(var j = 0; j < arr[i].length; j ++) {
//          console.log(arr[i][j])
//     }
// }

// var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.reverse())
// for(var i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i])
// }

// for(var i = 0; i <(arr.length / 2); i++) {
//     var temp = arr[i]
//     arr[i] = arr[arr.length-1 - i]
//     arr[arr.length-1 - i] = temp
// }

// console.log(arr)

// useing array methods
// var a = [1, 2]
// // var b = a // this is wrong way
// var b = Array.from(a)
// b[0] = 3
// console.log(a)
// console.log(b)

// var arrOne = [1, 2, 3]
// var arrTwo = [4, 5, 6]
// var arr = arrOne.concat(arrTwo)
// console.log(arr)

// var arrMethods = [1, 2, 3, 4]
// var arr = (arrMethods.join(', ')) // ' ', ' | ', 'any number', 'string', something
// console.log(arr)

// ******* object ******* //
// introduction in object
// object --> 1. literal object, 2. constructor object
// how to use literal object
// var literalObj = {
//     x: 10,
//     y: 20
// }
// literalObj.z = 30 // adding
// console.log(literalObj)

// how to use constructor object
// var construcObj = Object()
// construcObj.a = 111
// console.log(construcObj)

// var construcObjTwo = new Object()
// construcObjTwo.b = 222
// console.log(construcObjTwo)

// string object properties
// var obj = {
//     a: 11,
//     b: 22,
//     c: 33
// }
// console.log(obj)
// obj['a'] = 111
// console.log(obj)
// obj.d = 44
// console.log(obj)

// comparing object
// var objOne = {
//     a: 1,
//     b: 2
// }
// var objTwo = {
//     a: 1,
//     b: 2
// }

// ---> first way
// if(objOne.a == objTwo.a && objOne.b == objTwo.b) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// ---> second way
// console.log(JSON.stringify(objOne) == JSON.stringify(objTwo))
// if(JSON.stringify(objOne) == JSON.stringify(objTwo)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// how to use traverse / iterate in object
// var obj = {
//     a: 2,
//     b: 4,
//     c: 5,
//     d: 6
// }
// // console.log(obj)
// // console.log('a' in obj) // check

// for(var i in obj) {
//     console.log(i)// key
//     console.log(obj[i])// value
//        console.log(i + ' : ' + obj[i])
// }

// how to use object methods
// var obj = {
//     a: 1,
//     b: 2,
//     c: 4
// }
// console.log(obj)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// how to same object create
// wrongly
// var objTwo = obj
// objTwo.a = 11
// console.log(obj)
// console.log(objTwo)

// right way
// var objTwo = Object.assign({}, obj)
// objTwo.a = 11
// console.log(obj)
// console.log(objTwo)

// // ********** Function ********** // //
// function hey() {
//     console.log('Hey! Do you free to day?')
// }
// hey()

// sum of array value
// var arr1 = [1, 2, 3],
// arr2 = [3, 4, 5],
// arr3 = [5, 6, 3]

// sum = 0
// function sumOfarray(arr) { // sumOfarray(arr ----> this is variable)
//     for(var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]// sum += arr[i]
//     }
//     console.log(sum)
// }
// sumOfarray(arr1)
// sumOfarray(arr2)

//argument object
// function hello(a, b, c) {
//     console.log(arguments)
// }
// hello(1, 2, 3)

// sum = 0
// function sumAll() {
//     for(var i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]
//     }
//     console.log(sum)
// }
// sumAll(1, 3) // 4

// how to use return
// sum = 0
// function sumAll() {
//     for(var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
//     // console.log('hello world'); // return er down a code write korle segolo kaj korena
// }
// var a = sumAll(1, 3) // return use korle varialbe create korte hoi
// console.log(a)

// anonimas function
// var anonimas = function(a, b) {
//     return a + b
// }
// console.log(anonimas(2, 3)) // ans: 5

// setTimeout(function() {
//     console.log('hello world')
// }, 2000)

// split method
// var name = 'hello world'
// var hello = name.split(' ')[0]
// console.log(hello)

// inner function
// function something(greet, name) {
//     function sayHi() {
//         console.log(greet, name)
//     }
//     sayHi()
// }
// something('Hello World', 'Ohidul alam')

// function first(greet, name) {
// 	function second() {
// 		if (name) {
// 			return name.split(' ')[0];
// 		} else {
// 			return '';
// 		}
// 	}
// 	var message = greet + ' ' + second();
// 	console.log(message);
// }
// first('Good Morning', 'Ohidul Alam Tasib');

// function number(n) {
// 	function a() {
// 		return n % 3 == 0;
// 	}

// 	function b() {
// 		return n % 5 == 0;
// 	}

// 	if (a() && b()) {
// 		console.log(n + ': 3 and 5 void');
// 	} else {
// 		console.log('wrong');
// 	}
// }
// number(15);

// // ********* Functional programming ********* // //
// pure function
// function sqr(n) {
// 	return n * n;
// }
// console.log(sqr(3));

// first class function
// a function can be stored in a variable
// function add(a, b) {
// 	return a + b;
// }
// var sum = add;
// console.log(sum(1, 3));

// // a function can be stored in a array
// var arr = [];
// arr.push(add);
// console.log(arr);
// console.log(arr[0](2, 3));

// // a function can be stored in a object
// var obj = {
// 	sum: add,
// };
// console.log(obj);
// console.log(obj.sum(2, 4));
// // we can create function as need

// setTimeout(function () {
// 	console.log('Created a function..');
// }, 200);
// we can pass function as an arguments
// we can return function from another function

// // *********** closure ********* // //
// bairer data onno function er vitor call korle take closure bole...
// var x = 5;
// function a() {
// 	console.log(x);
// }
// a();

// function x() {
// 	var hello = 1;
// 	function y() {
// 		console.log(hello);
// 	}
// 	y();
// }
// x();

// // ********** callback function ********* // //

// function sample(a, b, cd) {
// 	var c = a + b; // 6
// 	var d = a - b; // -2
// 	var result = cd(c, d);
// 	return result;
// }

// function sum(a, b) {
// 	return a + b; // 6 + (-2) = 4
// }
// var output = sample(2, 4, sum);
// console.log(output);

// var outputTwo = sample(2, 4, function (x, y) {
// 	return x - y;
// });
// console.log(outputTwo);

// var outputThree = sample(2, 4, function (i, j) {
// 	return i * j;
// });
// console.log(outputThree);

/** @format */

// forEach function
// var arr = [1, 2, 3, 4, 5];

// var sum = 0;
// arr.forEach(function (value, index, arr) {
// 	// console.log(value, index, arr);
// 	sum += value; // value = 1,2,3,4,5
// });
// console.log(sum);

// how to implement forEach function
// function myCreateforEach(abc, xy) {
// 	for (var i = 0; i < abc.length; i++) {
// 		xy(arr[i], i, arr);
// 	}
// }
// sum = 0;
// myCreateforEach(arr, function (value, index, arr) {
// 	console.log(value, index, arr);
// 	sum += value;
// });
// console.log(sum);

// // change arr[1,2,3,4,5] = arr[3, 4, 5, 6, 7]
// myCreateforEach(arr, function (value, index, arr) {
// 	arr[index] = value + 2;
// });
// console.log(arr);

// what is map function
// var arr = [1, 2, 3];

// var sqrArr = arr.map(function (value) {
// 	return value * value;
// });
// console.log(arr);
// console.log(sqrArr);

// implement map function
// var arr = [1, 2, 3];

// function myMap(arr, cb) {
// 	newArr = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		// var temp = arr[i] * arr[i];
// 		var temp = cb(arr[i]); // or var temp = cb(arr[i], i, arr)
// 		newArr.push(temp);
// 	}
// 	return newArr;
// }
// // console.log(arr);
// // console.log(myMap(arr));
// console.log(arr);
// var qb = myMap(arr, function (value) {
// 	return value * value;
// });
// console.log(qb);

// var mten = myMap(arr, function (value) {
// 	return value + 10;
// });
// console.log(mten);

// filter function
// how to use filter function
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// var filterArr = arr.filter(function (x) {
// 	// return x % 2 == 0;
// 	// return x % 2 == 1;
// 	// return x < 5;
// 	// return x > 5;
// });
// console.log(filterArr);

// how to implement in filter function
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var myFilter = function (arr, cb) {
// 	var newArr = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (cb(arr[i], i, arr)) newArr.push(arr[i]);
// 	}
// 	return newArr;
// };

// var odd = myFilter(arr, function (value) {
// 	return value % 2 == 0;
// });
// console.log(odd);

// var even = myFilter(arr, function (value) {
// 	return value % 2 == 1;
// });
// console.log(even);

// how to use reduce function
// var arr = [1, 2, 3, 4, 5, 6];

// var sum = arr.reduce(function (x, y) {
// 	return x + y; // 21
// }, 100); // 21 + 100 = 121

// var max = arr.reduce(function (x, y) {
// 	return Math.max(x, y);
// }, 0);

// console.log(sum);
// console.log(max);

// how to implement reduce function
// var arr = [1, 2, 3, 4, 5]

// function myReduce(arr, callback, accumolator) {
// 	for (var i = 0; i < arr.length; i++) {
// 		accumolator = callback(accumolator, arr[i])
// 	}
// 	return accumolator
// }
// var sum = myReduce(
// 	arr,
// 	function (x, y) {
// 		return x + y
// 	},
// 	0
// )
// console.log(sum)

// var qb = myReduce(
// 	arr,
// 	function (x, y) {
// 		return x * y
// 	},
// 	arr[0]
// )
// console.log(qb)

// how to use find and findIndex function
// var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// var result = arr.find(function (value) {
// 	return value === 5 // return value === 44 --> undefind
// })
// console.log(result)

// var result = arr.findIndex(function (index) {
// 	return index === 5 // only index number print
// })
// console.log(result)

// how to implement find and findIndex function
// var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function myFind(arr, cb) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (cb(arr[i])) {
// 			return arr[i] // only value print
// 			// return i // only index number print
// 		}
// 	}
// }

// var result = myFind(arr, function (value) {
// 	// return value === 55 // undefind
// 	return value === 5
// })
// console.log(result)

// how to use sort function
// var arr = [1, 8, 5, 2, 4, 3, 9, 7]
// arr.sort()
// console.log(arr)

// var arr = [-3, -1, 1, -2, 8, 5, 2, 4, 3, 9, 7]
// arr.sort()
// console.log(arr) // [-1, -2, -3, 1, 2, 3, 4, 5, 7, 8, 9] it's wrong

// var arr = [-3, -1, 1, -2, 8, 5, 2, 4, 3, 9, 7]

// arr.sort(function (a, b) {
// 	if (a > b) {
// 		return 1
// 	} else if (a < b) {
// 		return -1
// 	} else {
// 		return 0
// 	}
// })
// console.log(arr) //[-3, -2, -1, 1, 2, 3, 4, 5, 7, 8, 9] it's right answer

// // same that
// var persons = [
// 	{
// 		name: 'A',
// 		age: 30,
// 	},
// 	{
// 		name: 'B',
// 		age: 20,
// 	},
// 	{
// 		name: 'C',
// 		age: 40,
// 	},
// 	{
// 		name: 'D',
// 		age: 10,
// 	},
// ]

// persons.sort(function (a, b) {
// 	if (a.age > b.age) {
// 		return 1
// 	} else if (a.age < b.age) {
// 		return -1
// 	} else {
// 		return 0
// 	}
// })
// console.log(persons)

// how to use every function
// jodi kono negative number take print korbe false, onnotai ture
// var arr = [1, 2, 3, 4, 6, 8, 5, 4] //var arr = [1,2,3,4,6,8,5,4,-1]

// var resOne = arr.every(function (value) {
// 	return value % 2 === 0 // false
// })
// console.log(resOne)

// var resTwo = arr.every(function (value) {
// 	return value >= 0
// })
// console.log(resTwo)

//how to use some function
// var arr = [1, 2, 3, 4, 5, 6, 7, 1]
// var resThree = arr.some(function (value) {
// 	return value % 2 === 0
// })
// console.log(resThree)
// var resFour = arr.some(function (value) {
// 	return value < 0
// })
// console.log(resFour)

// how to return a function from another function
// function base(b) {
// 	return function (n) {
// 		var result = 1
// 		for (var i = 0; i < b; i++) {
// 			result *= n
// 		}
// 		return result
// 	}
// }
// var base2 = base(2)
// console.log(base2(3)) // 3*3

// how to use recursive
// for loop er motoi kaj kore. 'Hello world' 10 bar print koraite hole...
// function sayHi(n) {
//  if(n == 0){
//      return
//  }
//  console.log("Hello World")
//  sayHi(n - 1)// importent--> every time 1 kore mainas korte kore, onnotai infinity hoa jabe// nirdisto function a first time call kortei hobe
// }
// sayHi(10)

// 1 + 2 + 3.....10
// function sum(n) {
//  if(n == 1) {
//      return 1
//  }
//  return n + sum(n - 1)
// }
// console.log(sum(5)) // 15

// 1*2*3 = 6
// function fact(x) {
//  if(x === 1) {
//      return 1
//  }
//  return x * fact(x - 1)
// }
// console.log(fact(3))

// var arr = [1, 2, 3, 4, 5]
// function sumOfArray(arr, indexNumber) {
//  if(indexNumber < 0) {
//      return 0
//  }
//  return arr[indexNumber] + sumOfArray(arr, indexNumber - 1)
// }
// console.log(sumOfArray(arr, arr.length - 1))
