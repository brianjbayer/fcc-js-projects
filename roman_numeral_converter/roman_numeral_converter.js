// Convert the given number into a roman numeral
// https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html

const decimalRomanTable = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];
Object.freeze(decimalRomanTable);
const DECIMAL = 0;
const ROMAN = 1;

function convertToRoman (num) {
  // Validate input (no implicit type coercion)
  // Note that isNaN() does implicit type coercion
  // e.g. isNaN("3") returns false
  if (typeof num !== 'number') {
    return NaN;
  }

  if (num > 3999) {
    return undefined;
  }

  // Convert valid input to Roman Numeral
  if (num === 0) {
    return '';
  }
  for (const tuple of decimalRomanTable) {
    if (num >= tuple[DECIMAL]) {
      return tuple[ROMAN] + convertToRoman(num - tuple[DECIMAL]);
    }
  }
}

module.exports = convertToRoman;
