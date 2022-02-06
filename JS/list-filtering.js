/**
 * List Filtering
 */

// ~ Instruction:
// In this kata you will create a function that
// takes a list of non - negative integers and
// strings and returns a new list with the
// strings filtered out.

// ? TEST CASES:
// assertSimilar(filter_list([1, 2, 'a', 'b']), [1, 2]);
// assertSimilar(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]);
// assertSimilar(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);

// * BEST SOLUTION !!!

// option 1
function filter_list_best_1(l) {
    return l.filter((e) => Number.isInteger(e));
}

// option 2
function filter_list_best_2(l) {
    return l.filter((v) => typeof v == 'number');
}

// ! MY SOLUTION

function filter_list(l) {
    result = [];

    l.forEach((item) => {
        if (typeof item != 'string') {
            result.push(item);
        }
    });
    return result;
}

// TESTING
console.log(filter_list_best_1([1, 2, 'a', 'b']));
console.log(filter_list_best_1([1, 'a', 'b', 0, 15]));
console.log(filter_list_best_1([1, 2, 'aasf', '1', '123', 123]));
console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
