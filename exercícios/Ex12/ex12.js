let botao = document.querySelector('#botao')
botao.addEventListener('click',clicado)

function clicado() {
    let valor_original = document.querySelector('#valor')

    if (valor_original.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let res = document.querySelector('#res')

        let preco = Number(valor_original.value)
        let desconto = (preco * 5) / 100
        let promocao = preco - desconto

        res.innerHTML = `Preço original ${preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} <br>
        Desconto R$ 5 <br>
        Preço promocional ${promocao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    }
}