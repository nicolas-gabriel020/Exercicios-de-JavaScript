let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    let nome = document.querySelector('#nome')
    let compra = document.querySelector('#compra')
    let redsex = document.getElementsByName('redsex')

    if (nome.value == '' || compra.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        if (redsex[0].checked) {
            let valor = Number(compra.value)
            let desconto = valor * 0.05
            let valor_formatado = valor - desconto

            res.innerHTML = `Comprador: ${nome.value} <br>
            Valor original: ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Desconto aplicado: ${desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Valor final com 5% de desconto: ${valor_formatado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            res.style.background = 'blue'
        } else {
            let valor = Number(compra.value)
            let desconto = valor * 0.13
            let valor_formatado = valor - desconto

            res.innerHTML = `Compradora: ${nome.value} <br>
            Valor original: ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Desconto aplicado: ${desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
            Valor final com 13% de desconto: ${valor_formatado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
            res.style.background = 'purple'
        }
    }
}