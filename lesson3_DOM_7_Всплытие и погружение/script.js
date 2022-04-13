var divs = document.querySelectorAll('div')
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')


 box1.addEventListener('mouseenter', function() {
     this.style.backgroundColor = "yellow"
 })

 box1.addEventListener('mouseleave', function() {
     this.style.backgroundColor = "blue"
 })    

box2.addEventListener('mouseenter', function() {
    this.style.backgroundColor = "blue"
})

box2.addEventListener('mouseleave', function() {
    this.style.backgroundColor = "yellow"
})


for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function() {
        console.log(this.getAttribute('id'))
    }, true)
}

