const convertToRoman = require('./roman_numeral_converter');

// These are additional tests added to validate input
test('convertToRoman("Bob") should return NaN', () => {
  expect(convertToRoman('Bob')).toBe(NaN);
});
test('convertToRoman("3") should return NaN', () => {
  expect(convertToRoman('Bob')).toBe(NaN);
});
test('convertToRoman(4000) should return undefined', () => {
  expect(convertToRoman(4000)).toBe(undefined);
});

// Original Tests
test('convertToRoman(2) should return the string II', () => {
  expect(convertToRoman(2)).toBe('II');
});

test('convertToRoman(3) should return the string III', () => {
  expect(convertToRoman(3)).toBe('III');
});

test('convertToRoman(4) should return the string IV', () => {
  expect(convertToRoman(4)).toBe('IV');
});

test('convertToRoman(5) should return the string V', () => {
  expect(convertToRoman(5)).toBe('V');
});

test('convertToRoman(9) should return the string IX', () => {
  expect(convertToRoman(9)).toBe('IX');
});

test('convertToRoman(12) should return the string XII', () => {
  expect(convertToRoman(12)).toBe('XII');
});

test('convertToRoman(16) should return the string XVI', () => {
  expect(convertToRoman(16)).toBe('XVI');
});

test('convertToRoman(29) should return the string XXIX', () => {
  expect(convertToRoman(29)).toBe('XXIX');
});

test('convertToRoman(44) should return the string XLIV', () => {
  expect(convertToRoman(44)).toBe('XLIV');
});

test('convertToRoman(45) should return the string XLV', () => {
  expect(convertToRoman(45)).toBe('XLV');
});

test('convertToRoman(68) should return the string LXVIII', () => {
  expect(convertToRoman(68)).toBe('LXVIII');
});

test('convertToRoman(83) should return the string LXXXIII', () => {
  expect(convertToRoman(83)).toBe('LXXXIII');
});

test('convertToRoman(97) should return the string XCVII', () => {
  expect(convertToRoman(97)).toBe('XCVII');
});

test('convertToRoman(99) should return the string XCIX', () => {
  expect(convertToRoman(99)).toBe('XCIX');
});

test('convertToRoman(400) should return the string CD', () => {
  expect(convertToRoman(400)).toBe('CD');
});

test('convertToRoman(500) should return the string D', () => {
  expect(convertToRoman(500)).toBe('D');
});

test('convertToRoman(501) should return the string DI', () => {
  expect(convertToRoman(501)).toBe('DI');
});

test('convertToRoman(649) should return the string DCXLIX', () => {
  expect(convertToRoman(649)).toBe('DCXLIX');
});

test('convertToRoman(798) should return the string DCCXCVIII', () => {
  expect(convertToRoman(798)).toBe('DCCXCVIII');
});

test('convertToRoman(891) should return the string DCCCXCI', () => {
  expect(convertToRoman(891)).toBe('DCCCXCI');
});

test('convertToRoman(1000) should return the string M', () => {
  expect(convertToRoman(1000)).toBe('M');
});

test('convertToRoman(1004) should return the string MIV', () => {
  expect(convertToRoman(1004)).toBe('MIV');
});

test('convertToRoman(1006) should return the string MVI', () => {
  expect(convertToRoman(1006)).toBe('MVI');
});

test('convertToRoman(1023) should return the string MXXIII', () => {
  expect(convertToRoman(1023)).toBe('MXXIII');
});

test('convertToRoman(2014) should return the string MMXIV', () => {
  expect(convertToRoman(2014)).toBe('MMXIV');
});

test('convertToRoman(3999) should return the string MMMCMXCIX', () => {
  expect(convertToRoman(3999)).toBe('MMMCMXCIX');
});
