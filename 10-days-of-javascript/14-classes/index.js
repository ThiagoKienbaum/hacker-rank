/*
    Task        
    Create a Polygon class that has the following properties:
    A constructor that takes an array of integer values describing the lengths of the polygon's sides.
    A perimeter() method that returns the polygon's perimeter.
    Locked code in the editor tests the Polygon constructor and the perimeter method.
    Note: The perimeter method must be lowercase and spelled correctly.
*/

class Polygon {
    constructor(lengths) {
        this.lengths = lengths;
    }

    perimeter() {
        let perimeter = 0;

        this.lengths.forEach(length => perimeter += length);

        return perimeter;
    }
}

const triangle = new Polygon([3, 4, 5]);
const square = new Polygon([10, 10, 10, 10]);
const rectangle = new Polygon([10, 20, 10, 20]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(triangle.perimeter());
console.log(square.perimeter());
console.log(rectangle.perimeter());
console.log(pentagon.perimeter());
