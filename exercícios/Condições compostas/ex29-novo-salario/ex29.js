const botao = document.querySelector('#botao')
botao.addEventListener('click', funcionario)

function funcionario() {
    let res = document.querySelector('#res')

    res.innerHTML = ''
    res.style.background = ''

    let nome = document.querySelector('#nome')
    let salario = document.querySelector('#salario')
    let anos = document.querySelector('#anos')

    if (nome.value == '' || salario.value == '' || anos.value == '') {
        res.innerHTML = 'Por favor preencha com todos os dados!'

        res.style.background = 'red'
    } else {
        let dinheiro = Number(salario.value)
        let tempo = Number(anos.value)

        let tempo_formatado = Math.floor(tempo)

        if (tempo != tempo_formatado) {
            alert('Por favor preencha os anos trabalhados corretamente!')
        } else if (tempo <= 3) {
            let aumento = dinheiro * 0.03
            let novo_salario = aumento + dinheiro

            res.innerHTML = `Funcionario: ${nome.value} <br>
            Salário atual: ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Tempo de empresa: ${tempo} anos <br>
            Percentual aplicado: 3% <br>
            Aumento: ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Novo salario: ${novo_salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`

            res.style.background = 'yellow'
        } else if (tempo <= 9) {
            let aumento = dinheiro * 0.125
            let novo_salario = aumento + dinheiro

            res.innerHTML = `Funcionario: ${nome.value} <br>
            Salário atual: ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Tempo de empresa: ${tempo} anos <br>
            Percentual aplicado: 12,5% <br>
            Aumento: ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Novo salario: ${novo_salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`

            res.style.background = 'blue'
        } else {
            let aumento = dinheiro * 0.20
            let novo_salario = aumento + dinheiro

            res.innerHTML = `Funcionario: ${nome.value} <br>
            Salário atual: ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Tempo de empresa: ${tempo} anos <br>
            Percentual aplicado: 20% <br>
            Aumento: ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Novo salario: ${novo_salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`

            res.style.background = 'green'
        }
        }
    }




        