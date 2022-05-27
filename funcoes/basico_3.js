// arrow function
const felizNatal = () => console.log('Feliz Natal!!!!!')
felizNatal()

//const saudacao = nome => "Fala " + nome + ", blz!?!"
const saudacao = nome => `Fala ${nome}, blz?!?` //expressão
console.log(saudacao('Maria'))

const somar = (...numeros) => { //corpo de função
    console.log(Array.isArray(numeros)) // variável ou parametro é do tipo Array, typeof vai dar que é objeto
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

const subtrair = (a, b) => a - b
console.log(subtrair(4, 1))

const soma = a => b => c => a + b + c
console.log(soma(2)(3)(5))

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) //Todos os parâmetros dentro de um array

/*const potencia = base => {
    return exp => {
        return Math.pow(base, exp)
    }
}*/

const potencia = base => exp => Math.pow(base, exp) //arrow function dentro da outra
console.log(potencia(2)(4))

// this
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}
const numeros = [-333, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()