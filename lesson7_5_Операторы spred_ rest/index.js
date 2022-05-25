const form = document.querySelector('form')

form.addEventListener('submit', event => {

    event.preventDefault()

    const title = form.title.value
    const text = form.text.value
    const description = form.description.value
    saveForm(title, text, description)

})

// функция вывода и сохранения даннных с формы ввода
// function saveForm({title, text, description}) {

//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title: data.title,
//         text: data.text,
//         description: data,description
//     }

//     console.log('Ford data:', formData)
// }



//сокращаем код функции
// function saveForm({title, text, description}) {

//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     }

//     console.log('Ford data:', formData)
// }



// использование оператора spred (...) позволяет сократить код и 
// автоматически подставляет данные с saveForm
// function saveForm(data) {

//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     }

//     console.log('Ford data:', formData)
// }


// REST
function saveForm(...args) {
    
    const [title, text, description] = args

    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    }

    console.log('Ford data:', formData)
}



