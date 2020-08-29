/*
    Task
    Complete the following functions in the editor below:
    1. getArea(length, width) : Calculate and return the area of a rectangle having sides length and width.
    2. getPerimeter(length, width) : Calculate and return the perimeter of a rectangle having sides length
    and width.
    The values returned by these functions are printed to stdout by locked stub code in the editor.
*/

const length = 3;
const width = 4.5;

function getArea(length, width) {
    return length * width;
}

function getPerimeter(length, width) {
    return (2 * (length + width));
}

console.log(getArea(length, width));
console.log(getPerimeter(length, width));
