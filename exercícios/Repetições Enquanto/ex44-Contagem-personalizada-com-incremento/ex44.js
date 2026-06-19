const botao = document.querySelector('#botao')
botao.addEventListener('click', contar)

function contar() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let incremento = document.querySelector('#incremento')

    if (inicio.value == '' || fim.value == '' || incremento.value == '') {
        res.innerHTML = 'Por favor preencha todos os dados!'
    } else {
        let inicio_formatado = Number(inicio.value)
        let fim_formatado = Number(fim.value)
        let incremento_formatado = Number(incremento.value)

        let inicio_decimal = Math.floor(inicio_formatado)
        let fim_decimal = Math.floor(fim_formatado)

        if (incremento_formatado <= 0) {
            alert('Insira um incremento válido!')
        } else if (inicio_formatado != inicio_decimal || fim_decimal != fim_formatado) {
            alert('Por favor digite números sem casas decimais!')
        } else {
            let total = 0
            let soma = 0
            let maior = inicio_formatado
            let menor = inicio_formatado

            if (inicio_formatado < fim_formatado) {
                while (inicio_formatado < fim_formatado) {
                    res.innerHTML += `${inicio_formatado} `

                    if (inicio_formatado > maior) {
                        maior = inicio_formatado
                    }

                    if (inicio_formatado < menor) {
                      menor = inicio_formatado  
                    }

                    total++
                    soma += inicio_formatado

                    inicio_formatado += incremento_formatado
                }
            } else {
                while (inicio_formatado > fim_formatado) {
                    res.innerHTML += `${inicio_formatado} `

                    if (inicio_formatado > maior) {
                        maior = inicio_formatado
                    }

                    if (inicio_formatado < menor) {
                        menor = inicio_formatado
                    }

                    total++
                    soma += inicio_formatado

                    inicio_formatado -= incremento_formatado
                }
            }
            res.innerHTML += `Acabou! <br><br>
            Total de números exibidos: ${total} <br>
            Soma dos números exibidos: ${soma} <br>
            Maior valor mostrado: ${maior} <br>
            Menor valor mostrado: ${menor}`
        }
    }
}