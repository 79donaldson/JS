var person = {
    max: 'Max',
    age: 28,
    job: 'Frontend'
}

// for (var key in person) {
//     console.log(person[key])
// }

Object.keys(person).forEach(function(key) {
    console.log(person[key])
});