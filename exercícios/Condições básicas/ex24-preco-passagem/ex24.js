let botao = document.querySelector('#botao')
botao.addEventListener('click', calcular)

function calcular() {
    let res = document.querySelector('#res')
    let km = document.querySelector('#km')

    res.innerHTML = ''
    res.style.background = ''

    if (km.value == '') {
        alert('Por favor preencha todos os campos!')
    } else {
        let km_percorrido = Number(km.value)

        if (km_percorrido <= 0) {
            alert('Por favor coloque um valor válido!')
        } else {
            if (km_percorrido <= 200) {
                let centavos = 0.50
                let dinheiro = km_percorrido * centavos

                res.innerHTML = `Distância desejada: ${km_percorrido} km <br>
                Preço aplicado por quilômento: ${centavos.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
                Valor a ser pago: ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`

                res.style.background = 'blue'
        }   else {
                let valor_normal = km_percorrido * 0.50
                let valor_desconto = km_percorrido * 0.45
                let economia = valor_normal - valor_desconto
                let centavos = 0.45
                let dinheiro = km_percorrido * centavos

                res.innerHTML = `Distância desejada: ${km_percorrido} km <br>
                Preço aplicado por quilômento: ${centavos.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
                Valor a ser pago: ${dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
                Você economizou ${economia.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} por usar a tarifa de longa distância!`

                res.style.background = 'green'
        }
        }
    }
}