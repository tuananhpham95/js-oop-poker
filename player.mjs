class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  //lägga till ett kort i spelarens hand.
  addToHand(cards) {
    this.hand.push(...cards);
  }

  //slänga alla kort i spelarens hand till en kasthög.
  discardAll(discardPile) {
    discardPile.push(...this.hand);
    this.hand = [];
  }

  // visa spelarens hand.
  showHand() {
    for (const card of this.hand) {
      console.log(card);
    }
  }

  //beräkna och returnera det sammanlagda numeriska värdet av spelarens hand.
  calculateHandValue() {
    return this.hand.reduce((total, card) => total + card.value, 0);
  }
}
export default Player;
