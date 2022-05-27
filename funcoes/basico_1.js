
let numero = 4
console.log(numero)

// Function Declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

// Function Expression
const boaTarde = function () {
    console.log('Boa tarde!')
}

let x = boaTarde()
console.log(x) //undefined

boaTarde()

function somar(a, b = 0) {
    return a + b 
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3, 5, 5, 6, 7, 8)
console.log(resultado)

resultado = somar(3) //NaN
console.log(resultado)
