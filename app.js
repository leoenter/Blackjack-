// Create two variables, firstCard and secondCard
// set values to random number between 2-11
//create variable, sum, and set it to hte sum of the two cards

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = []
let sum = 0 ;	
let hasBlackJack = false
let isAlive = false;
let message = '';

const mybtn = document.querySelector('#btn');
const btnNew = document.querySelector('#btn-new');
let messageEl = document.querySelector('#message');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#cards-el');

let player = {
    name: "jon",
    chips: 145
}

let playerEl = document.getElementById("player")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  let randomN = Math.floor( Math.random()*13 ) + 1
  
  if(randomN > 10){
  	return 10
  }else if(randomN === 1) {
  	return 11
  }else {
  	return randomN
  }
}

function startGame(){
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard,secondCard]
	sum = firstCard + secondCard
	renderGame()
}

function renderGame()  {
cardEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
	cardEl.textContent += cards[i] + " ";
} 


sumEl.textContent = "Sum: " + sum
if(sum < 20){
	message ="Do you want to draw a new card?"
} else if(sum===21) {
    message= "Wohoo! You've got Blackjack! "
    hasBlackJack = true;
} else {
	message = "You're out of the game! "
	isAlive = false;
}

messageEl.textContent = message;

}

function newCard(){
	if(isAlive ===true && hasBlackJack === false){
	let card = getRandomCard();
	sum += card;
	cards.push(card);
	renderGame();	
	
	}
	
}

mybtn.addEventListener('click',startGame)
btnNew.addEventListener('click',newCard)