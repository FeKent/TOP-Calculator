const calcInput = document.querySelector('.content')
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const output = document.getElementById('output')
const clear = document.querySelectorAll('.clear')



// allButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//        let value = e.target.dataset.value
//        let displayValue = value
//        output.textContent = displayValue
//        console.log(value)
//     } )
// })
//* Redone so that multiple values will be displayed in the output bar


let currentValue = ''
let previousValue = ''
let selectedOperator = ''

numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    output.textContent = currentValue;
}))

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent)
    output.textContent = operator
}))


function handleNumber (num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
}

function handleOperator (op){
    if(op == "x"){
        operator = '*'
    } else {
        operator = op
    }
    previousValue = currentValue;
    currentValue = '';
}
