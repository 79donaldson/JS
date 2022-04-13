var str = '1, 2, 3, 4, 5, 6, 7, 8'

var Array = str.split(',')

console.log(Array.join (';'))
// console.log(Array.reverse())

Array.splice(6, 0, '11')

var newArray = Array.concat()

//console.log(newArray)

var objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 28},
    {name: ' Viktor', age: 29}

]

//console.log (objArr)

var personFound = objArr.find(function(person){
    return person.age === 29
})
console.log(personFound)

var objArray = [1,2,3,4,5,6,7,8,9].filter(function(i){
    return i%2 !==0
})
console.log(objArray)

var numArray = Array.map(function(i){
    return parseInt(i)
})
console.log(numArray)

