interface Deck<T>{
  addCard(card:T):void;
  addCard(card:T, pos?:number):void;
  drawCard(pos:number):T;
  getCard(pos:number):T;
  getSize():number;
  shuffle():void;
}
class Deck<T> implements Deck<T> {
  // TODO: Change deck implementaion to LinkedList to improve performance

  // Top is last element of array for faster drawTop operation
  private size:number=0;

  private deck:Array<T> = [];

  debug() {
    console.log(this.deck);
  }

  addCard(card:T):void;
  addCard(card:T, pos?:number):void {
    if (pos) {
      if (pos === -1) {
        this.deck.unshift(card);
      } else {
        this.deck.splice(pos + 1, 0, card);
      }
    } else {
      this.deck.push(card);
    }
    this.size += 1;
  }

  getCard(pos:number):T {
    return this.deck[pos];
  }

  // TODO: Write unit test for this
  drawCard(pos:number):T {
    return this.deck.splice(pos + 1, 1)[0];
  }

  // TODO: Add shuffle method
  getSize():number {
    return this.size;
  }
}
export default Deck;
