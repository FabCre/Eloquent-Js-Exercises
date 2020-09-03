/* Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this
*  exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as
*  argument and produces a new array that has the same elements in the inverse order. The second, reversArrayInPlace,
*  does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may
*  use the standard reverse method.
*  Thinking back to the notes about side effects and pure functions in "Functions and Side Effects" on page 54, which
*  variant do you expect to be useful in more situations? Which one run faster?
*/

// My Solution
function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    const oldArray = [...array];
    for (let i = 0; i < array.length; i++) {
        array[array.length - 1 - i] = oldArray[i];
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// Solution from https://eloquentjavascript.net/code/#4.2
function reverseArray1(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace1(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray1(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue1 = [1, 2, 3, 4, 5];
reverseArrayInPlace1(arrayValue1);
console.log(arrayValue1);
// → [5, 4, 3, 2, 1]
