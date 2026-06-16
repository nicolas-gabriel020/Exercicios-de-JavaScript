const botao = document.querySelector('#botao')
botao.addEventListener('click',reajuste_salarial)

function reajuste_salarial() {
    let res = document.querySelector('#res')

    let nome = document.querySelector('#nome')
    let dinheiro = document.querySelector('#salario')
    let tempo = document.querySelector('#anos')
    let sexo = document.getElementsByName('sexo')

    if (nome.value == '' || dinheiro.value == '' || tempo.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let salario = Number(dinheiro.value)
        let anos = Number(tempo.value)
        let aumento = 0
        let percentual = 0
        let genero = null

        if (salario <= 0 || anos <= 0) {
            res.innerHTML = 'Por favor preencha com valores válidos!'
        } else {
            if (sexo[0].checked) {

                genero = 'Mulher'

                if (anos < 15) {
                    percentual = 0.05
                    aumento = salario * percentual
                } else if (anos <= 20) {
                    percentual = 0.12
                    aumento = salario * percentual
                } else {
                    percentual = 0.23
                    aumento = salario * percentual
                }

            } else {

                genero = 'Homem'

                if (anos < 20) {
                    percentual = 0.03
                    aumento = salario * percentual
                } else if (anos <= 30) {
                    percentual = 0.13
                 aumento = salario * percentual  
                } else {
                    percentual = 0.25
                    aumento = salario * percentual
                }
            }

            let novo_salario = aumento + salario

            res.innerHTML = `Funcionário: ${nome.value} <br>
            Sexo: ${genero} <br>
            Tempo de empresa: ${anos} <br><br>
            Salário atual: ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Percentual aplicado: ${percentual * 100}% <br>
            Aumento: ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Novo salário: ${novo_salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
        }
    }
}