function Car(name, year) {
    this.name = name
    this.year = year
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
}

Car.prototype.color = 'blue'


var ford = new Car('Ford', 2015)
var bmw = new Car('BMW', 2017)

ford.color = 'green'

console.log(ford)
console.log(bmw)

