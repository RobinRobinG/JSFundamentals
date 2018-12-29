function shuffle(array) {
	var m = array.length, t, i;
	// While there remain elements to shuffle…
	while (m) {
	  // Pick a remaining element…
	  i = Math.floor(Math.random() * m--);
	  // And swap it with the current element.
	  t = array[m];
	  array[m] = array[i];
	  array[i] = t;
	}
	return array;
  }

class Card {
	constructor(suit, str, num){
		this.suit = suit;
		this.str = str;
		this.num = num;
	}
	show(){
		console.log(`This card is ${this.suit} - ${this.str} ${this.num}.`)
	}
}
class Deck {
	constructor(){
		this.suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
		this.strs = ["Ace", "Two","Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
		this.cards = [];
		this.reset();
		this.shuffle();
		this.deal_card();
	}
	reset(){
		var cards = [];
		for (var i = 0; i < this.suits.length; i++){
			for(var n = 0; n < this.strs.length; n++){
				cards.push(new Card(this.suits[i],this.strs[n],n+1));
			}
		}
	}
	shuffle(){
		var suffled_cards = shuffle(this.cards);
		console.log(suffled_cards);
		return suffled_cards;
	}
	deal_card(){
		var dealt_card = this.cards[this.cards.length-1];
		this.cards.pop();
		console.log(dealt_card);
		return dealt_card;
	}
}
class Player {
	constructor(name){
		this.name = name;
		this.hand = [];
		this.deck = new Deck();
	}
	take_card(){
		this.hand.push(this.deck.deal_card());
		console.log(this.deck);
		console.log(`${this.name} has ${this.hand}`);
	}
	discard_card(){
		this.hand.pop();
		console.log(`${this.name} has ${this.hand}`);
	}
}
const play1 = new Player("KittyCat");
play1.take_card();

