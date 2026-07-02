const botao = document.querySelector('#botao')
let pessoa = document.querySelector('#pessoa')
botao.addEventListener('click', idades)

let c = 0
let media = 0
let soma = 0
let mais_18 = 0
let menor_5 = 0
let maior = 0
let menor = 0
let exato_18 = 0
let mais_60 = 0
let diferenca = 0
let porcentagem_18 = 0

function idades() {
    let res = document.querySelector('#res')
    res.innerHTML = ''

    let numero = document.querySelector('#idade')

    if (numero.value == '') {
        res.innerHTML = 'Por favor digite uma idade!'
        numero.focus()
    } else {
        let idade = Number(numero.value)
        let decimal = Math.floor(idade)

        if (idade != decimal || idade <= 0) {
            res.innerHTML = 'Por favor digite uma idade válida!'
            numero.focus()
        } else {
            numero.value = ''
            numero.focus()

            c++

            if (c == 1) {
                maior = idade
                menor = idade
            } else {
                if (idade > maior) {
                    maior = idade
                }

                if (idade < menor) {
                    menor = idade
                }
            }

            if (idade > 18) {
                mais_18++
            } 

            if (idade == 18) {
                exato_18++
            }

            if (idade < 5) {
                menor_5++
            }

            if (idade > 60) {
                mais_60++
            }

            soma += idade

            if (c < 10) {
                pessoa.innerHTML = `Digite a idade da ${c + 1}ª pessoa`
            } else if(c == 10) {
                media = soma / c
                diferenca = maior - menor
                porcentagem_18 = (mais_18 / 10) * 100

                res.innerHTML = `Total de idades cadastradas: ${c} <br><br>
                Média das idades: ${media.toFixed(1)} <br>
                Pessoas com mais de 18 anos: ${mais_18} <br>
                Pessoas com menos de 5 anos: ${menor_5} <br><br>
                Maior idade cadastrada: ${maior} <br>
                Menor idade cadastrada: ${menor} <br><br>
                Diferença entra a maior e menor idade: ${diferenca} <br><br>
                Total de pessoas com exatamente 18 anos: ${exato_18} <br>
                Pessoas com mais de 60 anos: ${mais_60} <br>
                Porcentagem de pessoas com mais de 18 anos: ${porcentagem_18} %`
            } else {
                res.innerHTML = 'Total de idades máximas atingida!'
            }
        }
    }
}