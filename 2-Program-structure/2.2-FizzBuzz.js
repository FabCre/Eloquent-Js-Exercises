/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
*  For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print
*  "Buzz" instead.
*  When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
*  (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// My solution
function isDivisibleByThree(num) {
    return num % 3 === 0;
}

function isDivisibleByFive(num) {
    return num % 5 === 0;
}

function isDivisibleByThreeAndFive(num) {
    return isDivisibleByThree(num) && isDivisibleByFive(num);
}

for (let num = 1; num < 101; num++) {
    if (isDivisibleByThreeAndFive(num)) {
        console.log("FizzBuzz")
    } else if (isDivisibleByThree(num)) {
        console.log("Fizz");
    } else if (isDivisibleByFive(num)) {
        console.log("Buzz");
    } else {
        console.log(num)
    }
}

// Solution from https://eloquentjavascript.net/code/#2.2
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
