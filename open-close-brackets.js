'use strict';

/**
 * Query
 * * Given a string s containing just the characters '(', "', 'f', '', 'I' and 'I', determine if the input string is valid.
 * * An input string is valid if:
 * * - Open brackets must be closed by the same type of brackets.
 * * - Open brackets must be closed in the correct order.
 */

/**
 * ! Example
 * * Example 1:
    Input: s = "()"
    Output: valid
 * * Example 2:
    Input: s = "(16)"
    Output: valid
 * * Example 3:
    Input: s = "(I"
    Output: invalid
* * Example 4:
    Input: s = "¿}"
    Output: invalid
 */

/**
 *
 * @param {string} s
 */
const isValid = (s) => {
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const result = [];
    for (const letter of s) {
        if (["(", "[", "{"].includes(letter)) {
            result.push(letter);
        } else if (result[result.length - 1] === map[letter]) {
            result.pop()
        } else {
            return false
        }
    }
    return result.length === 0
}

const checkIfValid = (s) => {
    if (isValid(s)) console.log("valid")

    else console.log("invalid")
}
checkIfValid("({[]})"); //true
checkIfValid("({[}])"); //false
checkIfValid("({)}"); //false
checkIfValid("(16)"); // false
checkIfValid("()"); // true

