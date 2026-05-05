let botao = document.querySelector('#calcular')
botao.addEventListener('click',clicou)

function clicou() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let numero = Number(document.querySelector('#numero').value)

    let dobro = numero * 2
    let terca = numero / 3

    res.innerHTML += `O dobro de ${numero} é ${dobro} <br>`
    res.innerHTML += `A terça parte de ${numero} é ${terca.toFixed(5)}`

}