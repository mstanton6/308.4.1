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

let myarr = str.split("\n")

for (let r = 0; r < myarr.length; r++) {
    myarr[r] = myarr[r].split(",");
}
//console.log('myarr: ', myarr);

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

/// Now start the main logic

// this is a test for the cell array

let cellarr = new Array(numcols);

for (let i = 0; i < myarr.length; i++) {
    let current = myarr[i];

    // check for commas

    if (current == ',') {                           // comma
        commas++;
        // console.log('Found a comma'); 
    }
    else if (current == '\n') {                    // newline
        cellarr = "";
        commas = 0;

    } else {  // all other characters
        for (j = 0; j < (numcols - 1); j++) {
            if (commas == j) {
                //  cellarr[j] += current; // cellarr[j].push(current); 
                cellarr.push(current);
            }
        }

    }

}

// // setup a 2 dim arrary

let twoDim2 = [];

let k = 0;

for (let i = 0; i < myarr.length; i++) {

    for (let j = 0; j < myarr[i].length; j++) {

        if (!twoDim2[i]) {
            twoDim2[i] = [];
        }

        twoDim2[i][j] = myarr[i][j];
    }

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

for (let i = 1; i < myarr.length; i++) {

    let person = {};
    for (let j = 0; j < myarr[i].length; j++) {

       person[myarr[0][j]] = myarr[i][j];

    }
    // 1. create new person
    // 2. use inner loop to populate person with new data
    // 3. after inner loop, add the new person to the arrary
    twoDim3.push(person);


    }
console.log(twoDim3);

/////// PART 4 - Sorting and Manipulating Data

//  Remove the last element from the sorted array.

// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

console.log('part4');

// Remove the last item from the array
twoDim3.pop();

/// Object added At the end of the array
twoDim3.push([`id: "7", name: "Bilbo", occupation: "None", age: "111"`]);

// Object added At index 1
const itemToInsert = 'id: "48", name: "Barry", occupation: "Runner", age: "25"';

twoDim3.splice(1, 0, itemToInsert);

console.log(twoDim3);

// Finally, use the values of each object within the array and the array’s length property to 
// calculate the average age of the group. This calculation should be accomplished using a loop.

let headarr = ['Id', 'Name', 'Occupation', 'Age'];

let age =0;
for (let i = 1; i < twoDim2.length; i++) {

  age += Number(twoDim2[i][headarr.length -1]);
       
}

console.log('The average age of the group is: ' + age / (twoDim2.length-1) );

/////// PART 5 - Full Circle

let thestr = ""
let element = ""

for (let i = 0; i < myarr.length; i++) {

    for (let j = 0; j < myarr[i].length; j++) {
        element = myarr[i][j];
  
       if (!(i === myarr.length - 1 && j === 3)) {  
            element += ",";
        }
        thestr += element;
    }
}

console.log('');
console.log('part 5');
console.log(thestr);
