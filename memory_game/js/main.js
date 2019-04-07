


var cards = [ 
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: " images/king-of-diamonds.png"
}
];

var cardsinplay = [];

var checkformatch = function(){
if (cardsinplay[0] === cardsinplay[1] ) {
	alert("you found a match!");
} else { 
   {alert("sorry try again")};
}  
};


var flipCard = function (cardId) {
var cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
cardsinplay.push(cards[cardId].rank);
this.setAttribute('src', cards[cardId].cardImage);
if (cardsinplay.length === 2) {
checkformatch();
}
};

var createBoard = function () {
for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
document.getElementById('game-board').appendChild(cardElement);
cardElement.addEventListener('click', flipCard);
}
};


createBoard();
