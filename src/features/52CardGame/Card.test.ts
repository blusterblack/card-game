/* eslint-disable no-new */
/* eslint-disable no-restricted-syntax */
import Card from './Card';

test('Create all 52 valid card', () => {
  const colors = ['red', 'black'] as const;
  const suites = ['spade', 'heart', 'diamond', 'club'] as const;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;
  for (const color of colors) {
    for (const suite of suites) {
      for (const number of numbers) {
        if ((color === 'red' && (suite === 'diamond' || suite === 'heart'))
        || ((color === 'black' && (suite === 'club' || suite === 'spade')))) {
          const testCard = new Card(number, suite, color);
          expect(testCard.color).toBe(color);
          expect(testCard.number).toBe(number);
          expect(testCard.suite).toBe(suite);
        }
      }
    }
  }
});
test('Create invalid combination of suite and color', () => {
  expect(() => { new Card(1, 'club', 'red'); })
    .toThrow('Unexpected combination of suite:club and color:red');
  expect(() => { new Card(1, 'spade', 'red'); })
    .toThrow('Unexpected combination of suite:spade and color:red');
  expect(() => { new Card(1, 'diamond', 'black'); })
    .toThrow('Unexpected combination of suite:diamond and color:black');
  expect(() => { new Card(1, 'heart', 'black'); })
    .toThrow('Unexpected combination of suite:heart and color:black');
});
