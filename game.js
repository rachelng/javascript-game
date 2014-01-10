// Create a 2 player game where players are alternatively prompted with simple math problems. Math questions are automatically generated by the game (not pre­determined by you). It should do this by picking two numbers between 1 and 20 and one of the three operations (addition, subtraction, and multiplication).

// Example prompt: “Player 1: What does 5 minus 3 equal?” Both players start with 3 lives. They lose a life if they mis­answer a question.If a player gets a question wrong, the game should output the new scores for both players, so players know where they stand. The game doesn’t end until one of the players loses all their lives. At this point, the game should announce who won and what the other player’s score is. You can use prompt to get input from users and alert or console.log for output.

// Bonus points:
// 1. Output all messages to the players on the HTML page, instead of using console.log or alert. Now you will need some HTML and CSS in your project.

// 2. When the game starts, asks for Player 1’s name, and then Player 2’s name. From that point on, use their names instead of “Player 1” or “Player 2” when prompting them

// 3. Ability to restart game: Instead of having to refresh the webpage, when the game finishes, ask if they want to play again (using the confirm dialog box).

var player1 = 0;
var player2 = 1;
var lives = [3, 3];
var turn = player1;

var num1
var num2
var opIndex = 0;
var operators = ["+", "-", "*", "/"];
window.onload = function() {
	gameLoop();
}

function minusLife() {
	if (turn == player1) {
		lives[player1] -= 1;
	}else{
		lives[player2] -= 1;
	}
}

function changeTurn() {
	if (turn == player1) {
		turn = player2;
	} else {
		turn = player1;
	}
}

function randomNumbers() {
	num1 = Math.floor((Math.random()*20)+1);
	num2 = Math.floor((Math.random()*20)+1);
	opIndex = Math.floor((Math.random()*4));
}

function questionAnswer() {
	return prompt("Player" + (turn + 1) + ":" + " what is " + num1 + " " + operators[opIndex] + " " + num2);
}

function correct(answer) {
	if ( ( (num1 + num2) == answer) && (opIndex == 0) ) {
		return true;
	} else if ( ( (num1 - num2) == answer) && (opIndex == 1) ) {
		return true;
	} else if ( ( (num1 * num2) == answer) && (opIndex == 2) ) {
		return true;
	} else if ( ( (num1 / num2) == answer) && (opIndex == 3) ) {
		return true;
	} else {
		return false;
	}
}

function gameLoop() {
	while(lives[player1] > 0 && lives[player2] > 0) {
		randomNumbers();
		var answer = questionAnswer();

		if (correct(answer)) {
			alert("You're a math whiz!");
		} else {
			minusLife();
			alert("Wrong! You only have " + lives[turn] + " lives left");
		}

		changeTurn();
	}
}



