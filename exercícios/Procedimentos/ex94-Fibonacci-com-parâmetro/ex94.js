const executar = document.querySelector('#executar')
executar.addEventListener('click', recebe_valores)

let res = document.querySelector('#res')
let valor = document.querySelector('#valor')

let sequencia_1 = 1
let sequencia_2 = 1
let sequencia_3 = 0

function recebe_valores() {
    if (valor.value == '') {
        res.innerHTML = 'Digite a quantidade de termos'
        valor.focus()
    } else {
        let numero = Number(valor.value)
        let decimal = Math.floor(numero)

        valor.value = ''
        valor.focus()

        if (numero != decimal) {
            res.innerHTML = 'Por favor digite um número inteiro'
        } else {

            fibonacci(numero)
        }
    }
}

function fibonacci(num1) {
    let vet = []

    for(let c = 0; c < num1; c++) {
        vet.push(sequencia_1)
        
        sequencia_1 = sequencia_2 + sequencia_3
        sequencia_3 = sequencia_2
        sequencia_2 = sequencia_1

    }

    res.innerHTML = `Fibonacci(${num1}): ${vet.join('>>')} Fim!`
    resete()
}

function resete() {
    sequencia_1 = 1
    sequencia_2 = 1
    sequencia_3 = 0

    return
}