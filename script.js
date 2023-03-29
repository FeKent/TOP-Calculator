const calcInput = document.querySelector('.content')
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const output = document.getElementById('output')
const clearMems = document.getElementById('clear')
const equal = document.getElementById('Equals')



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
let answer = ''

numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    output.textContent = currentValue;
}))

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent)
    output.textContent = operator
}))

equal.addEventListener('click', function(e){
    operation()
    answer = +answer.toFixed(2);
    output.textContent = answer
})

clearMems.addEventListener('click', function(e){
    clearMemory(e.target.textContent)
    output.textContent = ''
})


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

function operation(){
    currentValue = parseInt(currentValue);
    previousValue = parseInt(previousValue);

    if (operator == '+'){
        answer = previousValue + currentValue
    } else if (operator == '-'){
        answer = previousValue - currentValue
    } else if (operator == '*'){
        answer = previousValue * currentValue
    } else {
        answer = previousValue / currentValue
    }
}

function clearMemory(){
    previousValue = ''
    currentValue = ''
    selectedOperator = ''
    answer = ''
}