function checkValidCard(number:number, suite:string, color:string):void {
  const possibleSuite = ['club', 'diamond', 'heart', 'spade'];
  const possibleColor = ['red', 'black'];
  if (number > 13 || number <= 0) {
    throw new RangeError('Card number must be between 0 and 13.');
  }
  if (!possibleColor.includes(color)) {
    throw new RangeError('Card color must be red or black.');
  }
  if (!possibleSuite.includes(suite)) {
    throw new RangeError('Card suite must be club, diamond, heart or spade.');
  }
  if ((color === 'red' && ['club', 'spade'].includes(suite))
  || (color === 'black' && ['diamond', 'heart'].includes(suite))) {
    throw new Error('Mismatch card color and card suite');
  }
}
export default class Card {
  constructor(readonly number:number, readonly suite:string, readonly color:string) {
    checkValidCard(number, suite, color);
    this.number = number;
    this.suite = suite;
    this.color = color;
  }
}
