const botao = document.querySelector('#botao')
botao.addEventListener('click', somatorio)

let res = document.querySelector('#res')
let valor = document.querySelector('#valor')
let posicao = document.querySelector('#posicao')

let c = 0
let soma = 0
let total = 0
let media = 0
let maior = 0
let menor = 0
let par = 0
let impar = 0
let recomecar = false

function somatorio() {
    if (recomecar) {
        let c = 0
        let soma = 0
        let total = 0
        let media = 0
        let maior = 0
        let menor = 0
        let par = 0
        let impar = 0
        let recomecar = false
    }

    res.innerHTML = `Aguardando execução... <br><br> 
    Observação: Ao digitar o número 1111 e executar a sequência se encerra`

    if (valor.value == '') {
        res.innerHTML = 'Por favor digite um valor'

        valor.focus()
    } else {
        let numero = Number(valor.value)
        let decimal = Math.floor(numero)
        
        if (numero != decimal || numero < 0) {
            res.innerHTML = 'Por favor digite apenas números válidos!'

            valor.focus()
        } else {
            valor.value = ''
            valor.focus()

            if (numero !== 1111) {
                c++
                soma += numero
                total++

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

                posicao.innerHTML = `Digite o ${c + 1}º número`
            } else {
                recomecar = true
                botao.innerHTML = 'Recomeçar'

                media = soma / total

                if (total == 0) {
                    media = 0
                }

                res.innerHTML = `Total de números digitados: ${c} <br>
                Soma de todos os números: ${soma} <br>
                Média dos números: ${media.toFixed(1)} <br><br>
                Maior número digitado: ${maior} <br>
                Menor número digitado: ${menor} <br><br>
                Total de números pares: ${par} <br>
                Total de números ímpares: ${impar}`
            }
        }
    }
}