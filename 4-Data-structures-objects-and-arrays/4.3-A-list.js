/* Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is
*  the list (not to be confused with array). A list is nested set of objects, with the first object holding a reference
*  to the second, the second to the third, and so on.
*  let list = {
*    value: 1,
*    rest: {
*      value: 2,
*      rest: {
*        value: 3,
*        rest: null
*      }
*    }
*  };
*  A nice thing about lists is that they can share parts of their structure. For example, if i create two new values
*  {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are
*  both independent lists, but they share structure that makes up their last three elements. The original list is
*  also a valid three-element list.
*  Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
*  Also write a listToArray function that produces an array from a list. Then add a helper function to prepend, which
*  takes an element and a list and creates a new list that adds the element to the front of the input list, and nth,
*  which takes a list and a number and return the element at the given position in the list (with zero referring to
*  the first element) or undefined when there is no such element. If you haven't already, also write a recursive
*  version of nth.
*/

// My Solution
function arrayToList(array) {
    let list = null;
    array.reverse().forEach(element => list = {value: element, rest: list});
    return list;
}

function listToArray(list) {
    let array = [];
    for (let i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

function prepend(element, list) {
    return {value: element, rest: list}
}

function nth(list, num) {
    if (!list) {
        return undefined;
    } else if (num === 0) {
        return list.value;
    } else {
        return nth(list.rest, num - 1);
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30, 40]), 3));
// → 40

// Solution from https://eloquentjavascript.net/code/#4.3
function arrayToList1(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray1(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend1(value, list) {
    return {value, rest: list};
}

function nth1(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList1([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray1(arrayToList1([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend1(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth1(arrayToList1([10, 20, 30]), 1));
// → 20
