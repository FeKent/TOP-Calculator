const calcInput = document.querySelector('.content')
const allButtons = document.querySelectorAll('button')
const output = document.getElementById('output')

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
       let value = e.target.dataset.value
       let displayValue = value
       output.textContent = displayValue
       console.log(value)
    } )
})

