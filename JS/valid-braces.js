/**
 * Valid Braces
 */

// ~ Instruction:
// Write a function that takes a string of braces, and determines if the
//      order of the braces is valid.It should return true if the string
//      is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces
//      new characters: brackets[], and curly braces { }. Thanks to @arnedag
//      for the idea!

// All input strings will be nonempty, and will only consist of parentheses,
//      brackets and curly braces: ()[]{ }.

// ? TEST CASES:
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" => False

// * BEST SOLUTION !!!
function validBracesBest(braces) {
    var matches = { '(': ')', '{': '}', '[': ']' };
    var stack = [];
    var currentChar;

    for (var i = 0; i < braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) {
            // opening braces
            stack.push(currentChar);
        } else {
            // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}

// ! MY SOLUTION
function validBraces(braces) {
    start = braces.split('');
    openings = [];
    valid = ['()', '[]', '{}'];
    while (typeof (item = start.shift()) !== 'undefined') {
        if (item === '(' || item === '[' || item === '{') {
            openings.push(item);
        } else if (item === ')' || item === ']' || item === '}') {
            if (!valid.includes(`${openings.pop()}${item}`)) {
                return false;
            }
        } else {
            return false;
        }
    }

    return openings.length === 0;
}

// TESTING
console.log(validBraces('(){}[]')); // true
console.log(validBraces('([{}])')); // true
console.log(validBraces('(}')); // false
console.log(validBraces('[(])')); // false
console.log(validBraces('[({})](]')); // false
console.log(validBraces('()')); // false
