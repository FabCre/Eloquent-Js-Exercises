/* Write a program that creates a string that represents an 8x8 grid, using new line characters to separate lines.
*  At each position of the grid there is either a space or a # character. The characters should form a chessboard.
*  Passing this string to console.log should show something like this:
*   # # # #
*  # # # #
*   # # # #
*  # # # #
*   # # # #
*  # # # #
*   # # # #
*  # # # #
*  When you have a program that generates this pattern, define a binding size = 8 and change the program so that it
*  works for any size, outputting a grid of the given width and height.
*/

let parameterizableSize = 8;
let columns = [];
for (let h = 0; h < parameterizableSize; h++) {
    let evenLine = '';
    let oddLine = '';
    if (h % 2 === 0) {
        for (let i = 0; i < parameterizableSize; i++) {
            if (i % 2 !== 0) {
                evenLine += '#';
            } else if (i % 2 === 0) {
                evenLine += ' ';
            }
        }
        columns.push(evenLine);
    } else if (h % 2 !== 0) {
        for (let j = 0; j < parameterizableSize; j++) {
            if (j % 2 !== 0) {
                oddLine += ' ';
            } else if (j % 2 === 0) {
                oddLine += '#';
            }
        }
        columns.push(oddLine);
    }
}

columns.forEach(col => console.log(col));

// Solution from https://eloquentjavascript.net/code/#2.3
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
