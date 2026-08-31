const executar = document.querySelector('#executar')
executar.addEventListener('click', valores)

let res = document.querySelector('#res')
let num1 = document.querySelector('#valor1')
let num2 = document.querySelector('#valor2')

let controle = false

function valores () {
    if (controle) {
        resete()
        return
    }
    if (num1.value == '' || num2.value == '') {
        res.innerHTML = 'Digite dois valores!'
        num1.focus()
    } else {
        controle = true
        executar.innerHTML = 'Começar novamente'

        let numero1 = Number(num1.value)
        let numero2 = Number(num2.value)

        maior(numero1, numero2)
    }
}

function maior (valor1, valor2) {
    if (valor1 > valor2) {
        res.innerHTML = `O maior valor digitado foi ${valor1}`
    } else if (valor2 > valor1) {
        res.innerHTML = `O maior valor digitado foi ${valor2}`
    } else {
        res.innerHTML = 'Os dois valores são iguais!'
    }
}

function resete () {
    res.innerHTML = 'Aguardando execução...'
    executar.innerHTML = 'Executar'

    num1.value = ''
    num2.value = ''
    controle = false

    num1.focus()

    return
}