const btn = document.querySelector('button')
const wrapper = document.querySelector('.wrapper')
const squareTemp = document.querySelector('.square-temp')

let num = 1

const addMoreSquares = () => {
	const square = squareTemp.content.cloneNode(true)

    square.querySelector('.square-number').textContent = num
	wrapper.appendChild(square)
	num++
}

btn.addEventListener('click', addMoreSquares)

// const addMoreSquares = () => {
// 	const square = document.createElement('div')
// 	square.classList.add('square')

// 	square.innerHTML = `
//         <div class="square">
//             <p class="square-number">${num}</p>
//         </div>`

// 	wrapper.appendChild(square)
// 	num++
// }