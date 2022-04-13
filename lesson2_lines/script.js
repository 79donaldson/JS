var str1 = 'Hello world'
var str2 = "Hello world 2"

var personName = 'Victor'
var personeLastName = 'Bublikov'

var message = 'Человека зовут "' + personName + ' ' + personeLastName + '"'

var message2 = 'Человека зовут \'' + personName + '\''


console.log(str1)
console.log(str2)
console.log(message)
console.log(message2)

var newMessage = 'Hello world!!!'

console.log(newMessage.length)
console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())
console.log(newMessage.charAt(1))
console.log(newMessage.indexOf('world'))
console.log(newMessage.indexOf('cat'))
console.log(newMessage.substr(1, 4))
console.log(newMessage.substr(newMessage.indexOf('world'), 5))
console.log(newMessage.substring(newMessage.indexOf('world'), 11))

console.log(newMessage.substring(5, 11))