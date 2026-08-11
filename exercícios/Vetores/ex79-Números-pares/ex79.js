const adicionar = document.querySelector('#adicionar')
adicionar.addEventListener('click', pares)
 
let res = document.querySelector('#res')
let valor = document.querySelector('#valor')
let valores = document.querySelector('#valores')

let c = 0
let vetor = []
let controle = false

function pares() {
if (controle) {
    resetar() 
    return   
}

res.innerHTML = ''

if (valor.value == '') {
    res.innerHTML = 'Por favor digite um valor.'
    valor.focus()
} else {
    let decimal = Number(valor.value)
    let numero = Math.floor(decimal)

    if (numero != decimal) {
        res.innerHTML = 'Por favor digite um número inteiro.'
    } else {
        valor.value = ''
        valor.focus()

        c++

        valores.innerHTML = `Digite o ${c + 1}º valor`
        res.innerHTML = 'Aguardando execução...'

        vetor.push(numero)

        if (c === 10) {
            adicionar.innerHTML = 'Recomeçar novamente'
            res.innerHTML = 'Números pares e suas posições: <br>'

            controle = true
            let totalpares = 0

            for (let i = 0; i < 10; i++) {
                if (vetor[i] % 2 === 0) {
                    res.innerHTML += `Posição ${i} --> ${vetor[i]} <br>`
                    totalpares++
                }
            }
             if (totalpares === 0) {
                res.innerHTML += 'Não foi digitado nenhum número par.'
            }
        }
    }
}
}

function resetar() {
    controle = false
    c = 0
    vetor = []
    valor.value = ''

    adicionar.innerHTML = 'Adicionar'
    valores.innerHTML = 'Digite o 1º valor'

    return
}