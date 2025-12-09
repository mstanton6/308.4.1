// ******************* PART 2

// SUMMARY - took the code from 308.3.1 and converted the string to an arrary in part 1. 
// Now I am starting where I left off with part 1

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

// let myarr = str.split("  ")     // convert the string to an array
let myarr = str.split( ) 
//console.log('myarr: ' + myarr );

let commas = 0;

let numcols = 0;

//Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.

// count the number of commas in the first row to get the number of columns
for (let i = 0; i < str.length; i++) {

    if (str[i] === ',') {
        numcols = numcols + 1;
    }
    if (str[i] === '\n')
        break;
}

numcols = numcols + 1; // get the last one, so that the number of columns is number of columns plus 1
console.log('Number of columns is: ' + numcols);

/// Now start the main logic

// this is a test for the cell array

let cellarr = new Array(numcols);

//console.log('cellarr: ' + cellarr[1]);

for (let i = 0; i < myarr.length; i++) {
    let current = myarr[i];

    // check for commas

    if (current == ',') {
        commas++;
        // console.log('Found a comma'); 
    }
    else if (current == '\n') {                    // newline
      //  console.log(cell1, cell2, cell3, cell4);
       // cell1 = ''; cell2 = ''; cell3 = ''; cell4 = '';
       cellarr = "";
        commas = 0;

  
    } else {  // all other characters
        for(j=0; j < (numcols-1); j++){
         if (commas == j) {
         //  cellarr[j] += current; // cellarr[j].push(current); 
           cellarr.push(current);
         }  
        }
            
    }

}

 // console.log('cellarr: ' + cellarr);


// // setup a 2 dim arrary

let twoDim2 = [];

for (let i = 0; i < myarr.length; i++) {
    let row = Math.floor(i / numcols);
    let col = i % numcols;

    if (!twoDim2[row]) {
        twoDim2[row] = [];
    }

    twoDim2[row][col] = myarr[i];
}

console.log(twoDim2); 