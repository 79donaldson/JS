var cars = ['ford', 'mazda', 'kia', 'bmw']

console.log(cars)
console.log(cars[1])

console.log(cars.length) 
cars.push('Audi')
console.log(cars)

// cars.pop()
// console.log(cars)

//удаляет и возвращает последний элемент
var audi = cars.pop()
console.log(cars, audi)

//удаляет и возвращает первый элемент
var ford = cars.shift()
console.log(cars, ford)


cars.unshift(audi)
console.log(cars)

var index = cars.indexOf('kia')
var kia = cars[index]
console.log(kia)