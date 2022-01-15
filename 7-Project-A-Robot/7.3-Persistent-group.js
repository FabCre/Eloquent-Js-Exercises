/* Most data structures provided in a standard JS environment aren't very well
*  suited for a persistent use. Arrays have slice and concat methods, which allow us to
*  easily creates new arrays without damaging the old one. But Set, for example, has no
*  methods for creating a new set with an item added or removed.
*
*  Write a new class PGroup, similar to the Group class from Chapter 6, which stores a
*  set of values. Like Group, it has add, delete, and has methods.
*
*  Its add method, however, should return a new PGroup instance with the given member
*  added and leave the old one unchanged. Similarly, delete creates a new instance
*  without a given member.
*
*  The class should work for values of any type, not just strings. It does not have to
*  be efficient when used with large amounts of values.
*
*  The constructor shouldn't be part of the class's interface (though you'll definitely
*  want to use it internally). Instead, there is an empty instance, PGroup.empty, that
*  can be used as a starting value.
*
*  Why do need only one PGroup.empty value, rather than having a function that creates
*  a new, empty map every time ?
*
*  Hint: The most convenient way to represent the set of member values is still as an
*  array since arrays are easy to copy.
*  When a value is added to the group, you can create a new group with a copy of the
*  original array that has the value added (for example, using concat). When a value is deleted, you filter it from the array.
*  The class’s constructor can take such an array as argument and store it as the
*  instance’s (only) property. This array is never updated.
*  To add a property (empty) to a constructor that is not a method, you have to add it
*  to the constructor after the class definition, as a regular property.
*  You need only one empty instance because all empty groups are the same and instances
*  of the class don’t change. You can create many different groups from that single empty
*  group without affecting it.
*/

// My Solution
class PGroup {
    // Your code here
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false

// Solution from https://eloquentjavascript.net/code/#7.3
class PGroup {
    constructor(members) {
        this.members = members;
    }

    add(value) {
        if (this.has(value)) return this;
        return new PGroup(this.members.concat([value]));
    }

    delete(value) {
        if (!this.has(value)) return this;
        return new PGroup(this.members.filter(m => m !== value));
    }

    has(value) {
        return this.members.includes(value);
    }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false

