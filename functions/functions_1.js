// function expression
// function anonymous

// uma função serve para executa código várias vezes
// parâmetros (parameters)
// const sum = function (number1, number2) {
//     console.log(number1 + number2)
// }

// arguments - argumentos
// sum(2 ,3) 
// sum(4 ,3)


const sum = function (number1, number2) {
    total = (number1 + number2)
    return total
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
