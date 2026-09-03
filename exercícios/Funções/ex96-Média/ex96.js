const executar = document.querySelector('#executar')
executar.addEventListener('click', valores)

let res = document.querySelector('#res')
let valor1 = document.querySelector('#valor1')
let valor2 = document.querySelector('#valor2')

function valores() {
    if (valor1.value == '' || valor2.value == '') {
        res.innerHTML = 'Por favor digite as duas notas!'
        valor1.focus()
    } else {
        let nota1 = Number(valor1.value)
        let nota2 = Number(valor2.value)

        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            res.innerHTML = 'Por favor coloque notas válidas!'
            valor1.focus()
        } else {
            valor1.value = ''
            valor2.value = ''
            valor1.focus()

            let resultado = media(nota1, nota2)

            res.innerHTML = `A média das notas ${nota1} e ${nota2} é ${resultado}`
        }
    }
}

function media(num1, num2) {
    let resposta = (num1 + num2) / 2

    return(resposta)
}