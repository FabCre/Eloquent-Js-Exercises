/* Write a function that computes the dominant writing direction in a string of text. Remember that each script object
*  has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
*  The dominant direction is the direction of a majority of the characters that have a script associated with them.
*  The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/

// Given function
function characterScriptForExercise(code) {
    const SCRIPTS = require('./chapter-code/code/scripts');
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countByForExercise(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

// My solution
function dominantDirection(text) {
    const scriptDirectionFinder = (char) => {
        const script = characterScriptForExercise(char.codePointAt(0));
        return script ? script.direction : "none";
    }
    const filterByName = ({name}) => name !== "none";

    let counted = countByForExercise(text, scriptDirectionFinder).filter(filterByName);

    if (counted.length === 0 ) {
        return 'ltr'
    }

    const reduceCount = (a, b) => a.count > b.count ? a : b;

    return counted.reduce(reduceCount).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

// Solution from https://eloquentjavascript.net/code/#5.4
function dominantDirection1(text) {
    let counted = countByForExercise(text, char => {
        let script = characterScriptForExercise(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection1("Hello!"));
// → ltr
console.log(dominantDirection1("Hey, مساء الخير"));
// → rtl
