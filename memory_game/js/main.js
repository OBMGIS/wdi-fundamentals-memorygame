


var cards = [ "queen", "queen", "king", "king"];

var cardsinplay = [];

var cardone = cards[0];

cardsinplay.push(cardone);

console.log("User Flipped " + cardone);

var cardtwo = cards[3];

cardsinplay.push(cardtwo);


console.log("User Flipped " + cardtwo);



if ( cardsinplay.length === 2) {

if (cardsinplay[0] === cardsinplay[3] ) {
	alert("you found a match!");
} else 
   {alert("sorry try again")};
}