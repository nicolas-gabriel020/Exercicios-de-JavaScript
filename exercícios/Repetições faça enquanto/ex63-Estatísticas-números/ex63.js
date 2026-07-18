const adicioanar = document.querySelector('#adicionar')
adicioanar.addEventListener('click', adicionando)

let res = document.querySelector('#res')
let numero = document.querySelector('#valor')
let numeros = document.querySelector('#numeros')

let soma_numeros = 0
let total_valores = 0
let menor_valor = 0
let maior_valor = 0
let media = 0
let total_pares = 0
let controle = false

function adicionando() {
    if (controle) {
        zerar_dados()

        adicioanar.innerHTML = 'Adicionar número'
        controle = false
        return
    }

    if (numero.value == '') {
        res.innerHTML = 'Por favor digite um número!'
        numero.focus()
    } else {
        let valor = Number(numero.value)
        let decimal = Math.floor(valor)

        if (valor != decimal) {
            res.innerHTML = 'Por favor digite números inteiros!'
            numero.focus()
        } else {
            numero.value = ''
            numero.focus()

            total_valores++
            soma_numeros += valor
            
            numeros.innerHTML = `Digite o ${total_valores + 1}º valor`
            res.innerHTML = 'Em execução...'

            if (total_valores == 1) {
                maior_valor = valor
                menor_valor = valor
            } else {
                if (valor > maior_valor) {
                    maior_valor = valor
                }

                if (valor < menor_valor) {
                    menor_valor = valor
                }
            }

            if (valor % 2 == 0) {
                total_pares++
            }
        }
    }
}

const finalizar = document.querySelector('#finalizar')
finalizar.addEventListener('click', finalizacao)

function finalizacao() {
    adicioanar.innerHTML = 'Adicionar novamente'
    numeros.innerHTML = 'Sequência finalizada'
    controle = true

    if (total_valores == 0) {
        media = 0
    } else {
        media = soma_numeros / total_valores
    }

    res.innerHTML = `Somatório de todos os números: ${soma_numeros} <br>
    Média dos valores: ${media.toFixed(1)} <br><br>
    Maior valor digitado: ${maior_valor} <br>
    Menor valor digitado: ${menor_valor} <br><br>
    Total de valores pares: ${total_pares}`
}

function zerar_dados() {
    soma_numeros = 0
    total_valores = 0
    menor_valor = 0
    maior_valor = 0
    media = 0
    total_pares = 0
}