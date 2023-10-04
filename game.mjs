import Deck from "./desk.mjs";
import Player from "./player.mjs";

class Game {
  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.players = [
      // Skapa två spelare.
      new Player("Slim"),
      new Player("Luke"),
    ];
    this.discardPile = []; // Skapa en kasthög.
  }

  // Metod för att spela spelet.
  play() {
    // Dela ut 5 kort vardera till spelarna.
    for (const player of this.players) {
      const dealtCards = this.deck.cards.splice(0, 5);
      player.addToHand(dealtCards);
    }

    // Skriv ut spelarnas händer och deras sammanlagda numeriska värde.
    for (const player of this.players) {
      console.log(`${player.name}'s hand:`);
      player.showHand();
      console.log(
        `Totalt värde av ${
          player.name
        }'s hand: ${player.calculateHandValue()}\n`
      );
    }

    // Låt spelarna slänga alla sina kort i kasthögen.
    for (const player of this.players) {
      player.discardAll(this.discardPile);
    }

    console.log("Kasthög efter att spelarna har slängt sina kort:");
    for (const card of this.discardPile) {
      console.log(card);
    }

    // Flytta alla kort från kasthögen tillbaka till kortleken och blanda kortleken igen.
    this.deck.cards.push(...this.discardPile);
    this.discardPile = [];
    this.deck.shuffle();

    console.log("\nKortlek efter att alla kort har återlämnats:");
    console.log(this.deck.cards.length);
    console.log(this.deck.cards);
  }
}
export default Game;
