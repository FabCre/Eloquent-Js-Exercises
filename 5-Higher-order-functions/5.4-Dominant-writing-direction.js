/* Write a function that computes the dominant writing direction in a string of text. Remember that each script object
*  has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
*  The dominant direction is the direction of a majority of the characters that have a script associated with them.
*  The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/

// My solution
function dominantDirection(text) {
    // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

// Solution from https://eloquentjavascript.net/code/#5.4
function dominantDirection1(text) {
    // Your code here.
}

console.log(dominantDirection1("Hello!"));
// → ltr
console.log(dominantDirection1("Hey, مساء الخير"));
// → rtl
