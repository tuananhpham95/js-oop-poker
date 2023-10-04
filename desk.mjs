import Card from "./card.mjs";

class Deck {
  constructor() {
    this.cards = []; // En array för att lagra korten

    // Skapa en kortlek genom att iterera över färger och kortvärden.
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const names = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    for (const suit of suits) {
      for (let i = 0; i < names.length; i++) {
        const value = i < 9 ? i + 1 : 10; // Beräkna kortets numeriska värde.
        const card = new Card(suit, names[i], value);
        this.cards.push(card);
      }
    }
  }

  // blanda kortleken.
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
const deck = new Deck();
deck.shuffle();
console.log("Shuffled deck:", deck.cards);
export default Deck;
