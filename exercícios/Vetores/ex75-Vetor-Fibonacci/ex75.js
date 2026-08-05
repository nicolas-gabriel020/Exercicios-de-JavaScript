const executar = document.querySelector('#executar')
executar.addEventListener('click', vetor_automatico)

let res = document.querySelector('#res')

function vetor_automatico() {
    let numero_1 = 1
    let numero_2 = 1
    let numero_3 = 0

    res.innerHTML = ''

    let sequencia = []

    res.innerHTML = 'Sequência: '

    for (let c = 0; c < 16; c++) {
        sequencia.push(numero_1)

        numero_1 = numero_2 + numero_3
        numero_3 = numero_2
        numero_2 = numero_1
    }

    res.innerHTML += `${sequencia}, Fim! <br><br>`

    for (let i = 0; i < 16; i++) {
        res.innerHTML += `Posição ${i}: ${sequencia[i]} <br>`
    }
}