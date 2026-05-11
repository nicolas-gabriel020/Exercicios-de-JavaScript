let botao = document.querySelector('#calcular')
botao.addEventListener('click', calcular)

function calcular() {
    let km = document.querySelector('#km')
    let dias = document.querySelector('#dias')
    let res = document.querySelector('#res')

    res.innerHTML = ''

    if (km.value == '' || dias.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let quilometro = Number(km.value)
        let tempo = Number(dias.value)

        let valor_dias = tempo * 90
        let valor_quilometros = quilometro * 0.20
        let valor_total = valor_dias + valor_quilometros

        res.innerHTML = `Valor pelos dias: ${valor_dias.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}} <br>
        Valor pelos quilometros: ${valor_quilometros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}} <br>
        Valor total a ser pago: ${valor_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}}`
    }
}