const botao = document.querySelector('#executar')
botao.addEventListener('click', execucao)

let res = document.querySelector('#res')
let valor = document.querySelector('#valor')

function execucao() {
    if (valor.value == '') {
        res.innerHTML = 'Por favor digite um número!'
        valor.focus()
    } else {
        let numero = Number(valor.value)
        let decimal = Math.floor(numero)    
        
        if (numero != decimal) {
            res.innerHTML = 'Por favor digite apenas números inteiros!'
        } else {
            valor.value = ''
            valor.focus()

            ParOuImpar(numero)
        }
    }
}

function ParOuImpar(num) {
    if (num % 2 == 0) {
        res.innerHTML = `O número ${num} é PAR!`
    } else {
        res.innerHTML = `O número ${num} é IMPAR!`
    }
}