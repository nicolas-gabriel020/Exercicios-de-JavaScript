const botao = document.querySelector('#botao')
botao.addEventListener('click', sorteio)

let acerto = 0
let erro = 0

function sorteio() {
    let res = document.querySelector('#res')

    let valor = Math.random() * 5
    let valor_formatado = Math.floor(valor)
    let novo_valor = valor_formatado + 1

    let numero = document.querySelector('#numero')

    if (numero.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'
    } else {
        let numero_formatado = Number(numero.value)
        let decimal = Math.floor(numero_formatado)

        if (numero_formatado < 1 || numero_formatado > 5) {
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
}