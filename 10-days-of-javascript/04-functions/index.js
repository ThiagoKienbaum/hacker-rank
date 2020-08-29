/*
    Task
    Implement a function named factorial that has one parameter: an integer, n. It must return the value of n!(i.e., n factorial).
*/

const number = 4;

const factorial = (number) => number <= 1 ?  1 : number * factorial(number - 1);

console.log(factorial(number));
