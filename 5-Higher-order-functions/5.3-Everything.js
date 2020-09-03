/* Analogous to the some method, arrays also have every method. This one returns true when the given function returns
*  true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every
*  is like the && operator.
*  Implement every as a function takes an array and a predicate function as parameters. Write two versions, one using
*  a loop and one using the some method.
*/

// My solution
function every(array, test) {
    // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Solution from https://eloquentjavascript.net/code/#5.3
function every1(array, test) {

}

console.log(every1([1, 3, 5], n => n < 10));
// → true
console.log(every1([2, 4, 16], n => n < 10));
// → false
console.log(every1([], n => n < 10));
// → true
