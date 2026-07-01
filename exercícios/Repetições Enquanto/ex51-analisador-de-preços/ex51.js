const botao = document.querySelector('#botao')
botao.addEventListener('click', precos)

let c = 0
let media = 0
let soma = 0
let diferenca = 0
let maior100 = 0
let menor50 = 0
let maior
let menor

function precos() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let numero = document.querySelector('#valor')

    if (numero.value == '') {
        res.innerHTML = 'Por favor digite o preço!'
        numero.focus()
    } else {
        let preco = Number(numero.value)

        if (preco <= 0) {
            res.innerHTML = 'Por favor digite um preço válido!'
            numero.focus()
        } else {
            numero.value = ''
            numero.focus()

            c++

            if (c == 1) {
                maior = preco
                menor = preco
            } else {
                if (preco > maior) {
                    maior = preco
                }

                if (preco < menor) {
                    menor = preco
                }
            }

            if (preco > 100) {
                maior100++
            }

            if (preco < 50) {
                menor50++
            }

            soma += preco

            
            if (c < 8) {
                if (c == 1) {
                    res.innerHTML = `${c} produto adicionado!`
                } else {
                    res.innerHTML = `${c} produtos adicionados!`
                }
            } else if (c == 8) {
                media = soma / c
                diferenca = maior - menor

                res.innerHTML = `Maior preço digitado: ${maior.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
                Menor preço digitado: ${menor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br><br>
                Total de produtos maiores que 100R$: ${maior100} <br>
                Total de produtos menores que 50R$: ${menor50} <br><br>
                Soma de todos os preços: ${soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
                Média dos preços: ${media.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
                Diferença entre o maior e o menor valor digitado: ${diferenca}`
            } else {
                res.innerHTML = 'Total de preços ultrapassados!'
            }
        }
    }
}