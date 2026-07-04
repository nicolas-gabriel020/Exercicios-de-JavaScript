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
let vitorias = 0
let derrotas = 0
let porcentagem = 0
let total_partidas = 1
let jogo_finalizado = false

function sorteio() {
    if (jogo_finalizado) {
        jogo_finalizado = false
        botao.innerHTML = 'Enviar palpite'

        valor = Math.random() * 10
        valor_formatado = Math.floor(valor)
        novo_valor = valor_formatado + 1

        acerto = 0
        erro = 0
        c = 0
        i = 4
        total_partidas++
    }

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
            numero.value = ''
            numero.focus()

            c++

            if (numero_formatado == novo_valor) {
                acerto++
            } else {
                erro++
            }

            if (c <= 4 && numero_formatado == novo_valor) {
                vitorias++
                porcentagem = (vitorias / total_partidas) * 100

                res.innerHTML = `Você acertou na ${c} tentativa! <br><br>
                Você escolheu ${numero_formatado} <br>
                Computador escolheu ${novo_valor} <br><br>
                Acertos: ${acerto} <br>
                Erros: ${erro} <br><br>
                Total de vitórias: ${vitorias} <br>
                Total de derrotas: ${derrotas} <br><br>
                Porcentagem de vitórias: ${porcentagem.toFixed(1)}%`

                jogo_finalizado = true
                botao.innerHTML = 'Tentar novamente'
            } else if (c < 4) {
                i--
                let maior_menor = ''

                if (numero_formatado > novo_valor) {
                    maior_menor = 'maior'
                } else {
                    maior_menor = 'menor'   
                }

                res.innerHTML = `Você errou! <br>
                Restam ${i} tentativas! <br><br>
                Dica: Número digitado ${maior_menor} que o sorteado!`
            } else {
                derrotas++

                res.innerHTML = `Você teve um total de ${c} tentativas <br><br>
                Computador escolheu: ${novo_valor} <br><br>
                Total de vitórias: ${vitorias} <br>
                Total de derrotas: ${derrotas}<br><br>
                Total de acertos: ${acerto} <br>
                Total de erros: ${erro} <br><br>
                Porcentagem de vitórias: ${porcentagem.toFixed(1)}%`

                jogo_finalizado = true
                botao.innerHTML = 'Tentar novamente'
            }
        }
    }
}