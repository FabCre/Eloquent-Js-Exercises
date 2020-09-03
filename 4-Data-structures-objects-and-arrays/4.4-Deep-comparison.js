/* The == operator compares objects by identity. But sometimes you'd prefer to compare the values of their actual
*  properties.
*  Write a function deepEqual that takes two values and returns true only if they are the same value or are objects
*  with the same properties, where the values of the properties are equal when compared with a recursive call to
*  deepEqual.
*  To find out whether values should be compared directly (use the === operator for that) or have their properties
*  compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
*  But you have to take one silly exception into account because of a historical accident, typeof null also produces
*  "object".
*  The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*
* */

// My solution
function deepEqual(objectOne, objectTwo) {
    if (objectOne === objectTwo) {
        return true;
    }

    if (objectOne === null || typeof objectOne !== "object" || objectTwo === null || typeof objectTwo !== 'object') {
        return false;
    }

    let objectOneKeys = Object.keys(objectOne);
    let objectTwoKeys = Object.keys(objectTwo);
    if (objectOneKeys.length !== objectTwoKeys.length) {
        return false;
    }

    for (let key of objectOneKeys) {
        if(!objectTwoKeys.includes(key) || !deepEqual(objectOne[key], objectTwo[key])) {
            return false;
        }
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

// Solution from https://eloquentjavascript.net/code/#4.4
function deepEqual1(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual1(a[key], b[key])) return false;
    }

    return true;
}

let obj1 = {here: {is: "an"}, object: 2};
console.log(deepEqual1(obj1, obj1));
// → true
console.log(deepEqual1(obj1, {here: 1, object: 2}));
// → false
console.log(deepEqual1(obj1, {here: {is: "an"}, object: 2}));
// → true
