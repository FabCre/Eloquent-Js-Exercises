/* Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier
*  in the chapter if you aren't clear on the exact form of the interface anymore.
*  If you used an array to represent the group's members, don't just return the iterator created by calling
*  Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
*  It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// My Solution

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c

// Solution from https://eloquentjavascript.net/code/#6.3

for (let value of Group1.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c
