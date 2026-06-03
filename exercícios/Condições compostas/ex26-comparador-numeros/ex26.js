const botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')

    res.innerHTML = ''
    res.style.background = ''

    let valor1 = document.querySelector('#numero1')
    let valor2 = document.querySelector('#numero2')

    if (valor1.value == '' || valor2.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let numero1 = Number(valor1.value)
        let numero2 = Number(valor2.value)
        let decimal1 = Math.floor(numero1)
        let decimal2 = Math.floor(numero2)

        if (numero1 != decimal1 || numero2 != decimal2) {
            alert('Por favor preencha apenas com números inteiros (sem virgula)')
        } else if (numero1 > numero2){
            let diferenca = numero1 - numero2

            res.innerHTML = `Primeiro valor: ${numero1} <br>
            Segundo valor: ${numero2} <br><br>
            O primeiro valor é o maior! <br>
            Diferença entre eles: ${diferenca}`

            res.style.background = 'green'
        } else if (numero2 > numero1) {
            let diferenca = numero2 - numero1

            res.innerHTML = `Primeiro valor: ${numero1} <br>
            Segundo valor: ${numero2} <br><br>
            O segundo valor é o maior! <br>
            Diferença entre eles: ${diferenca}`

            res.style.background = 'blue'
        } else {
            res.innerHTML = `Primeiro valor: ${numero1} <br>
            Segundo valor: ${numero2} <br><br>
            Não existe valor maior, os dois são iguais! <br>`

            res.style.background = 'yellow'
        }
    }
}