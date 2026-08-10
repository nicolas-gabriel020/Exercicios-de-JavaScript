const adicionar = document.querySelector('#executar')
adicionar.addEventListener('click', multiplo)

let res = document.querySelector('#res')
let valor = document.querySelector('#valor')
let valores = document.querySelector('#valores')

let numeros = []
let c = 0
let controle = false

function multiplo() {
    if (controle) {
        recomecar()
    }

    if (valor.value == '') {
        res.innerHTML = 'Por favor digite um número!'
        valor.focus()
    } else {
        let conversao = Number(valor.value)
        let decimal = Math.floor(conversao)

        if (decimal != conversao) {
            res.innerHTML = 'Por favor apenas números inteiros!'
            valor.focus()
        } else {
            res.innerHTML = 'Aguardando execução...'
            valor.value = ''
            valor.focus()

            c++
            valores.innerHTML = `Digite o ${c + 1}º valor`
           
           numeros.push(conversao)

           if (c === 15) {
            controle = true
            res.innerHTML = ''
            adicionar.innerHTML = 'Recomeçar do inicio'
            valores.innerHTML = 'Digite o 1º valor'

            for (let i = 0; i < 15; i++) {
                if (numeros[i] % 10 === 0) {
                    res.innerHTML += `Posição ${i} -->Valor ${numeros[i]} <br>`
                }
            }
           } 
        }
    }
}

function recomecar() {
    adicionar.innerHTML = 'Adicionar'
    numeros = []
    valor.value = ''
    c = 0
    controle = false
    return
}