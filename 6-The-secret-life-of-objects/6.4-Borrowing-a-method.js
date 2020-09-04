/* Earlier in the chapter i mentioned that an object's hasOwnProperty can be used as a more robust alternative to the
*  in operator when you want to ignore the prototype's properties. But what if your map needs to include the word
*  "hasOwnProperty"? won't be able to call that method anymore because the object's own property hides the method value.
*  Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/

// My solution
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map.hasOwnProperty("one"));
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true

// Solution from https://eloquentjavascript.net/code/#6.4
let map1 = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map1.hasOwnProperty("one"));
console.log(Object.prototype.hasOwnProperty.call(map1, "two"));
// → true
