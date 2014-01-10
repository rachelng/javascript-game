// Create a 2 player game where players are alternatively prompted with simple math problems. Math questions are automatically generated by the game (not pre­determined by you). It should do this by picking two numbers between 1 and 20 and one of the three operations (addition, subtraction, and multiplication).

// Example prompt: “Player 1: What does 5 minus 3 equal?” Both players start with 3 lives. They lose a life if they mis­answer a question.If a player gets a question wrong, the game should output the new scores for both players, so players know where they stand. The game doesn’t end until one of the players loses all their lives. At this point, the game should announce who won and what the other player’s score is. You can use prompt to get input from users and alert or console.log for output.

// Bonus points:
// 1. Output all messages to the players on the HTML page, instead of using console.log or alert. Now you will need some HTML and CSS in your project.

// 2. When the game starts, asks for Player 1’s name, and then Player 2’s name. From that point on, use their names instead of “Player 1” or “Player 2” when prompting them

// 3. Ability to restart game: Instead of having to refresh the webpage, when the game finishes, ask if they want to play again (using the confirm dialog box).

// var randomNumber1 = Math.floor((Math.random()*20) + 1);
// var randomNumber2 = Math.floor((Math.random()*20) + 1);



var player1 = "Player1";
var player2 = "Player2";
var number = 5;
var equationAnswer = 10;
var life = 3;
var score = 0;
equation = parseInt();

// while (life > 0) {
	var equation = prompt("What is " + number + "+" + number + " ?");
	// debugger;
	if (equationAnswer == equation) {
		score += 1;
	} else { 
		score -= 1;
	}

console.log(score);
console.log(life);






