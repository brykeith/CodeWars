/**
 * Isogram
 */

// ~ Instruction:
// An isogram is a word that has no repeating letters, consecutive or
// non - consecutive.Implement a function that determines whether a string
// that contains only letters is an isogram.Assume the empty string is an
// isogram.Ignore letter case.

// ? TEST CASES:
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// * BEST SOLUTION !!!
// A set is a net of unique items
function isIsogramBest(str) {
    console.log(new Set(str.toUpperCase()));
    return new Set(str.toUpperCase()).size == str.length;
}

// ! MY SOLUTION
function isIsogram(str) {
    str = str.toLowerCase();
    const length = str.length;
    const newArray = [];
    for (i = 0; i < length; i++) {
        if (!newArray.includes(str.charAt(i))) {
            newArray.push(str.charAt(i));
        }
    }
    return newArray.join('') == str;
}

// TESTING
console.log(isIsogramBest('aba'));
