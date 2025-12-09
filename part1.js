// ******************* PART 1

// SUMMARY - took the code from 308.3.1 and converted the string to an arrary

/* As a final task, solve the following practical problem regarding string processing.
Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data
. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets.
 While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds),
 at their core, they are storing CSV data.
*/

// What we know
//CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

/* The task: Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
*/

// Categories
// commma
// newline
// everything else

let cell1 = '', cell2 = '', cell3 = '', cell4 = '';
let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let myarr = str.split("  ")     // convert the string to an array
//console.log('myarr: ' + myarr );

console.log('Part 1: ');
let commas = 0;

for (let i = 0; i < myarr.length; i++) {
    let current = myarr[i];

    // check for commas

    if (current == ',') {
        commas++;
        // console.log('Found a comma'); 
    }
    else if (current == '\n') {                    // newline
        console.log(cell1, cell2, cell3, cell4);
        cell1 = ''; cell2 = ''; cell3 = ''; cell4 = '';
        commas = 0;
    } else {
        if (commas == 0) {
            cell1 += current;
        } else if (commas == 1) {
            cell2 += current;
        } else if (commas == 2) {
            cell3 += current;
        } else {
            cell4 += current;
        }
    }

    if (i == myarr.length - 1) {
        console.log(cell1, cell2, cell3, cell4);
    }
}
