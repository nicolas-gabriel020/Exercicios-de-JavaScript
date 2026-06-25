const botao = document.querySelector('#botao')
botao.addEventListener('click', valores_adicionados)

let c = 0
let soma = 0
let par = 0
let impar = 0
let media = 0
let maior
let menor

function valores_adicionados() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let valor = document.querySelector('#valor')
      
    if (valor.value == '') {
        res.innerHTML = 'Por favor preencha com todos os dados!'
    } else {
        let numero = Number(valor.value)
        let decimal = Math.floor(numero)

        if (numero != decimal) {
            res.innerHTML = 'Por favor digite apenas números inteiros!'
        } else {
            c++

            if (c == 1) {
                maior = numero
                menor = numero
            } else {
                if (numero > maior) {
                    maior = numero
                }

                if (numero < menor) {
                    menor = numero
                }
            }

            if (numero % 2 == 0) {
                par++
            } else {
               impar++ 
            }

            soma += numero

            if (c < 7) {
                res.innerHTML = `${c} número digitado!`
            } else if (c == 7) {
                media = soma / c
                res.innerHTML = `Soma total: ${soma} <br>
                Maior valor digita: ${maior} <br>
                Menor valor digitado: ${menor} <br>
                Quantidade de números pares: ${par} <br>
                Quantidade de números impares: ${impar} <br>
                Média dos números: ${media.toFixed(1)} <br>
                C: ${c}`
            } else {
                return(res.innerHTML = 'Sequência finalizada!')
            }
        }
    }
}

