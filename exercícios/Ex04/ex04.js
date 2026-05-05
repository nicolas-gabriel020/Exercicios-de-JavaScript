var botao = document.getElementById('mostra')
botao.addEventListener('click',clicou)

function clicou () {
    var n1 = document.querySelector('#num1')
    var n2 = document.querySelector('#num2')

    var numero1 = Number(n1.value)
    var numero2 = Number(n2.value)

    var res = document.querySelector('#res')

    res.innerHTML = `A soma entre ${numero1} e ${numero2} é igual a ${numero1 + numero2}`
}