/**
 * Jaden Casing Strings
 */

// ~ Instruction:
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized
// in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// ? TEST CASES:
// ENTER TEST CASES

// * BEST SOLUTION !!!
String.prototype.toJadenCaseBest = function () {
    return this.split(' ')
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
};

// ! MY SOLUTION
String.prototype.toJadenCase = function () {
    const newArray = [];
    this.split(' ').forEach((word) => {
        const capitalizedFirstLetter = word.charAt(0).toUpperCase();
        const rest = word.substring(1);
        newArray.push(`${capitalizedFirstLetter}${rest}`);

        // word.charAt(0).toUpperCase;
    });
    return newArray.join(' ');
};

// TESTING
console.log('hello I am elmo'.toJadenCaseBest());
