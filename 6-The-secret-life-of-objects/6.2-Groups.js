/* The standard Javascript environment provides another data structure called Set. Like an instance of Map, a set holds
*  a collection of values. Unlike Map, it does not associate other values with those---it just tracks which values are
*  part of the set. A value can be part of a set only once--- adding it again doesn't have any effect.
*  Write a class called Group (sinceSet is already taken). Like Set, it has add, delete, and has methods. Its
*  constructors creates an empty group, add adds a value to the group (but only if it isn't already a member), delete
*  removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its
*  argument is a member of the group.
*  Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
*  Give the class a static from method that takes an iterables object as argument and creates a that contains all the
*  values produced by iterating over it.
*/

// My solution
class Group {
    // Your code here.
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Solution from https://eloquentjavascript.net/code/#6.2
class Group1 {
    // Your code here.
}

let group1 = Group1.from([10, 20]);
console.log(group1.has(10));
// → true
console.log(group1.has(30));
// → false
group1.add(10);
group1.delete(10);
console.log(group1.has(10));
// → false
