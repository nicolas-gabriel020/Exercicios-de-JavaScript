let numero = document.querySelector('#idade')
let genero = document.getElementsByName('genero')
let tempo = document.querySelector('#tempo')
let res = document.querySelector('#res')

const botao = document.querySelector('#botao')
botao.addEventListener('click', cadastro)

let c = 0
let homem = 0
let soma_homem = 0
let media_homem = 0
let mulher = 0
let mulher_20 = 0
let media_geral = 0
let soma = 0
let maior_idade = 0
let menor_idade = 0
let porcentagem_homem = 0 
let porcentagem_mulher = 0
let exato_18 = 0
let diferenca = 0

function cadastro() {
    res.innerHTML = ''

    if (numero.value == '') {
        res.innerHTML = 'Por favor insira uma idade!'
        numero.focus()
    } else {
        let idade = Number(numero.value)
        let decimal = Math.floor(idade)

        if (idade != decimal || idade <= 0) {
            res.innerHTML = 'Por favor coloque uma idade válida!'
            numero.focus()
        } else {
            numero.value = ''
            numero.focus()

            c++

            if (c == 1) {
                maior_idade = idade
                menor_idade = idade
            } else {
                if (idade > maior_idade) {
                    maior_idade = idade
                }

                if (idade < menor_idade) {
                    menor_idade = idade
                }
            }

            if (genero[0].checked) {
                homem++
                soma_homem += idade
            } else {
                mulher++

                if (idade > 20) {
                    mulher_20++
                }
            }

            if (idade == 18) {
                exato_18++
            }

            soma += idade

            if (c < 5) {
                tempo.innerHTML = `Digite a idade da ${c + 1}ª`
            } else if (c == 5) {

                if (homem == 0) {
                    media_homem = 0
                } else {
                    media_homem = soma_homem / homem
                }

                media_geral = soma / c
                diferenca = maior_idade - menor_idade
                porcentagem_homem = (homem / 5) * 100
                porcentagem_mulher = (mulher / 5) * 100

                res.innerHTML = `Total de homens cadastrados: ${homem} <br>
                Total de mulheres cadastradas: ${mulher} <br><br>
                Porcentagem de homens cadastrados: ${porcentagem_homem.toFixed(1)}% <br>
                Porcentagem de mulheres cadastradas: ${porcentagem_mulher.toFixed(1)}% <br><br>
                Média de idade do grupo: ${media_geral.toFixed(1)} <br>
                Média de idade dos homens: ${media_homem.toFixed(1)} <br><br>
                Maior idade: ${maior_idade} <br>
                Menor idade: ${menor_idade} <br><br>
                Total de pessoas com 18 anos: ${exato_18} <br>
                Total de mulheres com mais de 20 anos: ${mulher_20} <br>
                Diferença entre maior e menor idade: ${diferenca}`
            } else {
                res.innerHTML = 'Todos os cadastros já foram realizados!'
            }
        }
    }
}