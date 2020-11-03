type CardSuite='spade'|'heart'|'diamond'|'club';
type CardColor='red'|'black';
type CardNumber=1|2|3|4|5|6|7|8|9|10|11|12|13;
export default class NormalCard {
  constructor(readonly number: CardNumber, readonly suite: CardSuite, readonly color:CardColor) {
    if ((color === 'red' && (suite === 'diamond' || suite === 'heart'))
    || ((color === 'black' && (suite === 'club' || suite === 'spade')))) {
      this.color = color;
      this.number = number;
      this.suite = suite;
    } else {
      throw new Error(`Unexpected combination of suite:${suite} and color:${color}`);
    }
  }
}
