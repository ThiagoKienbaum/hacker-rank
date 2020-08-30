/*
    Task
    We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
    Add an area method to Rectangle's prototype.
    Create a Square class that satisfies the following:
    It is a subclass of Rectangle.
    It contains a constructor and no other methods.
    It can use the Rectangle class' area method to print the area of a Square object.
    Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.
 */

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return this.w * this.h;    
}

class Square extends Rectangle {
    constructor(length) {
        super();
        this.w = length;
        this.h = length;
    }
}

const rectangle = new Rectangle(3,4);
const square = new Square(3);

console.log(rectangle.area());
console.log(square.area());
