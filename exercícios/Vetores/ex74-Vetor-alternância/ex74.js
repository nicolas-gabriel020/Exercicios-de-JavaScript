const executar = document.querySelector('#executar')
executar.addEventListener('click', vetor_automatico)

let res = document.querySelector('#res')

function vetor_automatico() {
    res.innerHTML = ''

    let sequencia = []

    res.innerHTML = 'Sequência: '

    for (let c = 0; c < 10; c++) {

        if (c % 2 == 0) {
            sequencia[c] = 5
        } else {
            sequencia[c] = 3
        }
    }

    res.innerHTML += `${sequencia}, Fim. <br><br>`

    for (let i = 0; i < 10; i++) {
        res.innerHTML += `Posição ${i}: ${sequencia[i]} <br>`
    }
}