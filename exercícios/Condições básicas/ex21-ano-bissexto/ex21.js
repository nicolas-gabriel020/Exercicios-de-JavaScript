let botao = document.querySelector('#botao')
botao.addEventListener('click',calcular)

function calcular() {
    let res = document.querySelector('#res')
    let numero = document.querySelector('#ano')

    res.innerHTML = ''
    res.style.background = ''

    if (numero.value == '') {
        alert('Por favor digite um número!')
    } else {
        let ano = Number(numero.value)

        if (ano <= 0) {
            alert('Por favor digite um ano válido!')
        } else {
            if (ano % 4 == 0 && ano % 100 != 0 || ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0) {
            res.innerHTML = `${ano} é um ano bissexto! <br>
            O ano bissexto possui 366 dias!`
            res.style.background = 'green'
        } else {
            res.innerHTML = `${ano} não é um ano bissexto! <br>
            O ano possui 365 dias!`
            res.style.background = 'red'
        }
        }
    }
}