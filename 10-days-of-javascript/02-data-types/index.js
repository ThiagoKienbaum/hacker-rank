/*
    Task
    Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor
    below. You must use the operator to perform the following sequence of operations:
    1. Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the
    result on a new line using console.log .
    2. Convert secondDecimal to a floating-point number (Number type), then sum it with
    firstDecimal and print the result on a new line using console.log .
    3. Print the concatenation of firstString and secondString on a new line using console.log . Note
    that firstString must be printed first.
*/

const secondInteger = '12';
const secondDecimal = '4.32';
const secondString = 'is the best place to learn and practice coding!';

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;    
    console.log(firstInteger + parseInt(secondInteger));
    
    const firstDecimal = 4.0;
    console.log(firstDecimal + parseFloat(secondDecimal));    
    
    const firstString = 'HackerRank ';
    console.log(firstString + secondString);
    
}

performOperation(secondInteger, secondDecimal, secondString);
