const executar = document.querySelector('#executar')
executar.addEventListener('click', vetor_automatico)

let res = document.querySelector('#res')

function vetor_automatico() {
    res.innerHTML = ''

    let posicao = []
    let numero = 5

    res.innerHTML += 'Sequência: '

    for (let c = 0; c < 10; c++) {
        posicao[c] = numero
        numero += 5
    }

    res.innerHTML += `${posicao}, Fim! <br><br>`

    for (let i = 0; i < 10; i++) {
        res.innerHTML += `Posição ${i}: ${posicao[i]} <br>`
    }
}