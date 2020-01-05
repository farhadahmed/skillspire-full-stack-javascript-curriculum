// Simulate a deck of cards. Shuffle the deck.

/*
Steps:
    - Generate the deck
    - Have a for loop that iterates through each card in the deck
    - For each card, swap it with a randomly chosen card
*/
function deckShuffle() {
  let deck = [
        'AS', 'AH', 'AC', 'AD', 
        '2S', '2H', '2C', '2D',
        '3S', '3H', '3C', '3D',
        '4S', '4H', '4C', '4D',
        '5S', '5H', '5C', '5D',
        '6S', '6H', '6C', '6D',
        '7S', '7H', '7C', '7D',
        '8S', '8H', '8C', '8D',
        '9S', '9H', '9C', '9D',
        '10S', '10H', '10C', '10D', 
        'JS', 'JH', 'JC', 'JD',
        'QS', 'QH', 'QC', 'QD',
        'KS', 'KH', 'KC', 'KD',
    ];

    for (let i=0; i<deck.length; i++) {
        let randomCard = Math.floor(Math.random() * deck.length); // 4
        let currentCard = deck[i];

        deck[i] = deck[randomCard];
        deck[randomCard] = currentCard;
    }
    console.log(deck);
}