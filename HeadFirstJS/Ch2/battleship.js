var location = 3;
var location = 4;
var location = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false) {
 	
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
	if (guess < 0 || guess > 6) {
		
		alert("Please enter a valid number.")
	}
	else {
		guesses = guesses + 1;
	}
}
