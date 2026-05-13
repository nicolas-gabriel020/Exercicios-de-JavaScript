let botao = document.getElementById('converter')
botao.addEventListener('click', conversao)

function conversao() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    if (document.querySelector('#reais').value === '') {
        res.innerHTML = 'Por favor digite um valor!'
    } else {
        let num = Number(document.querySelector('#reais').value)
        let dolar = num / 3.45

        res.innerHTML = `Com ${num.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} você pode comprar US$ ${dolar.toFixed(2)}`
    }
}