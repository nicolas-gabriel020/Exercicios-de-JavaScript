const botao = document.querySelector('#botao')
botao.addEventListener('click', emprestimo)

function emprestimo() {
    let res = document.querySelector('#res')

    let casa = document.querySelector('#casa')
    let salario = document.querySelector('#salario')
    let anos = document.querySelector('#anos')

    if (casa.value == '' || salario.value == '' || anos.value == '') {
        res.innerHTML = 'Por favor preencha todos os dados!'
    } else {
        let casa_valor = Number(casa.value)
        let dinheiro = Number(salario.value)
        let tempo = Number(anos.value)
        let decimal = Math.floor(tempo)

        if (casa_valor <= 0 || dinheiro <= 0 || tempo <= 0 || tempo != decimal) {
            alert('Por favor coloque valores válidos!')
        } else {
            let meses = tempo * 12
            let prestacao = casa_valor / meses
            let limite_salario = dinheiro * 0.30

            if (prestacao > limite_salario) {
            res.innerHTML = `Valor da casa: ${casa_valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Salário do comprador: ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Prazo em anos: ${tempo} <br>
            Prazo em meses: ${meses} <br>
            Valor da prestação: ${prestacao.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Limite permitido pelo banco: ${limite_salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Situação: emprestimo não aprovado!`
            } else {
            res.innerHTML = `Valor da casa: ${casa_valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Salário do comprador: ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Prazo em anos: ${tempo} <br>
            Prazo em meses: ${meses} <br>
            Valor da prestação: ${prestacao.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Limite permitido pelo banco: ${limite_salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Situação: emprestimo aprovado!`
            }
        }
    }
}