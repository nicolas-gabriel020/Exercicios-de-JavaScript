let botao = document.querySelector('#calcular')
botao.addEventListener('click',clicado)

function clicado() {
    let salario = document.querySelector('#salario')
    let res = document.querySelector('#res')
    
    res.innerHTML = ''

    if (salario.value == '') {
        alert('Por favor digite o salário')
    } else {
        let salario_atual = Number(salario.value)

        let aumento = (salario_atual * 15) / 100
        let ValFin = aumento + salario_atual

        res.style.background = 'green'
        
        res.innerHTML = `Antigo salário: ${salario_atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} <br>
        Valor do aumento após 15%: ${aumento.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} <br>
        Novo salário: ${ValFin.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    }
}