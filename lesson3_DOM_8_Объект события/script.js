var divs = document.querySelectorAll('div')
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var link = document.querySelector('a')

//меняем цвет при наведении мышки
 box1.addEventListener('mouseenter', function() {
     this.style.backgroundColor = "yellow"
 })
 box1.addEventListener('mouseleave', function() {
     this.style.backgroundColor = "blue"
 })    

box2.addEventListener('mouseenter', function() {
    this.style.backgroundColor = "blue"
})
box2.addEventListener('mouseleave', function() {
    this.style.backgroundColor = "yellow"
})


// изменение чтобы ссылка не открывалась
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation()
        console.log(this.getAttribute('id'))
    })
}

//при нажатии на ссылку меняется цвет квадратов
function handleLinkClick(event) {
    event.preventDefault()
   
     box1.style.background = box1.style.background === 'blue'
        ? this.style.background = "yellow"
        : this.style.background = "blue"

     box2.style.background = box2.style.background === 'yellow'
         ? this.style.background = "blue"
        : this.style.background = "yellow"

    //console.log(div.style.background)
}

link.addEventListener('click', handleLinkClick)