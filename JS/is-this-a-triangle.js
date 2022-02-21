/**
 * Is This a Triangle?
 */

// ~ Instruction:
// Implement a function that accepts 3 integer values a, b, c. The function should
//      return true if a triangle can be built with the sides of given length and
//      false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// ? TEST CASES:
// isTriangle(1, 2, 2) => true
// isTriangle(7, 2, 2) => false

// * BEST SOLUTION !!!
function isTriangleBest(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}

function isTriangleBest2(a, b, c) {
    [a, b, c] = [a, b, c].sort((x, y) => x - y);

    return a + b > c;
}

var isTriangleClever = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;

// ! MY SOLUTION
function isTriangle(a, b, c) {
    const sorted = [a, b, c].sort((a, b) => {
        return b - a;
    });

    return sorted[0] < sorted[1] + sorted[2];
}

// TESTING
console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
