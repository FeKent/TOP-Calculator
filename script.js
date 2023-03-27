const calcInput = document.querySelector('.content')
const allButtons = document.querySelectorAll('button')

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
       console.log(e.target.dataset.value) 
    } )
})
