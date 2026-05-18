let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    let valor = document.querySelector('#valor')

    res.innerHTML = ''
    res.style.background = ''

    if (valor.value == '') {
        alert('Por favor preencha o campo!')
    } else {
        let numero = Number(valor.value)
        let sobra = numero % 2
        let decimal = Math.floor(numero)

        if (numero != decimal) {
            alert('Por favor insira um número inteiro!')
        } else {
            if (numero % 2 == 0) {
            res.innerHTML = `O resto da divisão por 2 foi ${sobra.toFixed(2)} <br>`
            res.innerHTML += `${numero} é um número PAR!`
            res.style.background = 'blue'
        } else {
            res.innerHTML = `O resto da divisão por 2 foi ${sobra.toFixed(2)} <br>`
            res.innerHTML += `${numero} é um número ÍMPAR!`
            res.style.background = 'orange'
        }
        }
    }
}