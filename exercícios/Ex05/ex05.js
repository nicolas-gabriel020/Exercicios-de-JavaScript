let botao = document.getElementById('calcular')
botao.addEventListener('click',clicou)

function clicou() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    if (document.querySelector('#num1').value === '' || document.querySelector('#num2').value === '') {
        window.alert('Por favor, preencha todas as notas!')
    } else {
        let numero1 = Number(document.querySelector('#num1').value)
        let numero2 = Number(document.querySelector('#num2').value)

        let media = (numero1 + numero2) / 2

        res.innerHTML = `A média entre ${numero1} e ${numero2} é igual a ${media}`
    }
}