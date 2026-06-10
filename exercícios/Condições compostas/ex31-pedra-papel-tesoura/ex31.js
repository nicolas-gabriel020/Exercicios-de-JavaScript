const botao = document.querySelector('#botao')
botao.addEventListener('click', jokenpo)

function jokenpo() {
    let res = document.querySelector('#res')
    let opcao = document.getElementsByName('opcao')

    res.innerHTML = '' 
    res.style.background = ''

    let valor = Math.random() * 3
    let valor_formatado = Math.floor(valor) 
    let novo_valor = valor_formatado + 1

    let jogador = null
    let computador = null

    if (opcao[0].checked) { 
        jogador = 'Pedra'
    } else if (opcao[1].checked) {
        jogador = 'Papel'
    } else {
        jogador = 'Tesoura'
    }

    if (novo_valor == 1) {
        computador = 'Pedra'
    } else if (novo_valor == 2) {
        computador = 'Papel'
    } else {
       computador = 'Tesoura'
    }

    if (jogador == 'Pedra' && computador == 'Tesoura' || jogador == 'Papel' && computador == 'Pedra' || jogador == 'Tesoura' && computador == 'Papel') {
        res.innerHTML = `Sua escolha: ${jogador} <br>
        Escolha do computador: ${computador} <br>
        Resultado: Você venceu!`

        res.style.background = 'green'
    } else if (jogador == computador) {
        res.innerHTML = `Sua escolha: ${jogador} <br>
        Escolha do computador: ${computador} <br>
        Resultado: Empatou!`

        res.style.background = 'yellow'
    } else {
        res.innerHTML = `Sua escolha: ${jogador} <br>
        Escolha do computador: ${computador} <br>
        Resultado: Você perdeu!`

        res.style.background = 'red'
    }
}