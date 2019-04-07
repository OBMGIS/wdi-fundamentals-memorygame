


var cards = [ 
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamons.png"
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
		if ( cardsinplay.length === 2) {
if (cardsinplay[0] === cardsinplay[3] ) {
	alert("you found a match!");
} else 
   {alert("sorry try again")};
}  
}

var cardflip = function(cardid){
console.log("user flipped" + cards[cardid].rank);
cardsinplay.push(cards[cardid].rank);
console.log(cards[cardid].cardImage);
console.log(cards[cardid].suit);
checkformatch();
}  



cardflip(0);

cardflip(2);

//gamelogic
