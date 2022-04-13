
var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://s-elephant.dp.ua')
a.setAttribute('title', 'go to rest')
a.textContent = 'S-elephant'

console.log(a.attributes)