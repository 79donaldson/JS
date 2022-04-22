var person = {
    name: 'Max',
    age: 28,
    job: 'Frontend',
    displayinfo: function(ms) {
        console.log(this)
        

        setTimeout(function() {
            console.log('Name', this.name)
            console.log('Age', this.age)
            console.log('Job', this.job)
        }.bind(this), ms)
    }
}

person.displayinfo(5000)



// for (var key in person) {
//     console.log(person[key])
// }

// Object.keys(person).forEach(function(key) {
//     console.log(person[key])
// });