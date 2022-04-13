var person = {
    name: 'Aleksii',
    year: 1979,
    family: ['Olesya', 'Polina'],
    car: {
        year: 2008,
        name: 'Lanos'
    },
    calculateAge: function() {
        this.age = 2022 - this.year 
        
    }
}



console.log(person)
console.log(person.name)
console.log(person['year'])
var field = 'car'
console.log(person[field].year)

person.year = 1980 
console.log(person)

person.calculateAge()

console.log(person)
