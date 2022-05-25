<<<<<<< HEAD
const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector('ul')

const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`
const elephant = `<li>${createLink({path: 'https://s-elephant.dp.ua', name: 'Elephant'})}</li>`
=======
const createLink = ({path, name}) => `<a target="_blank", href=${path} ">"${name}</a>`

const ul = document.querySelector('ul')

const google = `<li>'${createLink({path: 'https://google.com', name: 'Google'})}</li>`

const elephant = `<li>'${createLink({path: 'https://s-elephant.dp.ua', name: 'S-elephant'})}</li>`
>>>>>>> 1c29210acff19f4d34a3687a24d65a3791241abd

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', elephant)

<<<<<<< HEAD
const strToLog = `
Hello
    World  
        and 
        you 
    hello   
`
console.log(strToLog)
=======
const strTolog =`
Hello
  Hello
    Hello
`
console.log(strTolog)
>>>>>>> 1c29210acff19f4d34a3687a24d65a3791241abd
