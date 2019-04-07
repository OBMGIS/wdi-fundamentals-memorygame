


var cards = [ "queen", "queen", "king", "king"];

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
console.log("user flipped" + cards[cardid]);
cardsinplay.push(cards[cardid]);
checkformatch();
}  

cardflip(0);

cardflip(2);

