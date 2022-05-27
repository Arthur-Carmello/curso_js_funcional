// mock - simular dependência externa

let qtdeDeExecucoes = 0

// Pura que se tornou Impura
function somar(a, b) {
    qtdeDeExecucoes++ // efeitos colaterais observáveis
    return a + b
}

console.log(qtdeDeExecucoes)
console.log(somar(68, 311))
console.log(somar(68, 311))
console.log(somar(68, 311))
console.log(somar(68, 311))
console.log(somar(68, 311))
console.log(somar(68, 311))
console.log(qtdeDeExecucoes)

