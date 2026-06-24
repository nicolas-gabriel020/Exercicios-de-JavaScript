const botao = document.querySelector('#botao')
botao.addEventListener('click', valores_adicionados)

let numero = 1
function valores_adicionados() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let valor = document.querySelector('#valor')

    if (valor.value == '') {
        res.innerHTML = 'Por favor digite um valor!'
    } else {
        let falta = document.querySelector('#falta')
        let valor_formatado = Number(valor.value)
    }
}