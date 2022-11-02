const gameSummary = {
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
	const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option
	return aiHand
}

// Trzecia funkcja - ustalająca kto wygrał

function checkResult(player, ai) {
	if (player === ai) {
		return 'draw'
	} else if (
		(player === 'papier' && ai === 'kamień') ||
		(player === 'kamień' && ai === 'nożyczki') ||
		(player === 'nożyczki' && ai === 'papier')
	) {
		return 'win'
	} else {
		return 'loss'
	}
}

// Czwarta funkcja - publikacja wyniku

const yourChoice = document.querySelector('[data-summary="your-choice"]')
const computerChoice = document.querySelector('[data-summary="ai-choice"]')
const whoWin = document.querySelector('[data-summary="who-win"]')
const numberGamme = document.querySelector('p.numbers span')
const wins = document.querySelector('p.wins span')
const losses = document.querySelector('p.losses span')
const draws = document.querySelector('p.draws span')

function publishResult(player, ai, result) {
	yourChoice.textContent = player
	computerChoice.textContent = ai
	numberGamme.textContent = ++gameSummary.numbers

	if (result === 'win') {
		wins.textContent = ++gameSummary.wins
		whoWin.textContent = 'Wygrałeś!!!'
		whoWin.style.color = 'green'
	} else if(result === 'loss') {
        losses.textContent = ++gameSummary.losses
		whoWin.textContent = 'Przegrałeś!!!'
		whoWin.style.color = 'orange'
    } else {
        draws.textContent = ++gameSummary.draws
		whoWin.textContent = 'Remis!!!'
		whoWin.style.color = 'blue'
    }
}

// Funkcja zerujaca wybór  

function endGame () {
    document.querySelector(`[data-option='${game.playerHand}']`).style.boxShadow = ''
    game.playerHand = ''
}

// Główna funkcja sterująca
const btn = document.querySelector('.start')

function startGame() {
	if (!game.playerHand) {
		return alert('Wybierz dłoń!')
	}
	game.aiHand = aiChoice()
	const gameResult = checkResult(game.playerHand, game.aiHand)
	console.log(gameResult)
	publishResult(game.playerHand, game.aiHand, gameResult)
    endGame()

}

hands.forEach(img => img.addEventListener('click', handSelection))
btn.addEventListener('click', startGame)
