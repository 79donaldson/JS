const createLink = ({path, name}) => `<a target="_blank", href=${path} ">"${name}</a>`

const ul = document.querySelector('ul')

const google = `<li>'${createLink({path: 'https://google.com', name: 'Google'})}</li>`

const elephant = `<li>'${createLink({path: 'https://s-elephant.dp.ua', name: 'S-elephant'})}</li>`

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', elephant)

const strTolog =`
Hello
  Hello
    Hello
`
console.log(strTolog)