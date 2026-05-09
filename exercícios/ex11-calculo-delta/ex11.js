let calculo = document.querySelector('#calculo')
calculo.addEventListener('click', clicou)

function clicou() {
    let ValA = document.querySelector('#ValA')
    let ValB = document.querySelector('#ValB')
    let ValC = document.querySelector('#ValC')

    if (ValA.value == '' || ValB.value == '' || ValC.value == '') {
        alert('Por favor preencha todos os campos!')

    } else {
        let valorA = Number(ValA.value)
        let valorB = Number(ValB.value)
        let valorC = Number(ValC.value)

        let delta = ((valorB ** 2) - (4 * valorA * valorC))

        let res = document.querySelector('#res')

        if (delta > 0) {
            res.innerHTML = `O valor de delta é positivo ${delta}`
            res.style.background = 'green'
        } else if (delta < 0) {
            res.innerHTML = `O valor de delta é negativo ${delta}`
            res.style.background = 'red'
        } else {
            res.innerHTML = `O valor de delta é igual a zero ${delta}`
            res.style.background = 'yellow'
        }
}
}