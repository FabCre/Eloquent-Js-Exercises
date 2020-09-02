/* Chapter 2 introduced the standard function Math.min which return its smallest argument (see "Return Values" on page
*  27). We can build something like that now. Write a function min that takes two arguments and return their minimum.
*/

// My solution
function findMin(valOne, valTwo) {
    if (valOne > valTwo) {
        return valTwo;
    }
    return valOne;
}
console.log(findMin(0, 10));
// → 0
console.log(findMin(0, -10));
// → -10

// Solution from https://eloquentjavascript.net/code/#3.1
function min(a, b) {
    if (a < b) return a;
    else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
