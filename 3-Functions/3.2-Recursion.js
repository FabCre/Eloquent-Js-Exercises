/* We've seen that % (the reminder operator) can be used to test whether a number is even or odd by using % 2 to see
*  whether it's divisible by two. Here's another way to define whether a positive whole number is even or odd:
*  - Zero is even.
*  - One is odd.
*  - For any other number N, its evenness is the same as N -2.
*  Define a recursive function isEven corresponding to this description.
*  The function should accept a single parameter (a positive, whole number) and return a boolean.
*  Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// My Solution
function isEvenNumber(num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num < 0) {
        return isEvenNumber(-num);
    } else {
        return isEvenNumber(num - 2);
    }
}

console.log(isEvenNumber(50));
// → true
console.log(isEvenNumber(75));
// → false
console.log(isEvenNumber(-1));
// → false
console.log(isEvenNumber(-2));
// → true

// Solution from https://eloquentjavascript.net/code/#3.2
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
