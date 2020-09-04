/* Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier
*  in the chapter if you aren't clear on the exact form of the interface anymore.
*  If you used an array to represent the group's members, don't just return the iterator created by calling
*  Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
*  It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// My Solution
class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    has(value) {
        this.members.includes(value);
    }

    delete(value) {
        this.members = this.members.filter(val => val !== value);
    }

    static from(collection) {
        const group = new Group;
        for (const item of collection) {
            group.add(item);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return {done: true}
        } else {
            let result = {
                value: this.group.members[this.position],
                done: false
            }
            this.position++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c

// Solution from https://eloquentjavascript.net/code/#6.3
class Group1 {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator1(this);
    }
}

class GroupIterator1 {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.members.length) {
            return {done: true};
        } else {
            let result = {
                value: this.group.members[this.position],
                done: false
            };
            this.position++;
            return result;
        }
    }
}

for (let value of Group1.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c
