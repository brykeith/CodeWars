/**
 * Count the Number of Duplicates
 */

// ~ Instruction:
// Write a function that will return the count of distinct
// case -insensitive alphabetic characters and numeric
// digits that occur more than once in the input string.
// The input string can be assumed to contain only
// alphabets(both uppercase and lowercase) and numeric digits.

// ? TEST CASES:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// * BEST SOLUTION !!!

// OPTION 1
function best_duplicateCount_1(text) {
    return (
        text
            .toLowerCase()
            .split('')
            .sort()
            .join('')
            .match(/([^])\1+/g) || []
    ).length;
}

// OPTION 2
function best_duplicateCount_2(text) {
    return text
        .toLowerCase()
        .split('')
        .filter(function (val, i, arr) {
            return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
        }).length;
}

// ! MY SOLUTION

function my_duplicateCount(text) {
    chars = [];
    duplicates = [];

    [...text].forEach((c) => {
        c = c.toLowerCase();
        if (!chars.includes(c)) {
            chars.push(c);
        } else if (!duplicates.includes(c)) {
            duplicates.push(c);
        }
    });
    return duplicates.length;
}

// TESTING
console.log(my_duplicateCount('abcde'));
console.log(my_duplicateCount('aabbcde'));
console.log(my_duplicateCount('aabBcde'));
console.log(my_duplicateCount('indivisibility'));
console.log(my_duplicateCount('Indivisibilities'));
console.log(my_duplicateCount('aA11'));
console.log(my_duplicateCount('ABBA'));
