var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

var score = 0

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)



function startGame() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')

    renderBox()
}

function handleBoxClick(event) {
    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}

function renderBox () {    
   $game.innerHTML = ''   
   var box = document.createElement('div')
   var boxSize = getRandom(30, 100)
   var gameSize = $game.getBoundingClientRect()
   var maxTop = gameSize.height - boxSize
   var maxLeft = gameSize.width - boxSize
   var randomColor = getColor()
   console.log(gameSize) 

   box.style.height = box.style.width = boxSize + 'px'
   box.style.position = 'absolute'
   box.style.backgroundColor = '#' + randomColor
   box.style.top = getRandom(0, maxTop) + 'px'
   box.style. left = getRandom(0, maxLeft) + 'px'
   box.style.cursor = 'pointer'
   box.setAttribute('data-box', 'true')


   $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getColor() {
        return Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()
    //return '#' + ((1<<24)*Math.random()|0).toString(16)
    }

