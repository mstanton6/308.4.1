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
let myarr = str.split("\n")

// PUT A LOOP HERE
for (let r = 0; r < myarr.length; r++) {
    //  console.log(myarr[r].split(","));
    myarr[r] = myarr[r].split(",");
}
console.log('myarr: ', myarr);

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
// console.log('Number of columns is: ' + numcols);

/// Now start the main logic

// this is a test for the cell array

let cellarr = new Array(numcols);
//cellarr[0] =1
//cellarr[1] =2
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

        /*      console.log('Output cellarr ***')
              for(j=0; j < (numcols-1); j++){
               
                 console.log(cellarr[j]);
                 cellarr[j] = '';
               } 
          */
    } else {  // all other characters
        for (j = 0; j < (numcols - 1); j++) {
            if (commas == j) {
                //  cellarr[j] += current; // cellarr[j].push(current); 
                cellarr.push(current);
            }
        }

    }

}

// console.log('cellarr: ' + cellarr);


// // setup a 2 dim arrary

//let twoDim2 = [[], []];
let twoDim2 = [];
//
//twoDim2[0][0] = "Hi";
//

let k = 0;

for (let i = 0; i < myarr.length; i++) {
    let row = Math.floor(i / numcols);
    let col = i % numcols;

    if (!twoDim2[row]) {
        twoDim2[row] = [];
    }

    twoDim2[row][col] = myarr[i];

}
console.log('part2');      /// End of part 2
console.log(twoDim2);

/////// PART 3

/* becomes
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
*/
console.log('part3');

let twoDim3 = [];

let Headarr = ["id", "name", "occupation", "age"];

// console.log('Headarr: ' + Headarr);

for (let i = 0; i < myarr.length; i++) {

    for (let j = 0; j < myarr[i].length; j++) {
          // console.log(myarr[i][j]);
          
          
        if (!twoDim3[i]) {
            twoDim3[i] = [];
        }
        twoDim3[i][j] = myarr[i][j];

        if (i == 0) {
            twoDim3[i][j] = myarr[i][j];
        }
        else {
            twoDim3[i][j] = Headarr[j] + ": " + myarr[i][j];     /// ******* This is what is not working
        }

        // console.log(twoDim3[i][j]);
    }
}
console.log('twodim3 :' + twoDim3);

//// console.log(twoDim3);

/////// PART 4 - Sorting and Manipulating Data

// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

console.log('part4');

/// Object added At the end of the array

twoDim3.push(`id: "7", name: "Bilbo", occupation: "None", age: "111"`);

// Object added At index 1
const itemToInsert = 'id: "48", name: "Barry", occupation: "Runner", age: "25"';

twoDim3.splice(1, 0, itemToInsert);

////  console.log(twoDim3);

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group.
// This calculation should be accomplished using a loop.

/////// PART 5 - Full Circle

// 