/* You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string
*  containing only one character (for example, "b"). The first character has position 0, which causes the last one
*  to be found at position string.length - 1. In other words, a two-character has length 2, and its characters have
*  positions 0 and 1.
*  Write a function countBs that take a string as its only argument and returns a number that indicates how many
*  uppercase "B" characters there are in the string.
*  Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates
*  the character that is to be counted (rather that counting only uppercase "B" characters). Rewrite countBs to make
*  use of this new function.
*/

// My solution
function countBs(value) {
    let count = 0;
    for (let i = 0; i <= value.length - 1; i++) {
        if (value[i] === 'B') {
            count++;
        }
    }
   return count;
}

function countChar(value, char) {
    let count = 0;
    for (let i = 0; i <= value.length - 1; i++) {
        if (value[i] === char) {
            count++;
        }
    }
    return count;
}

function rewrittenCountBs(value) {
    return countChar(value, "B")
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(rewrittenCountBs("BBC"));
// → 2

// Solution from
function countChar1(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs1(string) {
    return countChar1(string, "B");
}

console.log(countBs1("BBC"));
// → 2
console.log(countChar1("kakkerlak", "k"));
// → 4
