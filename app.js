const board = document.querySelector('#board')
const colors = [
    '#ADFF2F',
	'#7FFF00',
	'#7CFC00',
	'#00FF00',
	'#32CD32',
	'#98FB98',
	'#90EE90',
	'#00FA9A',
	'#00FF7F',
	'#3CB371',
	'#2E8B57',
	'#228B22',
	'#008000',
	'#006400',
	'#9ACD32',
	'#6B8E23',
	'#808000',
	'#556B2F',
	'#66CDAA',
	'#8FBC8F',
	'#20B2AA',
	'#008B8B',
	'#008080'	
]
const SQUARES_NUMBER = 540

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#696969'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}