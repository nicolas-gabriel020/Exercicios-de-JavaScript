const botao = document.querySelector('#botao')
botao.addEventListener('click', tempo_exercicio)

function tempo_exercicio() {
    let res = document.querySelector('#res')

    let tempo = document.querySelector('#horas')

    if (tempo.value == '') {
        res.innerHTML = 'Por favor preencha todos os campos!'
    } else {
        let horas = Number(tempo.value)

        if (horas <= 0) {
            res.innerHTML = 'Preencha com valores válidos'
        } else {
            let pontos = 0
            let dinheiro = 0

            if (horas <= 10) {
                pontos = horas * 2
                dinheiro = pontos * 0.05
            } else if (horas <= 20) {
                pontos = horas * 5
                dinheiro = pontos * 0.05
            } else {
                pontos = horas * 10
                dinheiro = pontos * 0.05
            }

            res.innerHTML = `Horas praticadas: ${horas}h <br>
            Pontos conquistados: ${pontos.toFixed(1)} <br><br>
            Valor por ponto: R$0,05 <br><br>
            Total recebido: ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
        }
    }
}