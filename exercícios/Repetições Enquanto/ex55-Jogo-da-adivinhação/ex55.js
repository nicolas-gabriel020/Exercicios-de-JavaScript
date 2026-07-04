let res = document.querySelector('#res')
let numero = document.querySelector('#numero')

const botao = document.querySelector('#botao')
botao.addEventListener('click', sorteio)

let valor = Math.random() * 10
let valor_formatado = Math.floor(valor)
let novo_valor = valor_formatado + 1

let acerto = 0
let erro = 0
let c = 0
let i = 4
let diferenca = 0
let distancia = 0

function sorteio() {
    if (numero.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'

        numero.focus()
    } else {
        let numero_formatado = Number(numero.value)
        let decimal = Math.floor(numero_formatado)

        if (numero_formatado < 1 || numero_formatado > 10) {
            res.innerHTML = 'Número inválido!'
        } else if (numero_formatado != decimal) {
            res.innerHTML = 'Preencha apenas com números inteiros!'
        } else {
            c++

            if (numero_formatado == novo_valor) {
                acerto++
            } else {
                erro++

                 diferenca = numero_formatado - novo_valor
                 distancia = Math.abs(diferenca)
            }

            if (c < 4) {
                if (numero_formatado == novo_valor) {
                    res.innerHTML = `Você acertou! <br><br>
                    Você escolheu ${numero_formatado} <br>
                    Computador escolheu ${novo_valor} <br><br>
                    Acertos: ${acerto} <br>
                    Erros: ${erro}`
                } else {
                    i--
                    res.innerHTML = `Você errou! <br>
                    Restam ${i} tentativas! <br><br>
                    Acertos: ${acerto} <br>
                    Erros: ${erro} <br>`
                }
            } else {
                res.innerHTML = `Você teve um total de ${c} tentativas <br><br>
                Total de acertos: ${acerto} <br>
                Total de erros: ${erro}`
            }
        }
    }
}

/*const botao = document.querySelector('#botao')
botao.addEventListener('click', sorteio)

let acerto = 0
let erro = 0

function sorteio() {
    let res = document.querySelector('#res')

    let valor = Math.random() * 10
    let valor_formatado = Math.floor(valor)
    let novo_valor = valor_formatado + 1

    let numero = document.querySelector('#numero')

    if (numero.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'
    } else {
        let numero_formatado = Number(numero.value)
        let decimal = Math.floor(numero_formatado)

        if (numero_formatado < 1 || numero_formatado > 10) {
            res.innerHTML = 'Número inválido!'
        } else if (numero_formatado != decimal) {
            res.innerHTML = 'Preencha apenas com números inteiros!'
        } else {
            if (numero_formatado == novo_valor) {
                acerto++
                res.innerHTML = `Você acertou! <br><br>
                Você escolheu ${numero_formatado} <br>
                Computador escolheu ${novo_valor} <br><br>
                Acertos: ${acerto} <br>
                Erros: ${erro}`
            } else {
                erro++
                let diferenca = numero_formatado - novo_valor
                let distancia = Math.abs(diferenca)

                res.innerHTML = `Você errou! <br><br>
                Você escolheu ${numero_formatado} <br>
                Computador escolheu ${novo_valor} <br><br>
                Acertos: ${acerto} <br>
                Erros: ${erro} <br>
                Diferença: ${distancia}`
            }
        }
    }
}*/