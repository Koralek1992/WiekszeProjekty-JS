const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const testValues = () => {
	price.value = 10
	people.value = 10
	tip.value = 0.1
}

const showBill = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		console.log(tip.value)
		error.textContent = 'Uzupełnij wszystkie pola'
		costInfo.style.display = 'none'
	} else {
		error.textContent = ''
		countBill()
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)

	console.log(price.value)
	console.log(people.value)
	console.log(tip.value)

	console.log(typeof newPrice)

	const sum = (newPrice + newPrice * newTip) / newPeople
	console.log(sum)
	costInfo.style.display = 'block'

	cost.textContent = sum.toFixed(2)
}
// countBtn.addEventListener('click', testValues)
countBtn.addEventListener('click', showBill)
