// Desafio!!
// Criar uma stream de numeros
// entre min e max com Observable!
const { Observable, noop } = require('rxjs')

function entre(min, max) {
    return new Observable(subscriber => {
        Array(max - min + 1).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

/* for(let i = min; i <= max; i++) {
            subscriber.next(i)
        }
*/

entre(4, 10)
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log('Fim!')
    )