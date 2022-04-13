
var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://s-elephant.dp.ua')
a.setAttribute('title', 'go to rest')
a.textContent = 'S-elephant'

var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('blue')


var hasClass = box2.classList.contains('yellow')
console.log(hasClass)

if (hasClass) {
    box2.classList.remove('yellow')
} else {
    box2.classList.add('yellow')
}
