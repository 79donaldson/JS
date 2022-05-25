const createCar = (name, model) => ({name, model})

const ford = createCar('Ford', 'Focus')
console.log(ford)

const yearFild = 'year'

const bmw = {
    name: 'BMW',
    ['model']: 'x6 sport',
    [yearFild]: 2021,

    logFields() {
        const {name, year, model}= this
        console.log(name, model, year)
    }
}
console.log(bmw)
bmw.logFields()

const {year} = bmw
console.log(year)