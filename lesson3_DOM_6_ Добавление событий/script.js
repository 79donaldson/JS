var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')


function buttonHandler() {
    console.log('clicked!')
    h1.textContent = input.value
}

h1.addEventListener('mouseenter', function() {
    this.style.color = 'yellow'
    this.style.backgroundColor = 'Blue'
    this.style.borderRadius = "25px"
})

h1.addEventListener('mouseleave', function() {
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
    console.log('mouse has left h1')
})

button.addEventListener('mouseenter', function() {
     this.style.backgroundColor = "yellow"
 })    

 button.addEventListener('mouseleave', function() {
     this.style.backgroundColor = 'transparent'
    
 })


button.addEventListener('click', buttonHandler)