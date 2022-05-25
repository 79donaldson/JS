function printObject(objName) {
    console.log('Printing Object: ', objName)
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            console.log('[' + key + ']', this[key])
        }
    } 
}

var person = {
    firstName: 'Max',
    job: 'Backend',
    age: 29,
    frends: ['Elena, Igor']
}

var car = {
    model: 'focus',
    name: 'ford',
    year: 2017
}

var printPerson = printObject.bind(person)
printPerson(person)

printObject.call(car, 'Car')

printObject.apply(car, ['Person'])