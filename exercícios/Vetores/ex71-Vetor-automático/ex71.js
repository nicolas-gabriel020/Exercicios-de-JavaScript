const executar = document.querySelector('#executar')
executar.addEventListener('click', vetor_automatico)

let res = document.querySelector('#res')

function vetor_automatico() {
    res.innerHTML = ''

    let posicao = []

    res.innerHTML += 'Sequência: '

    for (let c = 0; c < 8; c++) {
        posicao[c] = 999
    }

    res.innerHTML += `${posicao}, Fim! <br><br>`

    for (let i = 0; i < 8; i++) {
        res.innerHTML += `Posição ${i}: ${posicao[i]} <br>`
    }
}