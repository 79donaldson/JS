var carYear = 2008
var personYear = 1979

function calculateAge(year){
    var currentYear = 2021
    var result = currentYear - year
    return result

}

// function checkAngLogAgeCar(year){
//     if (calculateAge(year) < 10) {
//         console.log('Машина не страше 10 років')
//     } else {
//         console.log('Машина старше 10 років')
//     }     
// }
// function checkAngLogAgePerson(year){
//     if (calculateAge(year) < 10) {
//         console.log('Людина не страше 10 років')
//     } else {
//         console.log('Людина старше 10 років')
//     }     
// }

// checkAngLogAgeCar(carYear)
// checkAngLogAgePerson(personYear)

function checkAngLogAge(options){
    
    // Эти 2 строчки тоже можно вынести в отдельную функцию, которая будет возвращать отдельный obj
    const target = options.carYear === undefined ? 'Людина' : 'Машина';
    const year = options.carYear  === undefined ?  options.personYear : options.carYear;
    // ---------------------------------------------------------------------------------

    if (calculateAge(year) < 10) {
        console.log(`${target} не страше 10 років`)
    } else {
        console.log(`${target} старше 10 років`)
    }     
}
checkAngLogAge({ carYear })
checkAngLogAge({ personYear })


// if (calculateAge(carYear) < 10) {
//     console.log('Ця машина не страше 10 років')
// } else {
//     console.log('Ця машина старше 10 років')
// }

// if (calculateAge(personYear) < 10) {
//     console.log('Ця людина не страше 10 років')
// } else {
//     console.log('Ця людина старше 10 років')
// }

