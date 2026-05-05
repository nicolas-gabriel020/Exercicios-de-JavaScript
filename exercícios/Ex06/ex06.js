let botao = document.querySelector('#calcular')
botao.addEventListener('click',clicou)

function clicou() {
    if (document.querySelector('#numero').value == '') {
        window.alert('[ERRO]! por favor, digite um número!')
    } else {
        let numero = Number(document.querySelector('#numero').value)
        let res = document.querySelector('#res')
        res.innerHTML = ''

        let menor = numero - 1
        let maior = numero + 1

        res.innerHTML += `O antecessor de ${numero} é ${menor} <br>
        O sucessor de ${numero} é ${maior}` 
    }
}