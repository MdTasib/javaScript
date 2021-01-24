/*
// program to check leap year using condition
function checkLeapYear(year) {
    // check condition
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(`${year} is leap year`);
    } else {
        console.log(`${year} is not leap year`)
    }
}

// take your input
const check = prompt("Enter a year : ");
checkLeapYear(check);


// program Check Leap Year Using newDate()
function checkLeapYear(year) {
    const leapYear = new Date(year, 1, 29).getDate() === 29;
    if (leapYear) {
        console.log(`${year} is leap year`);
    } else {
        console.log(`${year} is not leap year`)
    }
}
// take your input
const check = prompt("Enter your year :");
checkLeapYear(check);
*/

/*
// calculate factorial useing for loop vs while loop

// Calculate Factorial of a number using a for loop
function factorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i; // factorial = factorial * i
    }
    return factorial;
}
var result = factorial(5);
console.log(result)


// Calculate Factorial of a number using a while loop
function factorial(n) {
    var fact = 1;
    var i = 1;
    while (i <= n) {
        fact *= i; // fact = fact * i
        i++
    }
    return fact;
}
var result = factorial(5);
console.log(result);

*/