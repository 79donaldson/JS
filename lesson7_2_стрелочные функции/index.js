// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current -year
// }

// console.log(getAge(1979))

// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current -year
// }

// console.log(calculateAge(1979))

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current -year
// }

// const getAge = year => new Date().getFullYear() - year
// console.log(getAge(1983))

const person = {
    age: 25,
    firstName: 'Max',
    lastName: 'Maxus',
    logNameWithTimeout() {
        window.setTimeout(() => {
            console.log('FullName = ' + this.firstName + ' ' + this.lastName)
        
        }, 1000)
    }
}