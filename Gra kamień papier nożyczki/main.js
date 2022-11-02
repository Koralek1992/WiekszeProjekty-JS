const gameSummery = {
	numbers: 0,
	wins: 0,
	losses: 0,
	draws: 0,
}

const game = {
	playerHand: '',
	aiHand: '',
}

// Pierwsza funkcja - wybór elementu do gry i dodanie obwódki
const hands = [...document.querySelectorAll('.select img')]

function handSelection() {
	game.playerHand = this.dataset.option
	console.log(game.playerHand)
	hands.forEach(img => (img.style.boxShadow = ''))
	this.style.boxShadow = '0 0 0 4px red'
}


// Druga funkcja - wybór komputera 

function aiChoice() {
    const aiHand = hands[Math.floor(Math.random()*3)].dataset.option
    return aiHand
}

// Trzecia funkcja - ustalająca kto wygrał

function checkResult(player, ai) {
    
}


// ...funkcja - funkcja sterująca
const btn = document.querySelector('.start')

function startGame() {
	if (!game.playerHand) {
		return alert('Wybierz dłoń!')
	}
    game.aiHand = aiChoice()
    const gameResult = checkResult()
}

hands.forEach(img => img.addEventListener('click', handSelection))
btn.addEventListener('click', startGame)
