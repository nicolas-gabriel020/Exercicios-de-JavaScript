const executar = document.querySelector('#executar')
executar.addEventListener('click', vetor_automatico)

let res = document.querySelector('#res')

function vetor_automatico() {
    res.innerHTML = ''

    let sequencia = []
    let numero = 9

    res.innerHTML = 'Sequência: '

    for (let c = 0; c < 10; c++) {
        sequencia[c] = numero
        numero--
    }

    res.innerHTML += `${sequencia} Fim. <br><br>`

    for (let i = 0; i < 10; i++) {
        res.innerHTML += `Posição ${i}: ${sequencia[i]} <br>`
    }
}