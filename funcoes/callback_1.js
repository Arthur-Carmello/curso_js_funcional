function exec(fn, a, b) {
    return fn(a, b)
}

//const exec = (fn, a, b) => fn(a, b) - Arrow Function

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)   //callback - passar uma função como parâmetro para outra função, e ela será chamada de volta.
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

//setInterval(() => console.log('Exec 2...'), 1000)  //chama a função por segundo
setInterval(function () {
    console.log('Exec 3...')
}, 5000)
