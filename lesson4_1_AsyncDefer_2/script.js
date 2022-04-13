document.querySelector('#alert').addEventListener('click', function(){
    alert('Ви натиснули кнопку ALERT')

})

document.querySelector('#confirm').addEventListener('click', function(){
 var decision = confirm('Ви дійсно хочете натиснути кнопку?')

 if (decision) {
    alert('Ви натиснули кнопку ALERT')
} else {
    console.log('Відмова')
}
    
})

document.querySelector('#prompt').addEventListener('click', function(){
  var age = prompt('Скільки Вам років ?')

  if (age <= 18 ){
      alert('Ваш вік молодще за 18 ')
 }  else {
     alert('Ваш вік старше за 18 років')
 }
})

//throw Error('console.error');

console.log('console.log')
console.warn('Consolw.warwinig')
console.error('Console.info')
console.info('console.info')

throw Error('console.error');