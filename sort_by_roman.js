/**
 *  ? PROBLEM:
 * * Given a list of strings containing names followed by Roman numerals, sort them by name first and then with their roman numeral."
 * * Following are the rules for Roman numerals:
 * ! -> A Roman numeral value is not repeated more than three times successively.
 * !  ->If a smaller value precedes a larger value, it indicates subtraction.
 * ! I,II,III,IV,V,VI,VII,VIII,IX, and X represents 1 through 10
 * ! XX, XXX, XL, and L are 20, 30, 40, 50.
 */

/**
 * ? Example:
 * * Input: ['Scipio XL', 'Scipio XLIV', 'Antony IX', 'Marius XV', 'Marius XIII', 'Marius XX']
 * * Expected Output: ['Antony IX', 'Marius XIII', 'Marius XV', 'Marius XX', 'Scipio XL', 'Scipio XLIV']
 * * Decimal representation: 'Antony 9', 'Marius 13', 'Marius 15', 'Marius 20, 'Scipio 40', 'Scipio 44']
 */



/**
 *
 * @param {string} roman
 * @returns
 */
const romanToNum = (roman) => {
    if (roman === "") return 0;
    if (roman.startsWith("L")) return 50 + romanToNum(roman.substring(1));
    if (roman.startsWith("XL")) return 40 + romanToNum(roman.substring(2));
    if (roman.startsWith("X")) return 10 + romanToNum(roman.substring(1));
    if (roman.startsWith("IX")) return 9 + romanToNum(roman.substring(2));
    if (roman.startsWith("V")) return 5 + romanToNum(roman.substring(1));
    if (roman.startsWith("IV")) return 4 + romanToNum(roman.substring(2));
    if (roman.startsWith("I")) return 1 + romanToNum(roman.substring(1));
    return 0;
}

/**
 *
 * @param {string[]} array
 * @returns {string[]}
 */
const sortFunc = (array) => {
    return array.map((n) => ({ name: n, num: romanToNum(n.split(" ").pop()) }))
        .sort((a, b) => (a.num - b.num))
        .map(({ name }) => name)
}

console.log(
    sortFunc(['Scipio XL', 'Scipio XLIV', 'Antony IX', 'Marius XV', 'Marius XIII', 'Marius XX'])

);
