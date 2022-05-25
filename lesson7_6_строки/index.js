const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector('ul')

const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`
const elephant = `<li>${createLink({path: 'https://s-elephant.dp.ua', name: 'Elephant'})}</li>`

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', elephant)

const strToLog = `
Hello
    World  
        and 
        you 
    hello   
`
console.log(strToLog)
