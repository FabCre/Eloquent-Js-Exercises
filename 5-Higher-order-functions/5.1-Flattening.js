/* Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that
*  has all the elements of the original arrays.
*/

// My Solution
let arrays = [[1, 2, 3], [4, 5], [6]];
const flattenReducer = (acc, curr) => acc.concat(curr);
console.log(arrays.reduce(flattenReducer, []));
// → [1, 2, 3, 4, 5, 6]

// Solution from https://eloquentjavascript.net/code/#5.1
let arrays1 = [[1, 2, 3], [4, 5], [6]];
console.log(arrays1.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]
