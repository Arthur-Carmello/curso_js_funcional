let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)  //pode passar apenas um valor, nesse caso, só vai exibir 3.
})

/*let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa ({
        x: 4,
        y: 5
    })
}) */

p.then(function(valor) { //função é chamada quando a promessa for cumprida
    console.log(valor)
})

p.then(valor => console.log(valor)) 

const primeiroElemento = array =>  array[0] //Arrow Function
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

/*

--- O resultado de um método then é passado para o próximo método then
--- Sequência de operações baseadas em funções


p.then(valor => valor[0])  
 .then(primeiro => primeiro[0])
 .then(letra => letra.toLowerCase())
 .then(letraMinuscula => console.log(letraMinuscula))
 

.then(valor => console.log(valor))   //resultado da primeira chamada
.then(primeiro => console.log(primeiro))  //resultado da segunda chamada
.then(letra => console.log(letra))  //resultado da terceira chamada
.then(letraMinuscula => console.log(letraMinuscula)) //resultado da última chamada

*/