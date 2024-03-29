/* Consider the following (rather contrived) object:
*  const box = {
*      locked: true,
*      unlock() { this.locked = false; },
*      lock() { this.locked = true;  },
*      _content: [],
*      get content() {
*          if (this.locked) throw new Error("Locked!");
*          return this._content;
*      }
*  };
*
* It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.
* Directly accessing the private _content property is forbidden. Write a function called withBoxUnlocked
* that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box
* is locked again before returning, regardless of whether the argument function returned normally or threw an
* exception.
*/

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

// My solution
function withBoxUnlocked(body) {
    box.unlock();
    body();
    try {
        return body();
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);
// → true

// Solution from https://eloquentjavascript.net/code/#8.2
function withBoxUnlocked2(body) {
    let locked = box.locked;
    if (!locked) {
        return body();
    }

    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
}

withBoxUnlocked2(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked2(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

console.log(box.locked);
// → true