/* Write a loop that makes seven calls to console.log to output the following triangle:
* #
* ##
* ###
* ####
* #####
* ######
* #######
* */

// My solution
let triangle = '';
for (let i = 0; i < 7; i++) {
    console.log(triangle += '#');
}

// Solution from https://eloquentjavascript.net/code/#2.1
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
}
