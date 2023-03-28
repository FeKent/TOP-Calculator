const calcInput = document.querySelector('.content')
const allButtons = document.querySelectorAll('button')
const output = document.getElementsByClassName('output')

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
       let value = e.target.dataset.value
       let displayValue = value
       output.innerHTML = displayValue
       console.log(value)
    } )
})

