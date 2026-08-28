const executar = document.querySelector('#executar')
executar.addEventListener('click', verificador)

let res = document.querySelector('#res')
let valor1 = document.querySelector('#valor1')
let valor2 = document.querySelector('#valor2')

function verificador() {
    if (valor1.value == '' || valor2.value == '') {
        res.innerHTML = 'Por favor digite os dois valores'
        valor1.focus()
    } else {
        let numero1 = Number(valor1.value)
        let numero2 = Number(valor2.value)

        valor1.value = ''
        valor2.value = ''
        valor1.focus()

        somador(numero1, numero2)
    }
}

function somador(num1, num2) {
    let soma = num1 + num2

    res.innerHTML = `A soma entre ${num1} e ${num2} é igual a ${soma}`
}