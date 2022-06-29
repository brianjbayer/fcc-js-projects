const rot13 = require('./caesars_cipher');

test('rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP', () => {
  expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
});

test('rot13("SERR CVMMN!") should decode to the string FREE PIZZA!', () => {
  expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
});

test('rot13("SERR YBIR?") should decode to the string FREE LOVE?', () => {
  expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
});

test('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
  expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
});
