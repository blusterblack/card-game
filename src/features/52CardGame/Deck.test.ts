import Card from './Card';
import Deck from './Deck';

test('Add 100 same cards to the top of deck', () => {
  const deck = new Deck();
  const card = new Card(1, 'club', 'black');
  for (let i = 0; i < 100; i += 1) {
    deck.addCard(card);
  }
  expect(deck.getSize()).toBe(100);
});
test('Add 13 card to top and get each of them', () => {
  const deck = new Deck();
  for (let i = 1; i < 14; i += 1) {
    deck.addCard(new Card(i, 'club', 'black'));
  }
  for (let i = 0; i < 13; i += 1) {
    expect(deck.getCard(i)).toStrictEqual(new Card(i + 1, 'club', 'black'));
  }
});

test('Add to bottom, middle and top of deck using index', () => {
  const deck = new Deck();
  deck.addCard(new Card(2, 'club', 'black'));
  deck.addCard(new Card(4, 'club', 'black'));
  deck.addCard(new Card(1, 'club', 'black'), -1);// 1 2 4
  deck.addCard(new Card(3, 'club', 'black'), 1); // 1 2 3 4
  deck.addCard(new Card(5, 'club', 'black'), 3); // 1 2 3 4 5
  for (let i = 0; i < 4; i += 1) {
    expect(deck.getCard(i)).toStrictEqual(new Card(i + 1, 'club', 'black'));
  }
});
